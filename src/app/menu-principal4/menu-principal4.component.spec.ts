import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipal4Component } from './menu-principal4.component';

describe('MenuPrincipal4Component', () => {
  let component: MenuPrincipal4Component;
  let fixture: ComponentFixture<MenuPrincipal4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPrincipal4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrincipal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
