import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => 
			import('./modules/client.module').then((m) => m.ClientModule),
	},
	{
		path: 'login',
		loadChildren: () =>
			import('./login/login.module').then((m) => m.LoginModule),
	},
	{
		path: 'register',
		loadChildren: () =>
			import('./register/register.module').then((m) => m.RegisterModule),
	},
	{
		path: '**', redirectTo: 'home',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
