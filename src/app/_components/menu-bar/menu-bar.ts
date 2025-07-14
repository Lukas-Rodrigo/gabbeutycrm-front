import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Button} from 'primeng/button';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  imports: [
    Button,
    NgClass,
    NgIf
  ],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css'
})

export class MenuBar implements OnInit {

  isExpanded = true;

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-bars'
      },
      {
        icon: 'pi pi-search'
      }
    ];
  }

}
