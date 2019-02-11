import { Injectable } from "@angular/core";
import { Employee } from "./employee.model";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  formData: Employee;
  list: Employee[];
  readonly rootURL = "http://localhost:4100/api";

  constructor(private http: HttpClient) {}

  postEmployee(formData: Employee) {
    return this.http.post(this.rootURL + "/Employee", formData);
  }

  putEmployee(formData: Employee) {
    return this.http.put(
      this.rootURL + "/Employee/" + formData.EmployeeID,
      formData
    );
  }

  deleteEmployee(id:number) {
    return this.http.delete(
      this.rootURL + "/Employee/" + id);
  }

  refreshList() {
    this.http
      .get(this.rootURL + "/Employee")
      .toPromise()
      .then(res => (this.list = res as Employee[]));
  }
}
