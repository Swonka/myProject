import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MyFilterPipe } from './shared/my-filter.pipe';
import { StashComponent } from './stash/stash.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { UnicornFarmComponent } from './unicorn-farm/unicorn-farm.component';
import { UnicornService } from './unicorn-farm/unicorn.service';
import { AddUnicornComponent } from './unicorn-farm/add-unicorn/add-unicorn.component';
import { EditUnicornComponent } from './unicorn-farm/edit-unicorn/edit-unicorn.component';
import { UnicornListComponent } from './unicorn-farm/unicorn-list/unicorn-list.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';

//Redux
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoViewComponent } from './todo-view/todo-view.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    NewsletterComponent,
    MyFilterPipe,
    StashComponent,
    LoginComponent,

    UnicornFarmComponent,
    AddUnicornComponent,
    EditUnicornComponent,
    UnicornListComponent,
    MyCounterComponent,
    AlertButtonComponent,
    TodoOverviewComponent,
    TodoListComponent,
    TodoViewComponent,

  


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatToolbarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer }),
    NgReduxModule
  



    
    

  ],
  providers: [ShoppingListService, UnicornService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  //Activation of redux store
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }


}
