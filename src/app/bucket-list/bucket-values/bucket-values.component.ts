import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Formdata } from 'src/service/formdata';

@Component({
  selector: 'app-bucket-values',
  templateUrl: './bucket-values.component.html',
  styleUrls: ['./bucket-values.component.scss']
})
export class BucketValuesComponent implements OnInit {
  @Input() Item:Formdata ;
  @Output() xButton:EventEmitter<any>= new EventEmitter<any>();
  @Output() CardClicked:EventEmitter<any>=new EventEmitter<any>();


  onClickX(){
this.xButton.emit();
  }
  constructor() { }
 
  onCardClicked(){
this.CardClicked.emit()
  }

  ngOnInit(): void {
  }

}
