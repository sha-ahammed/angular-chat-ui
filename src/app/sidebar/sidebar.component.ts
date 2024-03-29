import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Represents a sidebar component with responsive behavior.
 * @class SidebarComponent
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  private resizeObserver: ResizeObserver | null = null;

  /**
   * Constructor for the SidebarComponent.
   * @param {Object} platformId - The platform ID token.
   */
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  /**
   * Initializes the sidebar component and sets up the ResizeObserver.
   */
  ngOnInit() {
    // Check if the current platform is a browser
    if (isPlatformBrowser(this.platformId)) {
      if ('ResizeObserver' in window) {
        this.resizeObserver = new ResizeObserver(() =>
          this.toggleTextVisibility()
        );
        // Select the sidebar element to observe
        const sidebarElement = document.querySelector('.sidebar-container');
        if (sidebarElement) {
          // Start observing the sidebar element for size changes
          this.resizeObserver.observe(sidebarElement);
        } else {
          console.error('Sidebar container element not found');
        }
      } else {
        console.warn('ResizeObserver is not supported in this environment.');
        // Provide a fallback or skip functionality if ResizeObserver is not available
      }
    }
  }

  /**
   * Disconnects the ResizeObserver when the component is destroyed.
   */
  ngOnDestroy() {
    // Disconnect the ResizeObserver instance when the component is destroyed
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  // Method to toggle the visibility of text elements based on the sidebar's width
  toggleTextVisibility() {
    const sidebar = document.querySelector('.sidebar-container') as HTMLElement;
    const textElements = document.querySelectorAll('.nav-text');

    if (sidebar.offsetWidth < 155) {
      textElements.forEach((el) => el.classList.add('hide-text-on-overlap'));
    } else {
      // Otherwise, show the text elements
      textElements.forEach((el) => el.classList.remove('hide-text-on-overlap'));
    }
  }
}
