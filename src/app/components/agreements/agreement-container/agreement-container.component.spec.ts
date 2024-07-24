import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementContainerComponent } from './agreement-container.component';

describe('AgreementContainerComponent', () => {
  let component: AgreementContainerComponent;
  let fixture: ComponentFixture<AgreementContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreementContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
