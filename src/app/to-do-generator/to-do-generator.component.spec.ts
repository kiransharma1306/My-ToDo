import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoGeneratorComponent } from './to-do-generator.component';

describe('ToDoGeneratorComponent', () => {
  let component: ToDoGeneratorComponent;
  let fixture: ComponentFixture<ToDoGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
