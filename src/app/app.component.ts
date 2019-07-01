import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <br/>
    <div><h1>{{pageTitle}}</h1></div>
    <br/>
    <xello-root></xello-root>
  `
})
export class AppComponent {
  title = 'xello-tool-tip';
}
