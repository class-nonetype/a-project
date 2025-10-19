import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-toggle-option',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './toggle-option.component.html',
  styleUrl: './toggle-option.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarToggleOptionComponent {
  @Input() collapsed = false;
  @Output() toggle = new EventEmitter<void>();

  onToggle(): void {
    this.toggle.emit();
  }
}
