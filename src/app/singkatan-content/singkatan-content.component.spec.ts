import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingkatanContentComponent } from './singkatan-content.component';

describe('SingkatanContentComponent', () => {
  let component: SingkatanContentComponent;
  let fixture: ComponentFixture<SingkatanContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingkatanContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingkatanContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
