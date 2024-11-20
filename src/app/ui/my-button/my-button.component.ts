import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-my-button',
    imports: [CommonModule, RouterLink],
    templateUrl: './my-button.component.html',
    styleUrl: './my-button.component.scss'
})
export class MyButtonComponent {
@Input() title:string = 'Get My APP'
@Input() color:string = '#007bff'
@Input() data:any;
@Input() routeLink: string = '';

}
