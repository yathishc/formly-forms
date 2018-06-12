import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgLayoutComponent } from './msg-layout.component';

describe('MsgLayoutComponent', () => {
  let component: MsgLayoutComponent;
  let fixture: ComponentFixture<MsgLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
