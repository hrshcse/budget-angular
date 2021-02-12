import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Formdata} from '../../service/formdata';
import {EditFormComponent} from '../edit-form/edit-form.component'
@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss']
})
export class BucketListComponent implements OnInit {
  @Input() Buckets:Formdata[];
  @Output() delete:EventEmitter<Formdata>=new EventEmitter<Formdata>();
  @Output() Updated:EventEmitter<update>=new EventEmitter<update>();
  constructor(public dialog:MatDialog) { }

  onDelete(item:Formdata){
this.delete.emit(item)
  }
onCardEdit(item:Formdata){
  let dialogbox=this.dialog.open(EditFormComponent,{
    width:"550px",
    data:item
  });
  dialogbox.afterClosed().subscribe(result=>{
    // this.Buckets[this.Buckets.indexOf(item)]=result;
this.Updated.emit({
  old:item,
  new:result
});
  })
}


  ngOnInit(): void {
  }

}

export interface update{
  old:Formdata,
  new:Formdata
}
