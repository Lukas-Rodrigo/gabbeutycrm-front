import {Component, OnInit} from '@angular/core';
import {SidebarTest} from '../../_components/sidebar-test/sidebar-test';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-base-ui',
  imports: [
    SidebarTest
  ],
  templateUrl: './base-ui.html',
  styleUrl: './base-ui.css'
})
export class BaseUi implements OnInit{


  ngOnInit() {
    console.log(environment.env)
  }
}
