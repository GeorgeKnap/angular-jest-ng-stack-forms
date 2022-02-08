Minimal repo to reproduce jest test error `Class constructor FormControl cannot be invoked without 'new'`

steps to run:
1. install node modules with `npm ci`
2. run `npm run test` to execute jest test which fails:

```
> example-app-v13@13.0.0 test
> jest --no-cache

 FAIL  src/app/app.component.spec.ts
  AppComponent
    × should create the app (48 ms)

  ● AppComponent › should create the app

    TypeError: Class constructor FormControl cannot be invoked without 'new'

       7 | })
       8 | export class AppComponent {
    >  9 |   control = new FormControl<string>('');
         |             ^
      10 | }
      11 |

      at new FormControl (node_modules/projects/forms/src/lib/form-control.ts:42:5)
      at new AppComponent (src/app/app.component.ts:9:13)
      at NodeInjectorFactory.AppComponent_Factory [as factory] (ng:\AppComponent\ɵfac.js:5:10)
      at src/app/app.component.spec.ts:16:29

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        3.645 s
Ran all test suites.
```
