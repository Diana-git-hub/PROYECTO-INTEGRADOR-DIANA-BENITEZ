import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APLOGOComponent } from './aplogo.component';

describe('APLOGOComponent', () => {
  let component: APLOGOComponent;
  let fixture: ComponentFixture<APLOGOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APLOGOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APLOGOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
