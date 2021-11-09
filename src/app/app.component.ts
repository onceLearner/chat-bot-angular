import { ConnectService } from './connect.service';
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
  constructor(private connectService: ConnectService) { }



  ngOnInit(): void {
    // ...
    // this.ConnectService
    console.log("hhh")
  }

  title = 'chat-bot';
  msg_id = ""

  bg_user = "https://cdn-icons-png.flaticon.com/512/1869/1869679.png"
  // bg_bot = "https://image.flaticon.com/icons/svg/327/327779.svg"
  bg_bot = "https://freesvg.org/img/1538298822.png"

  user_input = ""

  messages = [
    {
      id: 1,
      text: "          bonjour, Bienvenue  ! vous pouvez commencez le Chat en envoyant un 'salut'.",
      sender: 'bot',
      position: "left",
      bg: this.bg_bot
    },
    // {
    //   id: 2,
    //   text: "         je suis le user",
    //   sender: 'user',
    //   position: "right",
    //   bg: this.bg_user
    // },

  ]



  messages_user: Array<MsgUser> = []


  add_message_user(user_input: string) {
    this.user_input = user_input
    this.messages.push({
      id: 3,
      text: user_input,
      sender: 'user',
      position: "right",
      bg: this.bg_user
    })



    setTimeout(() => {


      fetch(this.connectService.endpoint, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: 10,
          idDiscussion: 12,
          text: "hello world "
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.error({ e }))


      // fetch(this.connectService.endpoint)
      //   .then(response => response.json())
      //   .then(data => console.log(data))
      //   .catch(e => console.error({ e }))

      // this.connectService.test_endpoint()
      // .then(res => {
      //   console.log({ res })
      // }).catch(err => {
      //   console.error({ err })
      // })

      this.add_message_bot("Merci pour ton message, je  te repondérais plus tard!")
    }, 800)



  }


  add_message_bot(bot_input: string) {
    this.messages.push({
      id: 4,
      text: bot_input,
      sender: 'bot',
      position: "left",
      bg: this.bg_bot
    })
  }



}
