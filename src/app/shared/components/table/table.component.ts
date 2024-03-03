import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() items: any[] = [];
  @Input() keys: string[] = [];
  @Input() headers: string[] = [];
  @Output() onSelect = new EventEmitter();

}
