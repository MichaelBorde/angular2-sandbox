import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {DialogModule} from 'primeng/components/dialog/dialog';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    DialogModule
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
}
