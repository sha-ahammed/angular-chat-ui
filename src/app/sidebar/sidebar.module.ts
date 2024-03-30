import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FileTreeModule } from '../file-tree/file-tree.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, FileTreeModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
