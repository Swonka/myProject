/*
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
//import * as fromRoot from './reducers';
//import * as counterActions from './actions/counter.actions';
import { Store, StoreModule } from '@ngrx/store';


import * as fromRoot from './counter.reducer'
import * as counterActions from './counter.actions'






describe('AppComponent', () => {

  const cr = fromRoot.counterReducer;
  const ca = counterActions;

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<fromRoot.>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [StoreModule.forRoot(fromRoot.counterReducer)],
    declarations: [
      AppComponent
    ],
  }).compileComponents();
  store = TestBed.get(Store);
  spyOn(store, 'dispatch').and.callThrough();
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
}));
[...]
it('should dispatch an action to load data when created', () => {
   const action = counterActions.increment();
   expect(store.dispatch).toHaveBeenCalledWith(action);
});
it('should display counter value', () => {
   const span = compEl.querySelector('#num');
   expect(span.textContent).toEqual('2');
});})

*/

/*
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myProject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('myProject');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('myProject app is running!');
  });
});



*/