import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { dSpinnerComponent } from './d-spinner.component';

@Component({
    selector: 'test',
    template: `<d-spinner></d-spinner>`
})
class TestComponent {}

describe('dSpinnerComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, dSpinnerComponent]
        });
    });
    beforeEach(async(() => {
        TestBed.compileComponents();
    }));

    it('should be visible', async(() => {

        const fixture = TestBed.createComponent(TestComponent);
        const el = fixture.debugElement.nativeElement as HTMLElement;

        expect(el.hidden).toEqual(false);
    }));

    it('contain spinner', async(() => {

        const fixture = TestBed.createComponent(TestComponent);
        const el = fixture.debugElement.nativeElement as HTMLElement;

        expect(el.innerHTML).toEqual('<d-spinner><div class="d-spinner"></div></d-spinner>');
    }));
});