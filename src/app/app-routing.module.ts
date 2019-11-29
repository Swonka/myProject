import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

import { StashComponent } from './stash/stash.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';


const appRoutes: Routes = [

    { path:'', redirectTo: '/recipes', pathMatch:'full'},
    { path:'recipes', component: RecipesComponent, 
    children:
    [
        { path:'', component:RecipeStartComponent},
        { path:"new", component: RecipeEditComponent},
        { path:":id", component: RecipeDetailComponent},
        { path:":id/edit", component: RecipeEditComponent}
    ],
    
        },
    { path:'shopping-list', component: ShoppingListComponent},
    {path:'newsletter', component: NewsletterComponent}, 
    {path:'login', component: LoginComponent},
    {path:'stash', component: StashComponent, canActivate: [AuthGuard],

    }, 
    
   /*
    {path :'login', component: LoginComponent, canActivate: [AuthGuard], 
    children:
    [
        {path:'stash', component: StashComponent},
       
    ]
    
}*/


];

@NgModule({

    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule{

}