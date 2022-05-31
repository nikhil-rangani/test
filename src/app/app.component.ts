import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title : string = "nikhil";
  total = this.title.length;
  location= window.location.href;
  constructor(){}
  ngOnInit(): void {
    
  }
  btndata="";
  btnclick(event : any ){
    
    console.log(event);
    this.btndata=event.type;
  }  
  getname(){
    return "my name "+ this.title;
  }
  sendchild={
    abc:"wellcome ",
    zxc:"chiled"
  }
  databack="";
  persondata={
    "fname":"nikhil",
    "lnamwe":"rangani"
  }
  date=new Date();
}
