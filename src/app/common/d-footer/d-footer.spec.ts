import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { dFooterComponent } from './d-footer.component';

@Component({
    selector: 'test',
    template: `<footer d-footer></footer>`
})
class TestComponent {}

describe('dFooterComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, dFooterComponent]
        });
    });
    beforeEach(async(() => {
        TestBed.compileComponents();
    }));

    it('github nickname is correct', async(() => {

        const fixture = TestBed.createComponent(TestComponent);
        const el = fixture.debugElement.nativeElement as HTMLElement;
        expect(el.querySelector('span').textContent).toBe('@mdopieralski');
    }));
});