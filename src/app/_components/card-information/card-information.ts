import {Component, input} from '@angular/core';

@Component({
  selector: 'app-card-information',
  imports: [],
  templateUrl: './card-information.html',
  styleUrl: './card-information.css'
})
export class CardInformation {

  titleIcon = input('');
  titleCard = input('');
  contentCard = input('');
  showDetails = input(false);
  statisticDetail = input(false);

}
