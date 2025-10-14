import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-dashboard-option',
  imports: [],
  templateUrl: './dashboard-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarDashboardOptionComponent {
  @Input() collapsed = false;
}
