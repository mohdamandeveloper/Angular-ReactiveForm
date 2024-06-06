import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Angular-ReactiveForms';
  reactiveForm!: FormGroup;
  
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address1: new FormControl(null, Validators.required),
      address2: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      postcode: new FormControl(null, Validators.required),
      areacode: new FormControl(null, Validators.required),
      agreeCheckbox: new FormControl(null, Validators.required)
    })
  }

  onFormSubmit(){
    console.log(this.reactiveForm);
  }
}
