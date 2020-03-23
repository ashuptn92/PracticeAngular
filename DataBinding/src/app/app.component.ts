import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 firstname: String = "Ashutosh";
 lastname: String = "Kumar";
 age: number = 27;
 receivenewsletter: boolean = true;
 gender: String = "Male";
 country: String = "INDIA";
 address: String = "http://www.facebook.com";

 ChangeData(){
  this.firstname = "Abhishek";
  this.lastname = "Patel";
  this.age = 25;
  this.receivenewsletter = false;
  this.gender = "Female";
  this.country = "UK";
}

}
