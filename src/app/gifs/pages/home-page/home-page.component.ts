import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './home-page.component.html'
})
export default class HomePageComponent { }
