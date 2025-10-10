using System.ClientModel;
using System.Reflection;
using Microsoft.Extensions.Options;
using OpenAI;
using OpenAI.Chat;
using PortfolioBackend.Configurations;
using PortfolioBackend.Models;


namespace PortfolioBackend.Services
{
    public class OpenAIService
    {
        private  ChatCompletion chatCompletion;
        private readonly ChatClient chatClient;
        private readonly List<PortfolioProject> _projects;


        public OpenAIService(IOptions<OpenAIOptions> options, List<PortfolioProject> projects)
        {
            //Get list of projects from the DI container.
            _projects = projects;

            //Get the OpenAI API key from the OpenAIOptions instance.
            var apiKey = options.Value.ApiKey;
            if (string.IsNullOrWhiteSpace(apiKey))
                throw new InvalidOperationException("OpenAI API key is missing or not configured.");

            //Create ChatClient object using the model and API key.
            chatClient = new("Add model or model URL here!", apiKey);

        }

        public async Task<string> GetChatResponse(string userMessage)
        {
            //Build the ChatCompletion object using the system prompt and user input.
            chatCompletion = chatClient.CompleteChat([
                new SystemChatMessage(
                    "You are a project assistant. ONLY answer using the provided 'Project data' JSON. " +
                    "Do NOT add, guess, or invent any information. If the answer cannot be formed " +
                    "entirely from the Project data, reply exactly: " +
                    "\"I don't know — that information isn't in the dataset.\" " +
                    "Be concise and reference only fields in the Project data (description, technologies, features, " +
                    "challenges, implementation_details)."
                    ),
                new UserChatMessage(
                    ChatMessageContentPart.CreateTextPart(userMessage)
                    )
                ],
                new ChatCompletionOptions(){
                MaxOutputTokenCount = 2048,
                }
            );
            //Get the response text from the ChatCompletion object.
            string chatResponseText = chatCompletion.Content[0].Text;
            return( chatResponseText );
        }

        //Helper function that checks if a project in the dataset is referenced in user input message.
        private PortfolioProject? FindProject(string message)
        {
            foreach (var project in _projects)
            {
                if (message.Contains(project.ProjectName, StringComparison.OrdinalIgnoreCase))
                    return project;
            }
            return null;
        }

        //Helper function that attempts to determine the intent of the user message by matching it up to an attribute of an entry in the dataset.
        private string? DetectIntent(string msg)
        {
            msg = msg.ToLower();
            if (msg.Contains("language") || msg.Contains("stack") || msg.Contains("built with"))
                return "technologies";
            if (msg.Contains("feature"))
                return "features";
            if (msg.Contains("challenge"))
                return "challenges";
            if (msg.Contains("implement"))
                return "implementation_details";
            if (msg.Contains("describe") || msg.Contains("what is"))
                return "description";
            return null;
        }

        //Helper function to generate a reply without calling to the OpenAI API if DetectIntent was able to determine the users intent from the message contents.
        private string DeterministicReply(PortfolioProject project, string field)
        {
            var val = field switch
            {
                //Match the attribute from the users input message and construct a string with the values found.
                "technologies" => project.Technologies != null
                    ? $"Technologies used in {project.ProjectName}: {string.Join(", ", project.Technologies)}."
                    : "No technologies listed.",
                "features" => project.Features != null
                    ? $"Key features of {project.ProjectName}: {string.Join(", ", project.Features)}."
                    : "No features listed.",
                "challenges" => project.Challenges != null
                    ? $"Challenges in {project.ProjectName}: {string.Join(", ", project.Challenges)}."
                    : "No challenges listed.",
                "implementation_details" => project.ImplementationDetails != null
                    ? $"Implementation details: {string.Join(", ", project.ImplementationDetails)}."
                    : "No implementation details listed.",
                "description" => project.Description ?? "No description available.",
                _ => "I don't have that information in the dataset."
            };

            return val;
        }
    }
}
