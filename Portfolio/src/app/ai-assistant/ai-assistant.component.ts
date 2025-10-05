import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-assistant',
  standalone: false,
  templateUrl: './ai-assistant.component.html',
  styleUrl: './ai-assistant.component.css'
})
export class AIAssistantComponent {
  AIchatOpen = false;

  toggleAIchat() {
    this.AIchatOpen = !this.AIchatOpen;
  }

}
