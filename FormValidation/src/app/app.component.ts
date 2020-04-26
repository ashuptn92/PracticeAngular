import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg: String = "";
  myform: FormGroup;

  constructor(){
    this.myform = new FormGroup({
      firstname: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern("^[a-zA-Z]*$")]),
      lastname: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern("^[a-zA-Z]*$")]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2.15})*$")]),
      amount: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      gender: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required])
    });
  }

  onRegisterClick(){
    if(this.myform.valid){
      this.msg = "First Name : "+this.myform.controls.firstname.value+ "<br>Last Name : "+this.myform.controls.lastname.value
      +"<br>Email : "+this.myform.controls.email.value +"<br>Amount : "+this.myform.controls.amount.value+"<br>Gender : "
      +this.myform.controls.gender.value+"<br>Country : "+this.myform.controls.country.value;
    }
    else{
      this.msg = "Invalid";
    }
  }
}
