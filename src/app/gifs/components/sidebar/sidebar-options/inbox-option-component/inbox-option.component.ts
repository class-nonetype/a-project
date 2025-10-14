import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-inbox-option',
  imports: [],
  templateUrl: './inbox-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarInboxOptionComponent {
  @Input() collapsed = false;
}
