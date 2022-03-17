import { Component,  Output } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pName: string = '25';
  title = 'poke-demo';

  changeCard(data: any) {
    this.pName = data.target.value
  }
}
