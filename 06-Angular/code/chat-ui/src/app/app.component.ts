import { MessageSender } from './message';
import { ChatService } from './chat.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-ui';

  //STEP 9 Intialize the Service
  constructor (private chatService:ChatService){
    // STEP  10 Open message.component.html
  }

  //STEP 1: add the chatInputText variable
  chatInputText = "";


  // STEP 28 Ask for user input when starting
  user:any
   //STEP 2: Create the constructor
  ngOnInit():void {
    // STEP 29 get user name at start
    this.user = prompt("What's your name?")
  }
  //STEP 3: Function for on Change
  onChatInputChange($event: any): void{
    this.chatInputText = $event.target.value;
  }

  //STEP 4: Function for the onSend
  onSend(input: string):void{
    console.log("OnSend", input)
    //STEP 17 add messages to the array

    //STEP 30
    const message ={
      // STEP 32 Change message to text
      text: input,
      sender: this.user
    }
    //STEP 31 change (input) to (message)
    this.chatService.addMessage(message);

    //STEP 18 clear input text
    this.chatInputText = ''

    //STEP 19 run your code and validate



  }
  //======== AFTER BREAK =======
  // STEP 5: Create a service from the command line

  // > ng generate service chat

  // STEP 6: Open file
  // chat.service.ts

}
