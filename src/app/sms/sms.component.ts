import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  phone:number;
  mes:string;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
  }
sendMessage(){
this.dataservice.sendMessage(this.phone,this.mes).subscribe(res=>{
  console.log(res);
});
}
}
