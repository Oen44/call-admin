import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerDeleteComponent } from './server-delete.component';

describe('ServerDeleteComponent', () => {
  let component: ServerDeleteComponent;
  let fixture: ComponentFixture<ServerDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
