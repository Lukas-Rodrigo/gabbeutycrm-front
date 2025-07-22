import {Component} from '@angular/core';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {InputMask} from 'primeng/inputmask';
import {Textarea} from 'primeng/textarea';
import {PrimaryButton} from '../primary-button/primary-button';
import {Button} from 'primeng/button';
import {ProfilePreviewForm} from '../profile-preview-form/profile-preview-form';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {ClientService} from '../../_service/client-service';
import {ClientModel} from '../../models/Client.model';
import {concatMap} from 'rxjs';
import {MessageService} from 'primeng/api';

type ClientFormGroup = {
  id: FormControl<number | null>;
  fullName: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  photo: FormControl<string | null>;
  observation: FormControl<string | null>;
};

@Component({
  selector: 'app-add-clients-overlay-form',
  imports: [Dialog, InputText, InputMask, Textarea, Textarea, PrimaryButton, Button, ProfilePreviewForm, ReactiveFormsModule,


  ],
  templateUrl: './add-clients-overlay-form.html',
  styleUrl: './add-clients-overlay-form.css'
})
export class AddClientsOverlayForm {

  visible: boolean = false;
  imagePreview: string | null = null;
  public clientForm = new FormGroup<ClientFormGroup>({
    id: new FormControl(null),
    fullName: new FormControl(
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(37)]
    ),
    phoneNumber: new FormControl(
      '',
      [Validators.required]
    ),
    observation: new FormControl(''),
    photo: new FormControl(''),
  });

  constructor(private clientService: ClientService, private messageService: MessageService) {
  }

  public newClient(userId: number, client: ClientModel) {
    return this.clientService.saveClient(
      1,
      client
    )
      .pipe(concatMap(() => this.clientService.getAllClients$(1)))
      .subscribe({
        next: () => {
          this.showSuccessToast();
        }
      });
  }

  showSuccessToast() {
    this.messageService.add({
      severity: 'success',
      summary: "Cliente cadastrado",
      detail: "O cliente foi salvo com sucesso!",
      life: 3000,
    })
  }

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    if (!this.clientForm.valid) {
      return;
    }
    const client: ClientModel = this.clientForm.getRawValue();
    this.newClient(
      1,
      client
    )
    this.clientForm.reset();
    this.imagePreview = null;
    this.visible = false;
  }

  getProperty(property: string) {
    return this.clientForm.get(property)?.value ?? "";
  }

  phoneErrors() {
    const phoneNumberField = this.clientForm.get("phoneNumber")

    if (phoneNumberField?.invalid && phoneNumberField?.dirty) {
      return 'O número de telefone é obrigatório.';
    }
    return null;
  }

  nameErrors() {
    const clientNameField = this.clientForm.get("fullName")

    if (clientNameField?.invalid && clientNameField.dirty && clientNameField?.value?.length == 0) {
      return 'O nome do cliente é obrigatório.';
    }
    return null;

  }

  onPhotoSelected(base64: string | null) {
    this.imagePreview = base64;
    this.clientForm.get('photo')?.setValue(base64);

  }

}
