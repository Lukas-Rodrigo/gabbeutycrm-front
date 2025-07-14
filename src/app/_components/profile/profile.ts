import {Component, Input, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    NgClass
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  small = input(false)

  @Input() nameClient: string = '';
  @Input() showDetails: boolean = false;
}
