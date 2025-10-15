import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar-toggle-option',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './toggle-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarToggleOptionComponent {
  @Input() collapsed = false;
  @Output() toggle = new EventEmitter<void>();

  onToggle(): void {
    this.toggle.emit();
  }
}
