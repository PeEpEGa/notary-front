import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementCreateComponent } from './agreement-create.component';

describe('AgreementCreateComponent', () => {
  let component: AgreementCreateComponent;
  let fixture: ComponentFixture<AgreementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreementCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
