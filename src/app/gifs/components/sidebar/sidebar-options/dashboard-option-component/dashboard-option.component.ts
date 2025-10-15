import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar-dashboard-option',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './dashboard-option.component.html',
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

  open = true;

  toggle(): void {
    if (this.collapsed) {
      return;
    }
    this.open = !this.open;
  }
}
