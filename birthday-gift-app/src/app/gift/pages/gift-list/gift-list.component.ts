import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GiftFormComponent } from '../../components/gift-form/gift-form.component';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.scss']
})
export class GiftListComponent {
  panelOpenState = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(GiftFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  confirmDelete() {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
      // Mettez votre logique de suppression ici
      console.log('Suppression confirmée');
    } else {
      console.log('Suppression annulée');
    }
  }
}
