import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './dashboard.component';
import { UsersRoutingModule } from './dashboard-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [UsersComponent, UserComponent, AdminComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
  ],
})
export class UsersModule {}
