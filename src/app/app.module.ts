import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PersonComponent } from '../components/person/person.component';
import { BackupComponent } from '../components/backup/backup.component';
import { TableComponent } from '../components/table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';



@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    BackupComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
  ],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule { }
