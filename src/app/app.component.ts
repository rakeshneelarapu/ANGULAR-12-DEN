import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchUsr: string | undefined;
  reputation = '';
  location = '';
  userList: any = [];

  constructor(private readonly appService: AppService) { }

  ngOnInit() {
    this.appService.getAllUsers().subscribe((users: any) => {
      this.userList = users.items;
    });
  }

  getUserDetails() {
    let usrObj = this.userList.find((item: any) => item.display_name === this.searchUsr);
    this.reputation = usrObj.reputation;
    this.location = usrObj.location;
  }
}
