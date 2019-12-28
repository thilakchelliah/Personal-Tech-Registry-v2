import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogCardComponent } from './widget/blog-card/blog-card.component';
import { BlogPostFullComponent } from '../shared/widgets/blog-post-full/blog-post-full.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home/list',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: BlogComponent,
		children: [                          //<---- child components declared here
			{
				path: 'list',
				component: BlogCardComponent,
			},
			{
				path: 'full/:id',
				component: BlogPostFullComponent,
			}
		]

	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BlogRoutingModule { }
