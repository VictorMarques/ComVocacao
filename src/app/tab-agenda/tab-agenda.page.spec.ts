import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAgendaPage } from './tab-agenda.page';

describe('TabAgendaPage', () => {
  let component: TabAgendaPage;
  let fixture: ComponentFixture<TabAgendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAgendaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
