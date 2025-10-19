import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar-settings-option',
  standalone: true,
  imports: [NgIf, RouterLink, MatIconModule, MatListModule],
  templateUrl: './settings-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarSettingsOptionComponent {
  @Input() collapsed = false;
}
