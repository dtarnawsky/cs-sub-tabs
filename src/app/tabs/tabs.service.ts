import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  public tabsVisible = signal(true);
  public isMobile = signal(false);
  private router = inject(Router);
  private isMobileQuery: MediaQueryList;
  constructor() {
    this.isMobileQuery = window.matchMedia("(max-width: 600px)");
    this.isMobile.set(this.isMobileQuery.matches);
    this.isMobileQuery.addEventListener('change', (event) => {
      this.isMobile.set(event.matches);
    });
  }

  close() {
    this.router.navigate(['tabs/tab1']);
    this.tabsVisible.set(true);
  }
}
