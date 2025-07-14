import {Component, Input} from '@angular/core';
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

  @Input() nameClient: string = '';
  @Input() numberClient: string = '';
  @Input() observationClient: string = '';



}
