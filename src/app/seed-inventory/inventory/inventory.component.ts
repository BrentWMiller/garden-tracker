import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// components
import { SeedFormComponent } from '../seed-form/seed-form.component';

// interfaces
import { Seed } from '../interfaces/seed.interface';

// services
import { SeedService } from '../seed.service';

@Component({
  selector: 'gt-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  seeds: Array<Seed>;

  constructor(private dialog: MatDialog, private seedService: SeedService) {}

  async ngOnInit() {
    await this.seedService.getSeeds().subscribe((seeds) => {
      this.seeds = seeds;
    });
  }

  openSeedForm(seed?: Seed) {
    const dialogRef = this.dialog.open(SeedFormComponent, {
      width: '960px',
      data: seed ? seed : null,
    });

    dialogRef.componentInstance.saveEvent.subscribe((event) => {
      this.createSeed(event);
    });

    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.saveEvent.unsubscribe();
    });
  }

  async createSeed(seed: Seed) {
    try {
      await this.seedService.createSeed(seed);
      this.dialog.closeAll();
    } catch (error) {
      console.error(error);
    }
  }
}
