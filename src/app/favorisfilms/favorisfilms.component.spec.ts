import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisfilmsComponent } from './favorisfilms.component';

describe('FavorisfilmsComponent', () => {
  let component: FavorisfilmsComponent;
  let fixture: ComponentFixture<FavorisfilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorisfilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorisfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
