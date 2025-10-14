import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-settings-option',
  imports: [],
  templateUrl: './settings-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarSettingsOptionComponent {
  @Input() collapsed = false;
}
