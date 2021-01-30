import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchStatusService {

  private searchStatus = new BehaviorSubject<boolean>(false);
  currentSearchStatus = this.searchStatus.asObservable();

  constructor() { }

  changeSearchStatus(status: boolean) {
    this.searchStatus.next(status);
  }
}
