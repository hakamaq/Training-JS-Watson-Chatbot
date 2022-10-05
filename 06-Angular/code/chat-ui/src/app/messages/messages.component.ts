import { ChatService } from './../chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // STEP 13 define the Chatservice
  constructor(private chatService: ChatService) { }

  // STEP 14 define the messages list variable
  messages = this.chatService.messages

  //STEP 15 Open message.component.html

  ngOnInit(): void {
  }

}
