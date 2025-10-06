import { Component } from '@angular/core';

interface AIConversation {
  author: 'user' | 'ai';
  content: string;
}

@Component({
  selector: 'app-ai-assistant',
  standalone: false,
  templateUrl: './ai-assistant.component.html',
  styleUrl: './ai-assistant.component.css'
})
export class AIAssistantComponent {
  AIchatOpen = false;

  conversation: AIConversation[] = [];
  userInput = '';

  toggleAIchat() {
    this.AIchatOpen = !this.AIchatOpen;
  }

  addUserMessage() {
    const inputTrimmed = this.userInput.trim();
    if (!inputTrimmed) return;

    this.conversation.push({ author: 'user', content: inputTrimmed });

    //AI response placeholder.
    setTimeout(() => {
      this.conversation.push({ author: 'ai', content: `You said: "${inputTrimmed}"` });
    }, 500);

  }

}
