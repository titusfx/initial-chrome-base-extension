import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentScriptComponent } from './content-script.component';

describe('ContentScriptComponent', () => {
  let component: ContentScriptComponent;
  let fixture: ComponentFixture<ContentScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
