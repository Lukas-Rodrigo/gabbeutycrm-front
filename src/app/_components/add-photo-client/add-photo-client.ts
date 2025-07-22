import {
  ChangeDetectorRef,
  Component, EventEmitter,
  Input,
  NgZone, OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-add-photo-client',
  imports: [],
  templateUrl: './add-photo-client.html',
  styleUrl: './add-photo-client.css'
})
export class AddPhotoClient{

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {
  }


  selectedFile: File | null = null;

  @Input() profileImagePreview: string | null = null;
  @Input() inputProfile: boolean = false;

  @Output() imageSelected = new EventEmitter<string | null>();


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();

      reader.onload = () => {
        this.ngZone.run(() => {
          this.profileImagePreview = reader.result as string;
          this.imageSelected.emit(this.profileImagePreview);
          this.cdr.detectChanges();
        });
      };
      reader.readAsDataURL(file);
    }
  }

  showOverlay = false;
  private lastClickTime = 0;

  handleClick(event: MouseEvent) {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouch) {
      const now = Date.now();
      const doubleClick = now - this.lastClickTime < 200000;

      if (doubleClick) {
        alert('Adicionado!');
        this.showOverlay = false;
        this.lastClickTime = 0;
      } else {
        this.showOverlay = true;
        this.lastClickTime = now;

        setTimeout(
          () => {
            this.showOverlay = false;
          },
          2000
        );
      }
    }
  }

  removeProfileImage() {
    this.profileImagePreview = null;
    this.imageSelected.emit(null);
    this.selectedFile = null;
  }

}
