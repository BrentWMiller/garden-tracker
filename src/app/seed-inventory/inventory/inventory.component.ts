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
      data: {
        seed: seed ? seed : null,
        type: seed ? 'update' : 'create',
      },
    });

    dialogRef.componentInstance.saveEvent.subscribe(async (event) => {
      if (event.type === 'create') {
        await this.seedService.createSeed(event.seed);
      } else if (event.type === 'update') {
        await this.seedService.updateSeed(event.seed, seed.id);
      }
      this.dialog.closeAll();
    });

    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.saveEvent.unsubscribe();
    });
  }
}
