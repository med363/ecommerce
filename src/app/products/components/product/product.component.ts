import { Component ,EventEmitter,Input,OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
// parent - child
@Input() data:any = {}
// chlid -> parent
@Output() item = new EventEmitter()
//var of show button
addButton:Boolean =false
//var recieve number of item
amont:number=0
  constructor(){}

  ngOnInit(): void {
    
  }
add(){
  this.item.emit({item:this.data,quantity:this.amont})
}
}
