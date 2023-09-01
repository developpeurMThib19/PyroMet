import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistespageComponent } from './artistespage.component';

describe('ArtistespageComponent', () => {
  let component: ArtistespageComponent;
  let fixture: ComponentFixture<ArtistespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
