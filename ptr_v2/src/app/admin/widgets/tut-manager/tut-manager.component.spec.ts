import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutManagerComponent } from './tut-manager.component';

describe('TutManagerComponent', () => {
  let component: TutManagerComponent;
  let fixture: ComponentFixture<TutManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
