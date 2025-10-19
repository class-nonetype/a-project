import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar-sign-out-option',
  standalone: true,
  imports: [NgIf, MatIconModule, MatListModule],
  templateUrl: './sign-out-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarSignOutOptionComponent {
  @Input() collapsed = false;
}
