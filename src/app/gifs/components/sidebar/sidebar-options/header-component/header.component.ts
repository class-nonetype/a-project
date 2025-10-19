import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SidebarToggleOptionComponent } from '../toggle-option-component/toggle-option.component';

@Component({
  selector: 'app-sidebar-header',
  standalone: true,
  imports: [NgIf, MatIconModule, SidebarToggleOptionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarHeaderComponent {
  @Input() collapsed = false;
  @Output() toggle = new EventEmitter<void>();
}
