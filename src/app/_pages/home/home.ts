import {Component} from '@angular/core';
import {DateRange} from '../../_components/date-range/date-range';
import {
  CardInformation
} from '../../_components/card-information/card-information';
import {ProfileCard} from '../../_components/profile-card/profile-card';

@Component({
  selector: 'app-home',
  imports: [
    DateRange,
    CardInformation,
    ProfileCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
