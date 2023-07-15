import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtteremComponent } from './etterem.component';

describe('EtteremComponent', () => {
  let component: EtteremComponent;
  let fixture: ComponentFixture<EtteremComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtteremComponent]
    });
    fixture = TestBed.createComponent(EtteremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
