import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {

    
  }

  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const intent = res.result.metadata.intentName;
        console.log('intent: ' + intent);
        console.log(speech);
        if (intent.trim() == 'candidate in city - yes'.trim()) {
          console.log('you are here');
    
          const pos = JSON.stringify(res.result.contexts[0].parameters.posts[0]);
          // const  loc= res.result.contexts[0].parameters.geo-city.original;

          const avail = JSON.stringify(res.result.contexts[0].parameters.availability[0]);
          console.log(pos);
          console.log(avail);
          if (pos && avail) {
            const response = this.mockService(pos[0], avail[0], 'loc', 'high', 0);
            console.log(response);
            const botMessage = new Message(response, 'system');
            this.update(botMessage);
          }
          else {
          const botMessage = new Message(speech, 'bot');
          this.update(botMessage);
        }
        }
        else {
          const botMessage = new Message(speech, 'bot');
          this.update(botMessage);
        }
      });
  }
 buttonconverse(msg: string) {
    const userMessage = new Message(msg, 'user');
    //this.update(userMessage);

    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const intent = res.result.metadata.intentName;
        console.log('intent: ' + intent);
        console.log(speech);
        if (intent.trim() == 'candidate in city - yes'.trim()) {
          console.log('you are here');
    
          const pos = JSON.stringify(res.result.contexts[0].parameters.posts[0]);
          // const  loc= res.result.contexts[0].parameters.geo-city.original;

          const avail = JSON.stringify(res.result.contexts[0].parameters.availability[0]);
          console.log(pos);
          console.log(avail);
          if (pos && avail) {
            const response = this.mockService(pos[0], avail[0], 'loc', 'high', 0);
            console.log(response);
            const botMessage = new Message(response, 'system');
            this.update(botMessage);
          }
          else {
          const botMessage = new Message(speech, 'bot');
          this.update(botMessage);
        }
        }
        else {
          const botMessage = new Message(speech, 'bot');
          this.update(botMessage);
        }
      });
  }



  // Adds message to source
  update(msg: Message) {


    this.conversation.next([msg]);
   // document.getElementById( 'bottom' ).scrollIntoView();
  }
  mockService(pos: string, avail: string, loc: string, credit: string, no: number) {
    return 'we found 2 drivers with 1 driver as Potential High Tax Credit. Plz follow this link';
  }


    
    


}