import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import usersdata from "../../assets/users.json"

interface user{
  email:String,
  password:String
}

@Component({
  selector: 'app-users.json',
  templateUrl: './users.json.component.html',
  styleUrls: ['./users.json.component.css']
})
export class UsersJsonComponent implements OnInit {
  constructor(private http: HttpClient) {}
  url:string='assets/users.json';
  usersData1:any
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.usersData1 = res;
    });
  }
  users:user[]=usersdata
}
