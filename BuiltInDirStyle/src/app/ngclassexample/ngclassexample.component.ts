import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclassexample',
  templateUrl: './ngclassexample.component.html',
  styleUrls: ['./ngclassexample.component.css']
})
export class NgclassexampleComponent implements OnInit {
  marks: Number = 70;
  myclass: String = "";
  constructor() { 
        if(this.marks >= 35){
          this.myclass = "class1";
        }
        else{
          this.myclass = "class2";
        }
  }
  
  ngOnInit() {
  }

}
