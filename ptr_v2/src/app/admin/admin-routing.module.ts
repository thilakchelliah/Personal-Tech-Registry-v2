import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { BlogManagerComponent } from './widgets/blog-manager/blog-manager.component';
import { TutManagerComponent } from './widgets/tut-manager/tut-manager.component';
import { UserManagerComponent } from './widgets/user-manager/user-manager.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent

	},
	{
		path: 'dashboard',
		component: AdminComponent,
		canActivate: [AuthGuard],
		children: [                          //<---- child components declared here
			{
				path: 'blogManager',
				component: BlogManagerComponent,
			},
			{
				path: 'tutManager',
				component: TutManagerComponent,
			},
			{
				path: 'userManager',
				component: UserManagerComponent,
			}
		]
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
