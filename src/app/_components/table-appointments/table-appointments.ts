import {Component, input, output, ViewChild} from '@angular/core';
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {PrimaryButton} from "../primary-button/primary-button";
import {PrimeTemplate} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {ButtonTable} from '../button-table/button-table';
import {Profile} from '../profile/profile';
import {Tooltip} from 'primeng/tooltip';
import {Appointment} from '../../_pages/clients/clients';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-table-appointments',
  imports: [
    Button,
    FormsModule,
    IconField,
    InputIcon,
    InputText,
    PrimaryButton,
    PrimeTemplate,
    TableModule,
    ButtonTable,
    Profile,
    Tooltip,
    NgClass
  ],
  templateUrl: './table-appointments.html',
  styleUrl: './table-appointments.css'
})
export class TableAppointments {

  appointmentData = input<Appointment[]>([]);
  showClientsTable = output<boolean>();

  @ViewChild('dt2') dt2!: Table;
  searchValue: string | undefined;

  showClientsTableChange() {
    this.showClientsTable.emit(true);
  }

  openAppointmentTable() {
    this.showClientsTable.emit(false);
  }

  onGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dt2.filterGlobal(
      input.value,
      'contains'
    );
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }

  getStatusAppointment(appointment: Appointment) {
    return {
      'bg-yellow-500': appointment.status === 'Pendente',
      'bg-green-500': appointment.status === 'Concluido',
      'bg-red-500': appointment.status === 'Cancelado',
    };
  }

}
