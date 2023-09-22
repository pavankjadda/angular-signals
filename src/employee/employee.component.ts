import {CommonModule} from '@angular/common';
import {Component, effect, inject, signal} from '@angular/core';
import {Employee} from '../main';
import {EmployeeService} from './employee.service';
import {TuiAccordionModule} from '@taiga-ui/kit';
import {TuiExpandModule} from '@taiga-ui/core';

@Component({
	selector: 'app-employee',
	standalone: true,
  imports: [CommonModule, TuiAccordionModule, TuiExpandModule],
	template: `
    <tui-accordion class="container" style="width: 100%">
      <tui-accordion-item [showArrow]="true">
        Click to expand
        <ng-template tuiAccordionItemContent>
          <div style="margin:20px">
            <h1>Signals Demo</h1>
            <hr />

            <h2>Employees</h2>
            <div *ngFor="let employee of employees()">
              <p>First Name: {{ employee.firstName }}</p>
              <p>Last Name: {{ employee.lastName }}</p>
              <p>Email: {{ employee.email }}</p>
              <p>Phone: {{ employee.phone }}</p>
              <p>Age: {{ employee.age }}</p>
              <hr />
            </div>

            <br />
          </div>
        </ng-template>
      </tui-accordion-item>
    </tui-accordion>
	`,
  styles: [
    `
      .container {
        max-width: 80rem;
      }
    `
  ]
})
export class EmployeeComponent {
	employeeService = inject(EmployeeService);
	employees = signal<Employee[]>([]);

	constructor() {
		effect(() => {
			console.log('Inside effect(). Employee changed', this.employees());
		});
	}

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe((data) => {
			this.employees.set(data);
		});
	}
}
