import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar-sign-out-option',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sign-out-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarSignOutOptionComponent {
  @Input() collapsed = false;
}
