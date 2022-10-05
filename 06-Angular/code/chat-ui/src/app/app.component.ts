import { ChatService } from './chat.service';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
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

  //STEP 2: Create the constructor
  ngOnInit():void {

  }
  //STEP 3: Function for on Change
  onChatInputChange($event: any): void{
    this.chatInputText = $event.target.value;
  }

  //STEP 4: Function for the onSend
  onSend(input: string):void{
    console.log("OnSend", input)
    //STEP 17 add messages to the array
    this.chatService.addMessage(input);

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
