import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  localStorage;
  usersList: any[];
  loggedUser: {name: string, auth: boolean} | undefined;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    this.localStorage = document.defaultView?.localStorage;
    this.usersList = this.getUsers();
    this.loggedUser = undefined;
  };

  ngOnInit(): void {
    this.usersList = this.getUsers();
    this.loggedUser = this.usersList.find((user: { auth: boolean; }) => user.auth == true);
    if(!this.loggedUser ) {
      console.log("Redirected to login page.")
      this.router.navigate(["/login"]);
    } else {
      console.log(`User: ${this.loggedUser.name} is logged in`);
    }
  };

  getUsers(){
    const users = this.localStorage?.getItem("users");
    if (!!users) {
      return JSON.parse(users);
    } else {
      this.localStorage?.setItem("users", JSON.stringify([]));
      return [];
    };
  }

  signOut(){
    this.loggedUser = this.usersList.find((user: { auth: boolean; }) => user.auth == true);
    if(this.loggedUser){
      this.loggedUser.auth = false;
      localStorage.setItem("users", JSON.stringify(this.usersList));
      console.log("Signed out successfully.")
      this.router.navigate(["/login"]);
    }
  }
}
