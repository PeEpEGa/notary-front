import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

interface NavigationItem {
  label: string;
  route: string;
  iconClass: string;
}

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss'
})
export class SidePanelComponent {
  navigationItems: NavigationItem[] = [
    { label: 'Dashboard', route: '/dashboard', iconClass: 'fa-solid fa-chart-line' },
    { label: 'Clients', route: '/clients', iconClass: 'fa-solid fa-user' },
    { label: 'Services', route: '/services', iconClass: 'fa-solid fa-clipboard' },
    { label: 'Agreements', route: '/agreements', iconClass: 'fa-solid fa-handshake-simple'}
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
