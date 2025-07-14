import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button-table',
  imports: [
    NgClass
  ],
  templateUrl: './button-table.html',
  styleUrl: './button-table.css'
})
export class ButtonTable {


  buttonTitle = input('')
  iconTitle = input('')
  primaryHover = input(false)
}
