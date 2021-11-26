
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CrudService {

    private apiUrl = `${environment.API_URL}/`;

    constructor(private http: HttpClient) { }

    public createEntity<T>(entityName: string, entity: T) {
        return this.http.post<any>(this.apiUrl + entityName, entity);
    }

    public getEntities<T>(entityName: string): Promise<any> {
        return this.http.get<any[]>(this.apiUrl + entityName).toPromise();
    }

    public updateEntity<T>(entityName: string, entity): Observable<any> {
        return this.http.put<T[]>(this.apiUrl + entityName + "/" + entity.id, entity);
    }
}
