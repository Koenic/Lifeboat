import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AuthenticationService,
  User,
} from '@app/shared/services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('signinpopover', { static: false }) signInPopover;
  @ViewChild('signoutpopover', { static: false }) signOutPopover;
  public username: string;
  public user: User;

  constructor(private authentication: AuthenticationService) {}

  ngOnInit() {
    this.authentication.userObserver.subscribe((user) => {
      this.user = user;
    });
  }

  async signIn() {
    if (this.username?.length >= 3 && this.username?.length <= 20) {
      this.signInPopover.dismiss();
      await this.authentication.signIn(this.username);
    }
  }

  async signOut() {
    this.signOutPopover.dismiss();
    await this.authentication.signOut();
  }
}
