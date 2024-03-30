// file-tree.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileTreeComponent } from './file-tree.component';

@NgModule({
  declarations: [FileTreeComponent],
  imports: [CommonModule],
  exports: [FileTreeComponent],
})
export class FileTreeModule {}
