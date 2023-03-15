import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() eventBhejaHai=new EventEmitter<string>();

  onSelect(feature:string) {
    this.eventBhejaHai.emit(feature)
  }
}
