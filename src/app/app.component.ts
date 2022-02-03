import { Component } from '@angular/core';
import { FormControl } from '@ng-stack/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  control = new FormControl<string>('');
}
