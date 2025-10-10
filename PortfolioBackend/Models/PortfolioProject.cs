using System.Text.Json.Serialization;

namespace PortfolioBackend.Models
{
    public class PortfolioProject
    {
        [JsonPropertyName("project_name")]
        public string ProjectName { get; set; }

        [JsonPropertyName("description")]
        public string Description { get; set; }

        [JsonPropertyName("technologies")]
        public List<string> Technologies { get; set; }

        [JsonPropertyName("features")]
        public List<string> Features { get; set; }

        [JsonPropertyName("challenges")]
        public List<string> Challenges { get; set; }

        [JsonPropertyName("implementation_details")]
        public List<string> ImplementationDetails { get; set; }
    }
}
