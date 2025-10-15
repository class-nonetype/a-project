import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar-inbox-option',
  standalone: true,
  imports: [NgClass],
  templateUrl: './inbox-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarInboxOptionComponent {
  @Input() collapsed = false;
}
