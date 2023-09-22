import {HttpClientModule} from '@angular/common/http';
import {Component, importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {EmployeeComponent} from './employee/employee.component';
import {provideAnimations} from '@angular/platform-browser/animations';
import {TuiRootModule} from '@taiga-ui/core';

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <tui-root >
      <app-employee style="display: flex;justify-content: center;width: auto; margin-top: 1rem"/>
    </tui-root>
    `,
  imports: [EmployeeComponent, TuiRootModule],
})
export class App {
}

bootstrapApplication(App, {
  providers: [importProvidersFrom( TuiRootModule, HttpClientModule),provideAnimations()],
});
