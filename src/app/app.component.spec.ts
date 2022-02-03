import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgStackFormsModule } from '@ng-stack/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [NgStackFormsModule]
      }).compileComponents();
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
