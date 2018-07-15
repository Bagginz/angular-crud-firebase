import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class RegisterMemberService {
    constructor(private db: AngularFireDatabase) { }
    public addmember(param: any): any {
        return this.db.list('/member').push(param);
    }
}