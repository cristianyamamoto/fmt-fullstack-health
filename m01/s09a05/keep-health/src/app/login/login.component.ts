import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup(
    {
      email: new FormControl(""), //  [Validators.required, ]
      password: new FormControl("")
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
    this.createTempUser();
  };

  createTempUser(){
    let tempUser = {
      name: "cristian",
      email: "cristian_yamamoto@estudante.sesisenai.org.br",
      birthdate: "1998/05/06",
      password: "123",
      auth: false
    };
    if (this.authenticateEmail(tempUser.email) || this.authenticateEmail(tempUser.name)) {
      // console.log("User already exists.");
    } else {
      console.log("User created successfully.");
      this.usersList.push(tempUser);
      this.localStorage?.setItem("users", JSON.stringify(this.usersList));
    }
  }

  getUsers(){ // : string[]
    const users = this.localStorage?.getItem("users");
    if (!!users) {
      return JSON.parse(users);
    } else {
      this.localStorage?.setItem("users", JSON.stringify([]));
      return [];
    };
  }

  signIn() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    if (!email){
      alert("Fill E-mail field!");
    } else if (!password) {
      alert("Fill Password field!");
    } else {
      const user = this.authenticateEmail(email);
      if(user) {
        this.authenticatePassword(user, this.loginForm.value.password);
      } else {
        alert("User E-mail not found!");
      }
    }
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

  authenticatePassword(user: {
    auth: boolean;
    password: string;
  }, password: string | null | undefined) {
    if(user.password == password){
      user.auth = true;
      localStorage.setItem("users", JSON.stringify(this.usersList));
      this.router.navigate(["/home"]);
      console.log("You're logged in.");
    } else {
      alert("Incorrect Password!");
    }
  }

  forgotPassword() {
    console.log("forgotPassword() called");
    const email = this.loginForm.value.email;
    if (email) {
      let user = this.usersList.find((user: { email: string | null | undefined; }) => user.email == email);
      user.password = "a1b2c4d4";
      localStorage.setItem("users", JSON.stringify(this.usersList));
      alert("Password changed to default: a1b2c4d4");
    }
  }
}
