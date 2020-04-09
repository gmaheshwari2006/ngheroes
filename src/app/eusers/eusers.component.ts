import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { USERS } from './mockUsers';

@Component({
  selector: 'app-eusers',
  templateUrl: './eusers.component.html',
  styleUrls: ['./eusers.component.css']
})
export class EusersComponent implements OnInit {
  user = {
    id: 1,
    name: 'Windstorm'
  };
  users = USERS;
  selectedUser: User;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
