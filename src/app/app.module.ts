import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpComponent } from './mainp/mainp.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { BucketValuesComponent } from './bucket-list/bucket-values/bucket-values.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainpComponent,
    BucketListComponent,
    BucketValuesComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[EditFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
