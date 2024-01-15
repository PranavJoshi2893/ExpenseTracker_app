import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningEditorComponent } from './earning-editor.component';

describe('EarningEditorComponent', () => {
  let component: EarningEditorComponent;
  let fixture: ComponentFixture<EarningEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarningEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarningEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
