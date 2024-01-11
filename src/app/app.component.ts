import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Component({
	selector: 'app-root',
	standalone: true,
	template: ` <app-employee style="display: flex;justify-content: center;; margin-top: 1rem" /> `,
	imports: [EmployeeComponent],
})
export class AppComponent {}
