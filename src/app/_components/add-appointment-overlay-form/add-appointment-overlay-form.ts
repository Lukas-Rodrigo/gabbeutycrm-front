import {Component, OnInit} from '@angular/core';
import {StepperModule} from 'primeng/stepper';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {PrimaryButton} from '../primary-button/primary-button';
import {FormsModule} from '@angular/forms';
import {DatePickerModule} from 'primeng/datepicker';
import {SelectButton} from 'primeng/selectbutton';
import { SelectModule } from 'primeng/select';
import {Profile} from '../profile/profile';
import {NgClass} from '@angular/common';
import {ProfilePreviewForm} from '../profile-preview-form/profile-preview-form';
import {
  SummaryServicesForm
} from '../summary-services-form/summary-services-form';
import {ServiceItemForm} from '../service-item-form/service-item-form';


@Component({
  selector: 'app-add-appointment-overlay-form',
  imports: [StepperModule, Button, Dialog, PrimaryButton, FormsModule, DatePickerModule, SelectButton, SelectModule, Profile, NgClass, ProfilePreviewForm, SummaryServicesForm, ServiceItemForm],
  templateUrl: './add-appointment-overlay-form.html',
  styleUrl: './add-appointment-overlay-form.css'

})
export class AddAppointmentOverlayForm implements OnInit{

  visible: boolean = false;
  date2: Date | undefined;
  value!: number;
  countries: any[] | undefined;

  activeStep: number = 1;

  selectedCountry: string | undefined;

  hours: any[] = [
    { hour: '13:30', value: 1 },
    { hour: '14:30', value: 2 },
    { hour: '15:00', value: 3 },
    { hour: '15:30', value: 4 },
    { hour: '16:30', value: 5 },
    { hour: '17:00', value: 6 }
  ];

  ngOnInit() {
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
    ];
  }


  showDialog() {
    this.visible = true;
  }

}
