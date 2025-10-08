import { Component } from '@angular/core';
import { ChatService } from '../services/aiChat.service';

//Interface for user and ai messages in the conversation.
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
  //Value to determine if the AI chat window is open or closed.
  AIchatOpen = false;

  //Array to hold the conversation between the user and the AI agent.
  conversation: AIConversation[] = [];
  userInput = '';
  constructor(private chatService: ChatService) { }

  //Function to toggle the AI chat window.
  toggleAIchat() {
    this.AIchatOpen = !this.AIchatOpen;
  }

  //Function to submit user messages to the AI agent.
  addUserMessage() {
    const inputTrimmed = this.userInput.trim();
    if (!inputTrimmed) return;

    //Add the users input to the conversation array.
    this.conversation.push({ author: 'user', content: inputTrimmed });

    //Send the user message to the back-end AI chat API and get the reponse.
    this.chatService.sendMessage(inputTrimmed).subscribe({
      next: (response) => {
        //Add the response to the conversation array.
        this.conversation.push({ author: 'ai', content: response.reply });
      },
      error: (err) => console.error('Error:', err)
    });

    //Clear the user input after being submitted.
    this.userInput = '';
  }

}
