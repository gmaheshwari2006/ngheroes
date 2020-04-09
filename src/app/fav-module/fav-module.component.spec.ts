import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavModuleComponent } from './fav-module.component';

describe('FavModuleComponent', () => {
  let component: FavModuleComponent;
  let fixture: ComponentFixture<FavModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
