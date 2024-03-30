import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from './sidebar/sidebar.module';
import { FileTreeModule } from './file-tree/file-tree.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Image-Analysis';
}
