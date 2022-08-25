import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public formUsuario: FormGroup;

  public departamentos = [
    {nombre: 'Direccion'},
    {nombre: 'RH'},
    {nombre: 'Produccion'},
  ];

  constructor(private formBuilder: FormBuilder) { 
    this.formUsuario= this.formBuilder.group({
      usuario: ['',[Validators.required]],
      nombre: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      email: ['',[Validators.required]],
      telefono: ['',[Validators.required]],
      password: ['',[Validators.required]],
      departamento: ['',[Validators.required]],
      foto: ['',[Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  addUsuario(){
    console.log(this.formUsuario.value);
    
  }

}
