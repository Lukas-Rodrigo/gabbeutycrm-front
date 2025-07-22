import {Component, Input} from '@angular/core';
import {Divider} from 'primeng/divider';
import {ServiceItem} from '../service-item/service-item';
import {BusinessServiceModel} from '../../models/BusinessService.model';

@Component({
  selector: 'app-summary-services-form',
  imports: [
    Divider,
    ServiceItem
  ],
  templateUrl: './summary-services-form.html',
  styleUrl: './summary-services-form.css'
})
export class SummaryServicesForm {

  @Input() services: BusinessServiceModel[] = [];


}
