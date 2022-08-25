import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public formLogin: FormGroup;

  constructor (private formBuilder: FormBuilder) { 
    this.formLogin = this.formBuilder.group({
      usuario:['',[Validators.required]],
      password:['',[Validators.required]],
    });
  }

  ngOnInit(): void {
  }


  estrada(){
    console.log('Acceso ');
    
  }

}
