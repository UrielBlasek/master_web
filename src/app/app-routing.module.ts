import { NopageFoundComponent } from './pages/nopage-found/nopage-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ManualCalidadComponent } from './pages/manual-calidad/manual-calidad.component';
import { PagesComponent } from './pages/pages.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ManualOperacionesComponent } from './pages/manual-operaciones/manual-operaciones.component';
import { ProcedimientosComponent } from './pages/procedimientos/procedimientos.component';
import { ControlDocumentoComponent } from './pages/control-documento/control-documento.component';
import { NormasIsoComponent } from './pages/normas-iso/normas-iso.component';

const routes: Routes = [
  {path: 'dashboard', component:PagesComponent,
  children: [
    {path: '', component:DashboardComponent },
    {path: 'manual-calidad', component:ManualCalidadComponent },
    {path: 'manual-operaciones', component:ManualOperacionesComponent },
    {path: 'procedimientos', component: ProcedimientosComponent},
    {path: 'normas-iso', component: NormasIsoComponent},
    {path: 'control-documento', component: ControlDocumentoComponent},
    {path: 'usuarios', component:UsuariosComponent}
  ]
},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path: 'login', component: AuthComponent},
  {path: '**', component: NopageFoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
