import {Component, input, output, Output, ViewChild} from '@angular/core';
import {ButtonTable} from "../button-table/button-table";
import {FormsModule} from "@angular/forms";
import {PrimeTemplate} from "primeng/api";
import {Profile} from "../profile/profile";
import {Table, TableModule} from "primeng/table";
import {Button} from 'primeng/button';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {PrimaryButton} from '../primary-button/primary-button';
import {Tooltip} from 'primeng/tooltip';
import {NgClass} from '@angular/common';
import {Client, Clients} from '../../_pages/clients/clients';

@Component({
  selector: 'app-table-clients',
  imports: [
    ButtonTable,
    FormsModule,
    PrimeTemplate,
    Profile,
    TableModule,
    Button,
    IconField,
    InputIcon,
    InputText,
    PrimaryButton,
    Tooltip,
    NgClass
  ],
  templateUrl: './table-clients.html',
  styleUrl: './table-clients.css'
})
export class TableClients {

  clientsData = input<Client[]>([])
  showClientsTable = output<boolean>();

  showClientsTableChange() {
    this.showClientsTable.emit(true);
  }

  closeClientsTable() {
    this.showClientsTable.emit(false);
  }


  @ViewChild('dt2') dt2!: Table;

  searchValue: string | undefined;

  getStatusClient(cliente: Client) {
    return {
      'bg-red-500': cliente.status === 'Inativo',
      'bg-green-500': cliente.status === 'Ativo'
    };
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }

  onGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dt2.filterGlobal(
      input.value,
      'contains'
    );
  }


}
