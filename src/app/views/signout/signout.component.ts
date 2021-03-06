import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  constructor(
	  private tokenStorage: TokenStorageService,
	  private router: Router
  ) { }

  ngOnInit(): void {
	  this.tokenStorage.signOut()
	  alert("Logout Successfully!")
	  this.router.navigateByUrl('/')
  }

}
