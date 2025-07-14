import {Component} from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {NgClass} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar-test',
  imports: [
    Avatar,
    NgClass,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidebar-test.html',
  styleUrl: './sidebar-test.css'
})
export class SidebarTest {



  isExpanded: boolean = false;


}
