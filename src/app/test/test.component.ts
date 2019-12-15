import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `
      <div>
        <h1>Welcome {{name}}</h1>
        <h2>Working with property Binding</h2>
        <input [id]="age" value="firstname">
        <input bind-disabled="isDisabled" value="firstname">
        <h2 class="text-success">Edubank Test</h2>
        <h2 bind-class="successClass">Edubank Test</h2>
        <div [class]="hasError"> Boxme is Here</div>
      </div>
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      text-style: italics;
    }
    .hasError{
      width: 300px;
      height: 200px;
      background: red;
      color: #ffffff;
    }
  
  `]
})
export class TestComponent implements OnInit {

  public name = "Folaranmi";
  public age = 38;
  public isDisabled = false;
  public successClass = "text-success";
  public hasError = false;
  constructor() { }

  ngOnInit() {
  }

}
