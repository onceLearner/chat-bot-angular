import { Component } from '@angular/core';


interface MsgUser {
  id: Number
  text: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-bot';

  user_input = ""

  messages_bot = [
    {
      id: 1,
      text: "          bonjour, Bienvenue  ! vous pouvez commencez le Chat en envoyant un 'salut'."
    },





  ]


  messages_user: Array<MsgUser> = []


  add_message_user(user_input: string) {
    this.user_input = user_input
    this.messages_user.push({
      id: Math.floor(Math.random() * 20)
      ,
      text: user_input
    })

    setTimeout(() => {
      this.messages_bot.push({ id: 6, text: "Merci pour ton message, je  te repondérais plus tard!" })
    }, 800)

    console.log({ user_messages: this.messages_user })
    // this.messages_user.push({ id: 1, text: "hhh" })

  }



}
