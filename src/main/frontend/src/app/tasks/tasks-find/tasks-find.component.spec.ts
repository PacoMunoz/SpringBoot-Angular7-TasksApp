import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksFindComponent } from './tasks-find.component';

describe('TasksFindComponent', () => {
  let component: TasksFindComponent;
  let fixture: ComponentFixture<TasksFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
