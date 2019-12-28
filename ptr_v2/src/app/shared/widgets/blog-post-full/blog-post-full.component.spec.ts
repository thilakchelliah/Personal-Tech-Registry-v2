import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostFullComponent } from './blog-post-full.component';

describe('BlogPostFullComponent', () => {
  let component: BlogPostFullComponent;
  let fixture: ComponentFixture<BlogPostFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
