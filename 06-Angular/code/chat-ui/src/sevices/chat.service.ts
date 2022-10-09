// STEP 25 Import Message
import { Message } from './message';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() { }
  // STEP 7 create an array for our messages
  // STEP 24 change the type of Array<string> Message
  messages:Array<Message> = []

  //STEP 8 create an addMessage
  //STEP 26 Change msg:string to Message
  addMessage(msg: Message){
    this.messages.push(msg)
  }

  // STEP 27 Open app.component
}
