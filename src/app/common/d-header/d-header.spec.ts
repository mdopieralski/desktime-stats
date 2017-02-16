import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { dHeaderComponent } from './d-header.component';

@Component({
    selector: 'test',
    template: `<header d-header></header>`
})
class TestComponent {}

describe('dHeaderComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, dHeaderComponent]
        });
    });
    beforeEach(async(() => {
        TestBed.compileComponents();
    }));

    it('navigation should have proper items and order', async(() => {

        const fixture = TestBed.createComponent(TestComponent);
        const el = fixture.debugElement.nativeElement as HTMLElement;
        const anchors = el.querySelectorAll('.page-nav ul li a');

        expect(anchors[0].textContent).toBe('hello');
        expect(anchors[1].textContent).toBe('stats');
        expect(anchors[2].textContent).toBe('settings');
    }));
});