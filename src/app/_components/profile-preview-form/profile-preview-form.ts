import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from 'primeng/card';
import {AddPhotoClient} from '../add-photo-client/add-photo-client';

@Component({
  selector: 'app-profile-preview-form',
  imports: [
    Card,
    AddPhotoClient
  ],
  templateUrl: './profile-preview-form.html',
  styleUrl: './profile-preview-form.css'
})
export class ProfilePreviewForm {

  @Input() nameClient: string | null = '';
  @Input() numberClient: string | null = '';
  @Input() observationClient: string | null = '';
  @Input() profileImagePreviewInput: string | null = '';

  @Output() imageSelected = new EventEmitter<string | null>();

  onImageSelected(image: string | null) {
    this.imageSelected.emit(image);
  }

}
