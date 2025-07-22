import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {UserActions} from '../../_components/user-actions/user-actions';
import {
  CardInformation
} from '../../_components/card-information/card-information';
import {Table, TableModule} from 'primeng/table';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  TableAppointments
} from '../../_components/table-appointments/table-appointments';
import {TableClients} from '../../_components/table-clients/table-clients';
import {ClientService} from '../../_service/client-service';


export interface Client {
  id: number;
  fullName: string;
  createdAt: string;
  phoneNumber: string;
  status: string;
}

export interface Appointment {
  id: number;
  date: string;
  client: Client;
  service: string;
  status: string;
  price: number;
}

@Component({
  selector: 'app-clients',
  imports: [
    UserActions,
    CardInformation,
    TableModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    TableAppointments,
    TableClients,


  ],
  templateUrl: './clients.html',
  styleUrl: './clients.css'
})


export class Clients implements OnInit {


  @ViewChild('dt2') dt2!: Table;
  searchValue: string | undefined;
  showClients = true;
  clientsData: Client[] = [

    {
      id: 1,
      status: "Ativo",
      fullName: "Lucas Rodrigo",
      phoneNumber: "75 981069197",
      createdAt: "06/07/2025"
    },

    {
      id: 1,
      status: "Inativo",
      fullName: "Lucas Rodrigo",
      phoneNumber: "75 981069197",
      createdAt: "06/07/2025"
    },

    {
      id: 1,
      status: "Ativo",
      fullName: "Gabriela Peixoto",
      phoneNumber: "75 981069197",
      createdAt: "06/07/2025"
    },

    {
      id: 1,
      status: "Inativo",
      fullName: "Lucas Rodrigo",
      phoneNumber: "75 981069197",
      createdAt: "06/07/2025"
    },


  ];
  appointmentData: Appointment[] = [
    {
      id: 1,
      client: {
        id: 1,
        status: "Ativo",
        fullName: "Lucas Rodrigo",
        phoneNumber: "75 981069197",
        createdAt: "06/07/2025"
      },
      service: "Lash",
      date: "05/03/2025 as 17:30",
      status: "Pendente",
      price: 80.00
    },

    {
      id: 2,
      client: {
        id: 1,
        status: "Pendente",
        fullName: "Lucas Rodrigo",
        phoneNumber: "75 981069197",
        createdAt: "06/07/2025"
      },
      service: "Design com Henna",
      date: "05/03/2025 as 17:30",
      status: "Pendente",
      price: 35.00
    },

    {
      id: 3,
      client: {
        id: 1,
        status: "Concluido",
        fullName: "Gabriela Peixoto",
        phoneNumber: "75 981069197",
        createdAt: "06/07/2025"
      },
      service: "Lash Lifting",
      date: "05/03/2025 as 17:30",
      status: "Cancelado",
      price: 85.00
    },
    {
      id: 4,
      client: {
        id: 1,
        status: "Concluido",
        fullName: "Lucas Rodrigo",
        phoneNumber: "75 981069197",
        createdAt: "06/07/2025"
      },
      service: "Lash",
      date: "05/03/2025 as 17:30",
      status: "Concluido",
      price: 80.00
    }
  ]
  #clientService = inject(ClientService);
  public getAllClients = this.#clientService.getAllClients;

  ngOnInit(): void {
    this.#clientService.getAllClients$(1).subscribe()

  }

  showEvent(event: boolean) {
    this.showClients = event;
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

  rowClass(client: Client) {
    const search = this.searchValue?.toLowerCase() ?? '';
    return {
      '!bg-primary !text-primary-contrast':
        client.fullName.toLowerCase().includes(search) ||
        client.status.toLowerCase().includes(search) ||
        client.phoneNumber.toLowerCase().includes(search) ||
        client.createdAt.toLowerCase().includes(search)
    };
  }

  getStatusClient(cliente: Client) {
    return {
      'bg-red-500': cliente.status === 'Inativo',
      'bg-green-500': cliente.status === 'Ativo'
    };
  }

  getStatusAppointment(appointment: Appointment) {
    return {
      'bg-yellow-500': appointment.status === 'Pendente',
      'bg-green-500': appointment.status === 'Concluido',
      'bg-red-500': appointment.status === 'Cancelado',
    };
  }

}
