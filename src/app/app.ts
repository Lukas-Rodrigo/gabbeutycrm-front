import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {BaseUi} from './_layouts/base-ui/base-ui';
import {RouterOutlet} from '@angular/router';
import {Toast} from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, BaseUi, RouterOutlet, Toast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gabbeutycrm-front';
}
