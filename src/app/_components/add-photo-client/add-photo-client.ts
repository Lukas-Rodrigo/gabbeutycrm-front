import {ChangeDetectorRef, Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-add-photo-client',
  imports: [],
  templateUrl: './add-photo-client.html',
  styleUrl: './add-photo-client.css'
})
export class AddPhotoClient {

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {
  }


  selectedFile: File | null = null;
  profileImagePreview: string | null = null;


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

}
