import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SeedFormComponent } from '../seed-form/seed-form.component';
import { Seed } from '../interfaces/seed.interface';

@Component({
  selector: 'gt-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openSeedForm() {
    const dialogRef = this.dialog.open(SeedFormComponent, {
      width: '960px',
    });

    dialogRef.componentInstance.saveEvent.subscribe((event) => {
      this.createSeed(event);
    });

    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.saveEvent.unsubscribe();
    });
  }

  createSeed(event: Seed) {
    console.log('create seed: ', event);
  }
}
