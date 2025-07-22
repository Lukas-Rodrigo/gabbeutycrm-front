import {Component, inject, Input, OnInit, signal} from '@angular/core';
import {StepperModule} from 'primeng/stepper';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {PrimaryButton} from '../primary-button/primary-button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {DatePickerModule} from 'primeng/datepicker';
import {SelectButton} from 'primeng/selectbutton';
import { SelectModule } from 'primeng/select';
import {Profile} from '../profile/profile';
import {JsonPipe, NgClass} from '@angular/common';
import {ProfilePreviewForm} from '../profile-preview-form/profile-preview-form';
import {
  SummaryServicesForm
} from '../summary-services-form/summary-services-form';
import {ServiceItemForm} from '../service-item-form/service-item-form';
import {BusinessServiceModel} from '../../models/BusinessService.model';
import {ClientModel} from '../../models/Client.model';
import {ClientService} from '../../_service/client-service';


@Component({
  selector: 'app-add-appointment-overlay-form',
  imports: [StepperModule, Button, Dialog, PrimaryButton, FormsModule, DatePickerModule, SelectButton, SelectModule, Profile, NgClass, ProfilePreviewForm, SummaryServicesForm, ServiceItemForm, ReactiveFormsModule, JsonPipe],
  templateUrl: './add-appointment-overlay-form.html',
  styleUrl: './add-appointment-overlay-form.css'

})
export class AddAppointmentOverlayForm implements OnInit{

  #clientService = inject(ClientService);
  public getAllClients = this.#clientService.getAllClients;
  clients = signal<ClientModel[]>([])

  clientSelected = signal<ClientModel | null>(null)



  ngOnInit() {
    this.#clientService.getAllClients$(1).subscribe({
      next: (res) => {
        this.clients.set(res ?? [])
      }

    })



    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year + 2;

    let nextMonths = (month === 11) ? 0 : month + 3;
    this.minDate = new Date();
    this.minDate.setDate(today.getDate() - 7);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonths);
    this.maxDate.setFullYear(nextYear);


  }

  appointmentForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    hour: new FormControl(null, [Validators.required]),
    client: new FormControl('', [Validators.required]),
  })

  onClientSelected(client: ClientModel) {
    this.clientSelected.set(client);
    console.log(this.clientSelected());
  }


  serviceItems: BusinessServiceModel[] = [
    {
      id: 1,
      price: "85,00",
      name: "Brown Lamination",
    },
    {
      id: 2,
      price: "30,00",
      name: "Design com Henna",
    },
    {
      id: 3,
      price: "85,00",
      name: "Basic Design",
    },
  ]
  chosenServiceItems: BusinessServiceModel[] = []

  addServiceToCar(ServiceItem: BusinessServiceModel) {
    this.chosenServiceItems.push(ServiceItem);
  }

  minDate: Date | undefined;

  maxDate: Date | undefined;


  visible: boolean = false;
  value!: number;

  activeStep: number = 1;

  selectedCountry: string | undefined;

  hours: any[] = [
    { hour: '13:30' },
    { hour: '14:30' },
    { hour: '15:00' },
    { hour: '15:30' },
    { hour: '16:30' },
    { hour: '17:00' }
  ];



  formValidated() {
    return this.appointmentForm.valid;
  }


  showDialog() {
    this.visible = true;
    this.appointmentForm.reset();
    this.clientSelected.set(null)
  }


}
