import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassOnlineComponent } from './class-online.component';

describe('ClassOnlineComponent', () => {
  let component: ClassOnlineComponent;
  let fixture: ComponentFixture<ClassOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassOnlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
