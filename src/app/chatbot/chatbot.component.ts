import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
declare var df: any;

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent  implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.loadChatbotScript();
    
  }

  loadChatbotScript() {
    const script = document.createElement('script');
    script.src = `https://bot.dialogflow.com/ad225b06-b5e8-4020-84e6-30f167908f0d`;
    script.onload = () => {
      df.Create({
        config: {
          chatId: environment.dialogflowChatId,
          lang: 'es'
        }
      });
    };
    document.head.appendChild(script);
  }
}
