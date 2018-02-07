import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackupComponent } from '../components/backup/backup.component';
import { PersonComponent } from '../components/person/person.component';
import { TableComponent } from '../components/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'table',  component: TableComponent },
  { path: 'person/:id', component: PersonComponent },
  { path: 'backup',     component: BackupComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
