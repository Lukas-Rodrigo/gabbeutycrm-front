import { Component } from '@angular/core';
import {PrimaryButton} from "../primary-button/primary-button";
import {
  AddClientsOverlayForm
} from '../add-clients-overlay-form/add-clients-overlay-form';
import {
  AddAppointmentOverlayForm
} from '../add-appointment-overlay-form/add-appointment-overlay-form';

@Component({
  selector: 'app-user-actions',
  imports: [
    PrimaryButton,
    AddClientsOverlayForm,
    AddAppointmentOverlayForm
  ],
  templateUrl: './user-actions.html',
  styleUrl: './user-actions.css'
})
export class UserActions {

}
