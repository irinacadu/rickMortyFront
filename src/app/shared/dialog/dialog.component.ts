import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog'
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  cantidad: any;
  eventoId: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
