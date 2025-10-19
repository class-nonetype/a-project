import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar-dashboard-option',
  standalone: true,
  imports: [NgIf, RouterLink, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './dashboard-option.component.html',
  styleUrl: './dashboard-option.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarDashboardOptionComponent {
  private _collapsed = false;
  @Input()
  set collapsed(value: boolean) {
    this._collapsed = value;
    if (value) {
      this.open = false;
    } else {
      this.open = true;
    }
  }
  get collapsed(): boolean {
    return this._collapsed;
  }

  // Guarda si el acordeón está abierto cuando el panel está expandido.
  open = true;

  toggle(): void {
    if (this.collapsed) {
      return;
    }
    this.open = !this.open;
  }
}
