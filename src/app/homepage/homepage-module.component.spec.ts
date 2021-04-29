import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageModuleComponent } from './homepage-module.component';

describe('HomepageComponent', () => {
  let component: HomepageModuleComponent;
  let fixture: ComponentFixture<HomepageModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
