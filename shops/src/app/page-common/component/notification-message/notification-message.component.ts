import { Component, OnInit } from '@angular/core';
import {MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.css']
})
export class NotificationMessageComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<NotificationMessageComponent>,
  ) { }

  ngOnInit(): void {
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    matDialogConfig.position = {left: `35%`, top: `60px`};
    this.dialogRef.updatePosition(matDialogConfig.position);
  }

}
