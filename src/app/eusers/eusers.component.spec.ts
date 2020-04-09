import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EusersComponent } from './eusers.component';

describe('EusersComponent', () => {
  let component: EusersComponent;
  let fixture: ComponentFixture<EusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
