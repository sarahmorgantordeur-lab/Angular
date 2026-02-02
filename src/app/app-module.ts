import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserDemoModule } from './features/user-demo/user-demo.module';
import { ProductDemoModule } from './features/product-demo/product-demo.module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HeaderComponent,
    UserDemoModule,
    ProductDemoModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
