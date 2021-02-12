import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketValuesComponent } from './bucket-values.component';

describe('BucketValuesComponent', () => {
  let component: BucketValuesComponent;
  let fixture: ComponentFixture<BucketValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
