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
  constructor(){}

  ngOnInit(): void {
    
  }
add(){
  this.item.emit(this.data)
}
}
