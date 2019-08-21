import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { PanelContainerComponent } from './panel-container/panel-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BreadCrumbComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    PanelContainerComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    // shared Modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // shared component
    BreadCrumbComponent,
    FormFieldErrorComponent,
    PanelContainerComponent,
    ServerErrorMessagesComponent
  ]
})
export class SharedModule {}
