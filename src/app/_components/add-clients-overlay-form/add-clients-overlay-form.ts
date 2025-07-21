import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
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

@Component({
  selector: 'app-add-clients-overlay-form',
  imports: [Dialog, InputText, InputMask, Textarea, Textarea, PrimaryButton, Button, ProfilePreviewForm, ReactiveFormsModule,


  ],
  templateUrl: './add-clients-overlay-form.html',
  styleUrl: './add-clients-overlay-form.css'
})
export class AddClientsOverlayForm {

  visible: boolean = false;
  selectedFile: File | null = null;
  profileImagePreview: string | null = null;
  public clientForm = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(37)],
    ),
    phoneNumber: new FormControl(
      '',
      [Validators.required,],
    ),
    observation: new FormControl('',),
    photo: new FormControl('',),
  })

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {
  }

  showDialog() {
    this.visible = true;
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
    const clientNameField = this.clientForm.get("name")

    if (clientNameField?.invalid && clientNameField.dirty && clientNameField?.value?.length == 0) {
      return 'O nome do cliente é obrigatório.';
    }
    return null;

  }


  // uploadImage() {
  //   if (!this.selectedFile) return;
  //
  //   const formData = new FormData();
  //   formData.append(
  //     'file',
  //     this.selectedFile
  //   );
  //
  //   this.http.post(
  //     'URL_DO_BACKEND',
  //     formData
  //   ).subscribe({
  //     next: res => {
  //       console.log(
  //         'Imagem enviada!',
  //         res
  //       );
  //     },
  //     error: err => {
  //       console.error(
  //         'Erro no upload',
  //         err
  //       );
  //     }
  //   });
  // }

}
