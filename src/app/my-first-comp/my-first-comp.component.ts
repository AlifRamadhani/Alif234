import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css']
})
export class MyFirstCompComponent {

  name: string = '';
  email: string = '';
  massage: string = '';
  Telepon: string = '';
  alamat: string = '';
  company: string = '';
  isSubmitted:boolean = false;
  messages: Array<any> = [];

  onSubmit():void {
    this.isSubmitted = true;
    this.messages.push({
      'name': this.name,
      'email':this.email,
      'Telepon':this.Telepon,
      'alamat':this.alamat,
      'company':this.company  
    });
    console.log(this.messages);
  }
}
 
