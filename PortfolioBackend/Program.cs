using System.Text.Json;
using Microsoft.AspNetCore.OpenApi;
using PortfolioBackend.Configurations;
using PortfolioBackend.Models;
using PortfolioBackend.Services;

var builder = WebApplication.CreateBuilder(args);

//Get the OpenAI options from the appsettings.json and bind it to the OpenAIOptions instance.
builder.Services.Configure<OpenAIOptions>(builder.Configuration.GetSection("OpenAI"));

// Add services to the container.
builder.Services.AddSingleton<OpenAIService>();
builder.Services.AddControllers();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

//Enable CORS to enable communication from the frontend.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AngularDevPolicy", policy =>
        policy.WithOrigins("http://localhost:50290")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

app.UseCors("AngularDevPolicy");

//Construct the dataset's file path.
var datasetPath = Path.Combine(AppContext.BaseDirectory, "PortfolioChatbotDataset.json");
//Create a list of portfolio projects using the dataset.
var projects = JsonSerializer.Deserialize<List<PortfolioProject>>(File.ReadAllText(datasetPath)) ?? new List<PortfolioProject>();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
