import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  //selector: 'app-test',<app-test>
  //selector: '.app-test', class="app-test"
  selector: '[app-test]', 
  templateUrl:'./test.component.html',
  styles: [`p{
             color:red
          }
          .abc{
            color:blue;
          }
          .dfg{
            font-style: italic;
          }`]
})
export class TestComponent implements OnInit {

  constructor() { }
  public testdata="chiled component ";
  isdisble=true;
  idname="testid";
  classname="abc";
  cssappy=false;
   multiclass={
    "abc" : true,
    "dfg" : true
  }
  stylecolor="yellow";
  multistyle={
    color:"green",
    fontStyle: "italic"
  }
  

  ngOnInit(): void {
  }
  showref="";
  funrefdata(refdara : any){
  console.log(refdara);    
  this.showref= refdara.value;
  }
  empname="";
  condition= true;
  colorcase="green";
}
