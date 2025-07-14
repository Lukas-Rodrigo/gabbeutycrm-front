import {Component} from '@angular/core';
import {Profile} from '../profile/profile';

@Component({
  selector: 'app-profile-card',
  imports: [
    Profile
  ],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {

}
