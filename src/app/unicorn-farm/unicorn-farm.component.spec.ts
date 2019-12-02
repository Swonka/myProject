import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornFarmComponent } from './unicorn-farm.component';

describe('UnicornFarmComponent', () => {
  let component: UnicornFarmComponent;
  let fixture: ComponentFixture<UnicornFarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicornFarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicornFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
