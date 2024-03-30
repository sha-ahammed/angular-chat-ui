// file-tree.component.ts
import { Component, Input } from '@angular/core';

interface FileNode {
  name: string;
  isFolder: boolean;
  children?: FileNode[];
  isExpanded?: boolean;
}

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.css'],
})
export class FileTreeComponent {
  @Input() fileTree: FileNode[] = [
    {
      name: 'Documents',
      isFolder: true,
      children: [
        {
          name: 'Work',
          isFolder: true,
          children: [
            {
              name: 'report.pdf',
              isFolder: false,
            },
            {
              name: 'presentation.pptx',
              isFolder: false,
            },
          ],
        },
        {
          name: 'Personal',
          isFolder: true,
          children: [
            {
              name: 'photos',
              isFolder: true,
              children: [],
            },
            {
              name: 'budget.xlsx',
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: 'Downloads',
      isFolder: true,
      children: [],
    },
  ];

  selectedItem: FileNode | null = null;

  toggleFolder(folder: FileNode) {
    folder.isExpanded = !folder.isExpanded;
    this.selectedItem = folder;
  }

  selectItem(item: FileNode) {
    if (this.selectedItem === item) {
      // If the same item is clicked again, deselect it
      this.selectedItem = null;
    } else {
      this.selectedItem = item;
    }
  }
}
