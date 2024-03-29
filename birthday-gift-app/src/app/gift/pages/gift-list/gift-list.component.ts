import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GiftFormComponent } from '../../components/gift-form/gift-form.component';
import { Gift } from '../../models/gift';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.scss']
})
export class GiftListComponent {
  panelOpenState = false;
  gifts: Gift[] = []; // Suppose que vous avez une liste de cadeaux
  selectedGift: Gift | null = {
    id: 1,
    name: 'Cadeau 1',
    price: 10,
    description: 'Description du cadeau 1',
    link: 'https://exemple.com/cadeau1'
  };

  constructor(public dialog: MatDialog) { }

  openDialog(gift?: Gift) {
    const dialogRef = this.dialog.open(GiftFormComponent, {
      data: {
        isCreateForm: !gift,
        gift: gift || undefined
      }
    });

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
