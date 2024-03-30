import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gift } from './../../models/gift';
import { Component, Inject, OnInit } from '@angular/core';
import { GiftService } from '../../services/gift.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface GiftFormData {
  isCreateForm: boolean;
  gift: Gift
}

@Component({
  selector: 'app-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.scss']
})
export class GiftFormComponent {
  get title(){
    if(this.data.isCreateForm){
      return 'Formulaire de création';
    }else{
      return 'Formulaire de modification';
    }
  }

  get submitBtnName(){
    if(this.data.isCreateForm){
      return 'Ajouter';
    }
    return 'Modifier';
  }

  giftForm = this.fb.group({
    id: [0, [Validators.required]],
    name: ['', [Validators.required]],
    price: [0, [Validators.required]],
    description: ['', [Validators.required]],
    link: ['', [Validators.required]],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GiftFormData,
    private dialogRef: MatDialogRef<GiftFormComponent>,
    private fb: FormBuilder,
    private giftService: GiftService,
    private _snackBar: MatSnackBar) {
    if (!data.isCreateForm) {
      this.setGiftForm(data.gift);
    }
  }  

  setGiftForm(gift: Gift) {
    this.giftForm.setValue({
      id: gift.id,
      name: gift.name,
      price: gift.price,
      description: gift.description,
      link: gift.link
    });
  }
  
  onSubmit(){
    if(this.giftForm.valid){     
      if(this.data.isCreateForm){
        this.giftForm.value.id = Date.now() + Math.random();
        this.giftService.create(this.giftForm.value as Gift)
        
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });

          this.dialogRef.close(true);
        });
      }else{
        this.giftService.update(this.giftForm.value as Gift)        
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });
          this.dialogRef.close(true);
        });
      }
    }
  }
}
