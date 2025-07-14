import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Clients} from './_pages/clients/clients';
import {BaseUi} from './_layouts/base-ui/base-ui';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, Clients, BaseUi, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gabbeutycrm-front';
}
