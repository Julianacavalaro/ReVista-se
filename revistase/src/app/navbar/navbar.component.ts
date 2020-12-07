import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faShoppingCart = faShoppingCart
  faBars = faBars
  
  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  deslogar() {
    localStorage.clear()
    this.router.navigate(['/home'])
  }
}
