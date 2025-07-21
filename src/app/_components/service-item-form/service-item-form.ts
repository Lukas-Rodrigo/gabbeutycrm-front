import {Component, Input} from '@angular/core';
import {BusinessServiceModel} from '../../models/BusinessService.model';

@Component({
  selector: 'app-service-item-form',
  imports: [],
  templateUrl: './service-item-form.html',
  styleUrl: './service-item-form.css'
})
export class ServiceItemForm {

  @Input() titleService: string = ""
  @Input() priceService: string = ""


  showOverlay = false;
  private lastClickTime = 0;

  handleClick(event: MouseEvent) {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouch) {
      const now = Date.now();
      const doubleClick = now - this.lastClickTime < 200000;

      if (doubleClick) {
        alert('Adicionado!');
        this.showOverlay = false;
        this.lastClickTime = 0;
      } else {
        this.showOverlay = true;
        this.lastClickTime = now;

        setTimeout(
          () => {
            this.showOverlay = false;
          },
          2000
        );
      }
    }
  }

}
