import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../core/service/user.service";
import {User} from "../../../data/schema/user";
import {RegistrationDataService} from "../../../data/service/registration-data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user?: User
  registrations: User[] = []

  constructor(private userService: UserService,
              private registrationDataService: RegistrationDataService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getClientUser()
    this.registrationDataService.listRegistrations().subscribe(registrations => this.registrations = registrations)
  }

  avatarUrl(user: User, size: number): string {
    return `https://cravatar.eu/helmavatar/${this.user?.mcId}/${size}`
  }

}
