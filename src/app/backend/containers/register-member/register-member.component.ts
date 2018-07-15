import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterMemberService } from './register-member.service';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {
  public registerForm: FormGroup;
  constructor(private fb: FormBuilder, public registerMemberService: RegisterMemberService) {
    this.createRegisterForm();
  }

  ngOnInit() {
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: [null, Validators.compose([Validators.minLength(2)])],
      surname: [null, Validators.compose([Validators.minLength(2)])],
      email: [null, Validators.compose([Validators.email])],
      passwords: [null, Validators.compose([Validators.minLength(8)])],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const fmRegister = this.registerForm.value;
      this.registerMemberService.addmember(fmRegister).then(result => {

      });
    }
  }
}
