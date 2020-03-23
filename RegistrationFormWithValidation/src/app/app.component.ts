import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 username: String = "";
 password: String = "";
 conpassword: String = "";
 acceptlicenseagreement: boolean = false;
 gender: String = "";
 country: String = "";
 msg: String = "";

 RegisterClick(){
   this.msg = "Username: "+this.username+" <br>Password: "+this.password+"<br> Confirm Password: "+this.conpassword+
   "<br> Accept license agreement: "+this.acceptlicenseagreement+" <br>Gender: "+this.gender+"<br>Country: "+this.country;
 }
}
