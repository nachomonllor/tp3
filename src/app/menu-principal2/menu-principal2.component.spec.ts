import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipal2Component } from './menu-principal2.component';

describe('MenuPrincipal2Component', () => {
  let component: MenuPrincipal2Component;
  let fixture: ComponentFixture<MenuPrincipal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPrincipal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrincipal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
