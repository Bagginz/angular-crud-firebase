import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EditMemberService {

    constructor(private db: AngularFireDatabase) { }

    public getMemberByKey(id): Observable<any> {
        return this.db.object('member/' + id).snapshotChanges()
            .pipe(map(actions => {
                return { key: actions.key, value: actions.payload.val() };
            }));
    }

    public setMember(member): any {
        return this.db.list('member').update(member.id, member.value);
    }
}