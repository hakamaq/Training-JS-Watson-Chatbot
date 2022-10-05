import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  // STEP 7 create an array for our messages
  messages:Array<string> = []

  //STEP 8 create an addMessage
  addMessage(msg: string){
    this.messages.push(msg)
  }

}
