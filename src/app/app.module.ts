import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { CorpoComponent } from './corpo/corpo.component';
import { BaixoComponent } from './baixo/baixo.component';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    CorpoComponent,
    BaixoComponent,
    ListaProfessoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
