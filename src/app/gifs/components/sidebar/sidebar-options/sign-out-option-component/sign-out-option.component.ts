import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-sign-out-option',
  imports: [],
  templateUrl: './sign-out-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarSignOutOptionComponent {
  @Input() collapsed = false;
}
