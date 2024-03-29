import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gift } from './../../models/gift';
import { Component, Inject } from '@angular/core';

export interface GiftFormData{
    // false
  isCreateForm: boolean;
  gift: Gift;
}
@Component({
  selector: 'app-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.scss']
})
export class GiftFormComponent {
  giftForm = this.fb.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required]],
    description: ['', [Validators.required]],
    link: ['', [Validators.required]],
  });
  constructor(
    public dialogRef: MatDialogRef<GiftFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GiftFormData,
    private fb: FormBuilder,
  ) {
    if (!this.data.isCreateForm && this.data.gift) {
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

  get submitBtnName(){
    if(this.data.isCreateForm){
      return 'Ajouter';
    }
    return 'Modifier';
  }


}
