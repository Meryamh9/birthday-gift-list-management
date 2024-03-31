import { GiftService } from './../../services/gift.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GiftFormComponent } from '../../components/gift-form/gift-form.component';
import { Gift } from '../../models/gift';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.scss']
})
export class GiftListComponent implements OnInit {
  panelOpenState = false;

  gifts$!: Observable<Gift[]>;

  constructor(public dialog: MatDialog,
    private giftService: GiftService,
    private _snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.gifts$ = this.giftService.get();
  }

  openGiftForm(gift?: Gift) {
    const dialogRef = this.dialog.open(GiftFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: gift ? false : true,
        gift: gift ? gift : undefined
      }
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.fetchData();
        }
      });
  }

  confirmDelete(id: number) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
      // Mettez votre logique de suppression ici
      this.giftService.delete(id)
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });
          this.fetchData();
        });
      console.log('Suppression confirmée');
    } else {
      console.log('Suppression annulée');
    }
  }


}
