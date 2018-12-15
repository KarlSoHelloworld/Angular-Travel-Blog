import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturewallComponent } from './picturewall.component';

describe('PicturewallComponent', () => {
  let component: PicturewallComponent;
  let fixture: ComponentFixture<PicturewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicturewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
