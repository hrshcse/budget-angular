import { Component,  OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Formdata } from 'src/service/formdata';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EditFormComponent>, @Inject(MAT_DIALOG_DATA) public item:Formdata) { }


  onUpdate(value:Formdata)
  {
    this.dialogRef.close(value)
  }

  ngOnInit(): void {
  }

}
