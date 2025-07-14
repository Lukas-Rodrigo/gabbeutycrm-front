import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {InputMask} from 'primeng/inputmask';
import {Textarea} from 'primeng/textarea';
import {PrimaryButton} from '../primary-button/primary-button';
import {Button} from 'primeng/button';
import {ProfilePreviewForm} from '../profile-preview-form/profile-preview-form';

@Component({
  selector: 'app-add-clients-overlay-form',
  imports: [
    Dialog,
    InputText,
    InputMask,
    Textarea,
    Textarea,
    PrimaryButton,
    Button,
    ProfilePreviewForm,


  ],
  templateUrl: './add-clients-overlay-form.html',
  styleUrl: './add-clients-overlay-form.css'
})
export class AddClientsOverlayForm {

  visible: boolean = false;
  selectedFile: File | null = null;
  profileImagePreview: string | null = null;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {
  }


  showDialog() {
    this.visible = true;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();

      reader.onload = () => {
        this.ngZone.run(() => {
          this.profileImagePreview = reader.result as string;
          this.cdr.detectChanges();
        });
      };

      reader.readAsDataURL(file);
    }
  }

  removeProfileImage() {
    this.profileImagePreview = null;
    this.selectedFile = null;
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
