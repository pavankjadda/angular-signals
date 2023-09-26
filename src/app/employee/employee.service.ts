import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../app.component';
import { UseQuery } from '@ngneat/query';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	httpClient = inject(HttpClient);
	url = 'https://my-json-server.typicode.com/pavankjadda/typicode-data/employees';
	private useQuery = inject(UseQuery);

	getEmployees() {
		return this.useQuery(
			['employees'],
			() => {
				return this.httpClient.get<Employee[]>(this.url);
			},
			{ staleTime: 1000 * 60 * 60 }
		);
	}
}
