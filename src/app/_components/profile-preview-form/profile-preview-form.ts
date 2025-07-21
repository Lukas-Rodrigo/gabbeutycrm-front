import {Component, Input} from '@angular/core';
import {Card} from 'primeng/card';
import {AddPhotoClient} from '../add-photo-client/add-photo-client';
import {PreviewPhotoClient} from '../preview-photo-client/preview-photo-client';

@Component({
  selector: 'app-profile-preview-form',
  imports: [
    Card,
    AddPhotoClient,
    PreviewPhotoClient
  ],
  templateUrl: './profile-preview-form.html',
  styleUrl: './profile-preview-form.css'
})
export class ProfilePreviewForm {

  @Input() previewClient: boolean = false;

  @Input() nameClient: string = '';
  @Input() numberClient: string = '';
  @Input() observationClient: string = '';



}
