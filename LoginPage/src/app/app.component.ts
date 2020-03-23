import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: String = "";
  password: String = "";
  msg: String = "";

  CheckLogin(txt1){
    if(this.username=="ashu" && this.password=="12345"){
        this.msg = "Successful loggedin";
    }
    else{
      this.msg = "Invalid Login";
      txt1.focus();
    }
  }
}
