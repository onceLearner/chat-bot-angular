import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http: HttpClient) {

  }

  endpoint = 'https://opennlpchartbot.herokuapp.com/welcome';

  get_all_messages() {
    return this.http.get<any>(this.endpoint).toPromise()
      .then(res => res)
      .catch(er => er)
  }


  test_endpoint() {
    this.http.get<any>(this.endpoint).toPromise()
      .then(res => {
        console.log({ res })
      })
      .catch(err => { console.error({ err }) })
  }

}
