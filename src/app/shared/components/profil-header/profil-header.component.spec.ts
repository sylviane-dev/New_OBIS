import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilHeaderComponent } from './profil-header.component';

describe('ProfilHeaderComponent', () => {
  let component: ProfilHeaderComponent;
  let fixture: ComponentFixture<ProfilHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
