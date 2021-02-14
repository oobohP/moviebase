import { AuthService } from './../../../core/services/auth.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {

  constructor(
    public auth: AuthService,
    private _snackBar: MatSnackBar
  ) { }

  showSnackBar() {
    this._snackBar.open('Feature Not Implemented Yet', 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3500,
      panelClass: ['white-snackbar']
    });
  }
}
