import {Component, ViewChild} from '@angular/core';
import {Drawer} from 'primeng/drawer';
import {Button} from 'primeng/button';
import {Avatar} from 'primeng/avatar';
import {Ripple} from 'primeng/ripple';
import {StyleClass} from 'primeng/styleclass';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  imports: [
    Drawer,
    Button,
    Avatar,
    Ripple,
    StyleClass
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  animations: [
    trigger(
      'toggleAnimation',
      [
        state(
          'open',
          style({
            height: '*',
            opacity: 1
          })
        ),
        state(
          'closed',
          style({
            height: '0px',
            opacity: 0
          })
        ),
        transition(
          'open <=> closed',
          [animate('0.2s ease-in-out')]
        )
      ]
    )
  ]
})
export class Sidebar {

  @ViewChild('drawerRef') drawerRef!: Drawer;
  visible: boolean = false;
  isFavoritosOpen: boolean = false;

  closeCallback(e: Event): void {
    this.drawerRef.close(e);
  }

}
