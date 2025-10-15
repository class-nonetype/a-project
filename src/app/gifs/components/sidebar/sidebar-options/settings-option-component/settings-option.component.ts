import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar-settings-option',
  standalone: true,
  imports: [NgClass],
  templateUrl: './settings-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarSettingsOptionComponent {
  @Input() collapsed = false;
}
