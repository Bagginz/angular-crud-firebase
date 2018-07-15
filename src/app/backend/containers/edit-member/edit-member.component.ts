import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditMemberService } from './edit-member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  editForm: FormGroup;
  member: any;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private editMemberService: EditMemberService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getMemberByKey(id);
    }
  }

  createEditForm() {
    this.editForm = this.fb.group({
      name: [this.member.value.name, Validators.compose([Validators.minLength(2)])],
      surname: [this.member.value.surname, Validators.compose([Validators.minLength(2)])],
      email: [this.member.value.email, Validators.compose([Validators.email])]
    });
  }

  getMemberByKey(id: string) {
    this.editMemberService.getMemberByKey(id).subscribe((result) => {
      this.member = result;
      this.createEditForm();
    });
  }

  onSubmit() {
    const fmEdit = this.editForm.value;
    const id = this.route.snapshot.paramMap.get('id');
    const param = {
      id: id,
      value: fmEdit
    };
    this.editMemberService.setMember(param).then(() => {

    });
  }

}
