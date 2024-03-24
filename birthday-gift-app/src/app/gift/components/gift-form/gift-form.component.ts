import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gift } from './../../models/gift';
import { Component, Inject } from '@angular/core';

export interface GiftFormData{
  isCreateForm: boolean;
  gift: Gift;
}
@Component({
  selector: 'app-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.scss']
})
export class GiftFormComponent {
  giftForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
    link: new FormControl('', Validators.required)
  });

  constructor(public dialogRef: MatDialogRef<GiftFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GiftFormData) {
    if (this.data && !this.data.isCreateForm) {
      this.setGiftForm(this.data.gift);
    }
  }
  

  setGiftForm(gift: Gift){
    this.giftForm.setValue({
      name: gift.name,
      price: gift.price,
      description: gift.description,
      link: gift.link
    });
  }

  get title() {
    if (this.data.isCreateForm) {
      return 'Formulaire de création';
    }
    return 'Formulaire de modification';
  }
  onSubmit(){

  }

}
