import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  source:string='vilesh@12345kgdk'

  vim:string="recipe"

  kamKar(data:string){
    this.vim=data
  }

}
