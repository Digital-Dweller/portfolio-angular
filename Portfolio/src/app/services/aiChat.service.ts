import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Make the service accessible from root (app wide).
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  //API URL for the back-end AI chat API.
  //private apiUrl = 'http://localhost:5028/api/aichat/send';
  private apiUrl = '/api';

  //Constructor providing the HttpCLient.
  constructor(private http: HttpClient) { }

  sendMessage(message: string) {
    //Send a POST request to the back-end AI chat API with the user input message and return the response back.
    return this.http.post<{ reply: string }>(this.apiUrl, { message });
  }
}
