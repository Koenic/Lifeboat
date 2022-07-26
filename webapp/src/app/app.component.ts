import { Component } from '@angular/core';
import { FirebaseService } from './shared/services/firebase/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private firebase: FirebaseService) {}
}
