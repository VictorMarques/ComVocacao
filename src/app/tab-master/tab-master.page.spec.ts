import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMasterPage } from './tab-master.page';

describe('TabMasterPage', () => {
  let component: TabMasterPage;
  let fixture: ComponentFixture<TabMasterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMasterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
