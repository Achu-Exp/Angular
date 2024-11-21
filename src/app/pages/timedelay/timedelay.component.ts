import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, fromEvent, throttleTime } from 'rxjs';
import { GlobalStateService } from '../../global-state.service';

@Component({
  selector: 'app-timedelay',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './timedelay.component.html',
  styleUrl: './timedelay.component.scss',
})
export class TimedelayComponent {


  constructor(public counterSet:GlobalStateService) {}
   

  colorControl = new FormControl('#00000');
  paragraphColor: string | null = '#00000';

  ngOnInit() {
    this.initSubmitThrottle();
    this.initColorDebounce();
  }

  onSubmit() {
    this.paragraphColor = this.colorControl.value;
    console.log('Color updated to:', this.paragraphColor);
  }

  initSubmitThrottle() {
    const button = document.querySelector('button[type="button"]');
    if (!button) return;

    const buttonClicks = fromEvent(button, 'click');
    const throttledClicks = buttonClicks.pipe(throttleTime(5000));

    throttledClicks.subscribe(() => {
      console.log('Throttled: Submit button clicked');
      this.onSubmit();
    });
  }

  initColorDebounce() {
    const colorInput = document.querySelector('input[type="color"]');
    if (!colorInput) return;

    const inputChanges = fromEvent(colorInput, 'input');
    const debouncedChanges = inputChanges.pipe(debounceTime(5000));

    debouncedChanges.subscribe(() => {
      console.log('Debounced: Color input updated');
      this.onSubmit();
    });
  }




}
