import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public static title = 'ex4plus';
  show = false;
  toggle(){
    this.show = !this.show
    
  }
}
