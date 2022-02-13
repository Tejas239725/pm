/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { HeroComponent } from "./hero.component";

describe("HeroComponent", () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have the correct hero", () => {
    fixture.componentInstance.hero = {
      id: 1,
      name: "SuperFunGuy",
      strength: 7,
    };
    expect(fixture.componentInstance.hero.name).toEqual("SuperFunGuy");
  });

  it("should render the hero name in an anchor tag", () => {
    fixture.componentInstance.hero = {
      id: 1,
      name: "SuperFunGuy",
      strength: 7,
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector("a").textContent).toContain(
      "SuperFunGuy"
    );
  });
});
