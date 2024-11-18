import { Component, inject } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonTabs,
  IonTabBar, IonTabButton, IonIcon, IonLabel, IonTab
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { triangleOutline, ellipse, square, triangle, playCircle, radio, library, search } from 'ionicons/icons';
import { StrategiesPage } from "../strategies/strategies.page";
import { PortfolioPage } from '../portfolio/portfolio.page';
import { ManagerPage } from '../manager/manager.page';
import { TabsService } from '../tabs/tabs.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonTab, IonLabel, IonIcon, IonTabButton, IonTabBar, IonTabs,
    IonHeader, IonToolbar, IonTitle, IonContent,
    PortfolioPage,
    StrategiesPage,
    ManagerPage
  ]
})
export class Tab2Page {

  tabService = inject(TabsService);

  constructor() {
    addIcons({ playCircle, radio, library, search, triangle, triangleOutline, ellipse, square });
  }

  ionViewDidEnter() {
    // Hide the main tabs when entering
    if (this.tabService.isMobile()) {
      this.tabService.tabsVisible.set(false);
    }
  }

  ionViewDidLeave() {
    // Show the main tabs when leaving
    this.tabService.tabsVisible.set(true);
  }

}
