import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchStatusService {

  private searchStatus = new BehaviorSubject<boolean>(false);
  currentSearchStatus = this.searchStatus.asObservable();

  // Changes the search status of the search bar in navigation
  // Used when user clicks "get started" in home
  changeSearchStatus(status: boolean) {
    this.searchStatus.next(status);
  }
}
