import { Component ,EventEmitter,Input,OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit{
  // parent- child => input - all-product:children
@Input() title:string = ""
@Input() data:any[]=[]
  // child- parent  => output - all-product:children
@Output() selectedValue = new EventEmitter()
constructor(){}
ngOnInit():void{

}
detectChange(event:any){
  this.selectedValue.emit(event)
}
}
