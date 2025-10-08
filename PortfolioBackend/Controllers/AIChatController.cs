using Microsoft.AspNetCore.Mvc;
using PortfolioBackend.Services;

//Configure the controller as an API controller and build the path for the API endpoints.
[ApiController]
[Route("api/[controller]")]
public class AIChatController : ControllerBase
{
    private readonly OpenAIService _openAIService;

    public AIChatController(OpenAIService openAIService)
    {
        _openAIService = openAIService;
    }
    //Handle POST requests sent to .../api/aichat/send 
    [HttpPost("send")]
    public async Task<IActionResult> SendMessage([FromBody] ChatRequest request)
    {
        //Return 400 error if no message was provided.
        if (string.IsNullOrWhiteSpace(request.Message))
            return BadRequest("Message cannot be empty");

        //Call the GetChatResponse method in the OpenAIService with the message provided in the POST request. 
        var response = await _openAIService.GetChatResponse(request.Message);
        //Return a 200 response with a JSON containing the response message provided by the OpenAI API.
        return Ok(new { reply = response });
    }
}

public class ChatRequest
{
    public string Message { get; set; }
}
