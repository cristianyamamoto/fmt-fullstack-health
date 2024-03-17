import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup(
    {
      name: new FormControl(""),
      email: new FormControl(""),
      birthdate: new FormControl(""),
      password: new FormControl(""),
      confirm_password: new FormControl("")
    }
  )
  usersList: any[];
  localStorage;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    this.localStorage = document.defaultView?.localStorage;
    this.usersList = this.getUsers();
  };

  ngOnInit(): void {
    this.usersList = this.getUsers();
  };

  getUsers(){ // : string[]
    const users = this.localStorage?.getItem("users");
    if (!!users) {
      return JSON.parse(users);
    } else {
      this.localStorage?.setItem("users", JSON.stringify([]));
      return [];
    };
  }

  authenticateEmail(email: string | null | undefined) {
    this.usersList = this.getUsers();
    return this.usersList.find((user: {
      email: string | null | undefined;
    }) => {
      if(user.email == email) {
        return user;
      }
      return undefined;
    });;
  }

  signUp(){
    const inputs = [
      { "name": this.signUpForm.value.name },
      { "E-mail": this.signUpForm.value.email },
      { "Birthdate" : this.signUpForm.value.birthdate },
      { "Password": this.signUpForm.value.password },
      { "Confirm Password": this.signUpForm.value.confirm_password },
    ]

    const checkFormInputs = inputs.find((input) => {
      if(!Object.values(input)[0]) {
        alert(`Fill ${Object.keys(input)} field!`);
        return true;
      }
      return false;
    });

    if (!checkFormInputs){
      if(inputs[3]["Password"] === inputs[4]["Confirm Password"]) {
        if(this.authenticateEmail(inputs[1]["E-mail"])) {
          alert("User E-mail already taken!");
        } else {
          const newUser = {
            name: inputs[0]["name"],
            email: inputs[1]["E-mail"],
            birthdate: inputs[2]["Birthdate"],
            password: inputs[3]["Password"],
            auth: false
          };
          this.usersList.push(newUser);
          this.localStorage?.setItem("users", JSON.stringify(this.usersList));
          alert("User created successfully!");
          this.signUpForm.reset();
        }
      } else {
        alert("Password doesn't match!");
      }
    }
  }
}
