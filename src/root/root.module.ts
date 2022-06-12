import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root.component';
import { RootRoutingModule } from './root-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer, textReducer } from './state/reducer';
@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    RootRoutingModule,
    StoreDevtoolsModule,
    StoreModule.forRoot({ text: textReducer })
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
