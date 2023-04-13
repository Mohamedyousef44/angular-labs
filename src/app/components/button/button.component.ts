import { Component , Output , EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() classExp: string = '';
  @Input() icon: string = '';

  @Output() btnClick = new EventEmitter();

  onClick(){

    this.btnClick.emit();
  }
}
