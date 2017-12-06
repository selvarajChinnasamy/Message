import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {
  data: any[];
   url='https://platform.clickatell.com/messages/http/send?apiKey=K8drxuVcRnOfhFG9MnAb8w==&to=';
  constructor(private http:HttpClient) { }
  sendMessage(ph:number,mes:string) {
    console.log('Sending sms...');
    return this.http.get(this.url+ph+'&content='+mes);
  }
}
