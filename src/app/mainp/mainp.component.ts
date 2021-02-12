import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formdata } from 'src/service/formdata';

@Component({
  selector: 'app-mainp',
  templateUrl: './mainp.component.html',
  styleUrls: ['./mainp.component.scss']
})
export class MainpComponent implements OnInit {
@Input() item:Formdata ;
@Output() formd: EventEmitter<Formdata>=new EventEmitter<Formdata>();
  onSubmit(forms:NgForm)
  {
this.formd.emit(forms.value);
forms.reset();
  }
  public isClass:boolean;

  
  constructor() { }

  ngOnInit() {
    if(this.item){
      this.isClass=true;
    }
    else{
      this.isClass=false;
        this.item=new Formdata("",null);
    }
  }

}
