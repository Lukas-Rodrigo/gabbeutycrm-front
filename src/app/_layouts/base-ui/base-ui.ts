import {Component} from '@angular/core';
import {SidebarTest} from '../../_components/sidebar-test/sidebar-test';

@Component({
  selector: 'app-base-ui',
  imports: [
    SidebarTest
  ],
  templateUrl: './base-ui.html',
  styleUrl: './base-ui.css'
})
export class BaseUi {

}
