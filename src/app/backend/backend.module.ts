import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register';
import { RegisterMemberComponent, RegisterMemberService } from './containers/register-member';
import { ShowMemberComponent, ShowMemberService } from './containers/show-member';
import { EditMemberComponent, EditMemberService } from './containers/edit-member';

const Components = [RegisterMemberComponent, RegisterComponent, ShowMemberComponent, EditMemberComponent];
const SERVICE = [RegisterMemberService, ShowMemberService, EditMemberService];

@NgModule({
    declarations: Components,
    imports: [
        MatCardModule,
        FormsModule,
        CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterModule.forChild([{
            path: 'backend/register_member',
            component: RegisterMemberComponent
        }, {
            path: 'backend/show_member',
            component: ShowMemberComponent
        }, {
            path: 'backend/edit_member/:id',
            component: EditMemberComponent
        }
        ])
    ],
    providers: SERVICE
})
export class BackendModule { }
