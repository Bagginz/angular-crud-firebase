import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ShowMemberService } from './show-member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-member',
  templateUrl: './show-member.component.html',
  styleUrls: ['./show-member.component.css'],
  providers: [ShowMemberService]
})
export class ShowMemberComponent implements OnInit {
  member$: any[];
  constructor(public showMemberService: ShowMemberService, private router: Router) {
  }

  ngOnInit() {
    this.showMemberService.getAllMember().subscribe((result) => {
      this.member$ = result;
    });
  }

  onRemoveMember(member) {
    this.showMemberService.removeMember(member.key);
  }

  onEditMember(member) {
    this.router.navigate([`/backend/edit_member/${member.key}`]);
  }

}
