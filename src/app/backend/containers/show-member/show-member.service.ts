import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
@Injectable()
export class ShowMemberService {
    memberList: AngularFireList<any>;
    member: any[];
    constructor(private db: AngularFireDatabase) {
        this.memberList = db.list('member');
    }

    getAllMember(): Observable<any[]> {
        return this.memberList.snapshotChanges()
            .pipe(map(actions => {
                return actions.map(action => ({ key: action.key, value: action.payload.val() }));
            }));
    }

    removeMember(id): void {
        this.memberList.remove(id);
    }
}