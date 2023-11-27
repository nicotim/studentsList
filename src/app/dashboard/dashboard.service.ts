import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextUpdateService {
  private textSource = new BehaviorSubject<string>('Aplicación Administrativa');
  currentText$: Observable<string> = this.textSource.asObservable();

  updateText(newText: string) {
    this.textSource.next(newText);
  }
}
