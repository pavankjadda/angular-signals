import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Component({
	selector: 'app-root',
	standalone: true,
	template: ` <app-employee class="align-center" /> `,
	imports: [EmployeeComponent],
})
export class AppComponent {}
