import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { USERS } from './mockUsers';
import { UserService } from './user.service';
import { MessagesService } from '../messages/messages.service';

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
  users: User[];
  selectedUser: User;
  constructor(private userService: UserService, private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    this.messagesService.add(`UserService: Selected user id=${user.id}`);
  }

  onSelect1(id: number): void {
    this.messagesService.add(`UserService: Selected user id on select1=${id}`);
    this.userService.getUser(id).subscribe(user => this.selectedUser = user);
  }

  getUsers(): void {
    //this.users = this.userService.getUsers();
    this.userService.getUsers().subscribe(users => this.users = users);
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.addUser({ name } as User)
      .subscribe(user => {this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();
  }
}
