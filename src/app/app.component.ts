import { Component } from '@angular/core';
import { Formdata } from 'src/service/formdata';
import{update} from './bucket-list/bucket-list.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calc';
  TotalAmount:number=0;
  ItemDatas:Formdata[]=new Array<Formdata>();
  onCapture(item:Formdata){
    this.ItemDatas.push(item);
    this.TotalAmount += item.amount;
  }
  
  onDeleteClicked(data:Formdata){
let index=this.ItemDatas.indexOf(data);
this.ItemDatas.splice(index,1);
this.TotalAmount -=data.amount;
  } 
  onEdited(res:update){
    this.ItemDatas[this.ItemDatas.indexOf(res.old)]=res.new;
    this.TotalAmount -= res.old.amount;
    this.TotalAmount += res.new.amount;
  }
}
