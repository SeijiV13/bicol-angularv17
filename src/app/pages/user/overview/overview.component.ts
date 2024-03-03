import { Component, OnInit, inject } from '@angular/core';
import { ActionMenuComponent } from '../../../shared/components/action-menu/action-menu.component';
import { TableComponent } from '../../../shared/components/table/table.component';
import { UserService } from '../../../shared/services/user.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [ActionMenuComponent, TableComponent, CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  userService = inject(UserService);
  router = inject(Router);
  users$: Observable<any> = this.userService.getUsers();
  userKeys = ['name', 'job', 'company'];
  userHeaders = ['Name', 'Job', 'Company'];

  goToDetail(id: string) {
    this.router.navigate(['detail', id])
  }
}
