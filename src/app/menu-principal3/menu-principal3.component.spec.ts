import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipal3Component } from './menu-principal3.component';

describe('MenuPrincipal3Component', () => {
  let component: MenuPrincipal3Component;
  let fixture: ComponentFixture<MenuPrincipal3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPrincipal3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrincipal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
