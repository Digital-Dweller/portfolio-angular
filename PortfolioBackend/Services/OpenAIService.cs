using System.ClientModel;
using System.Reflection;
using Microsoft.Extensions.Options;
using OpenAI;
using OpenAI.Chat;
using PortfolioBackend.Configurations;


namespace PortfolioBackend.Services
{
    public class OpenAIService
    {
        private  ChatCompletion chatCompletion;
        private readonly ChatClient chatClient;

        public OpenAIService(IOptions<OpenAIOptions> options)
        {
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
    }
}
