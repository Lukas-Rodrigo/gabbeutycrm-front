import {Component, input} from '@angular/core';
import {Button} from 'primeng/button';


@Component({
  selector: 'app-primary-button',
  imports: [
    Button
  ],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css'
})
export class PrimaryButton {

  buttonTitle = input('')
  iconTitle = input('')
  primaryHover = input(false)

}
