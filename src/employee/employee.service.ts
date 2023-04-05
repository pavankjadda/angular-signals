import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Employee } from '../main';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	httpClient = inject(HttpClient);
	url = 'https://my-json-server.typicode.com/pavankjadda/typicode-data/employees';

	getEmployees() {
		return this.httpClient.get<Employee[]>(this.url);
	}
}
