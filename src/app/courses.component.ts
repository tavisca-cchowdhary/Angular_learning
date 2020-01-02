import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector:'courses',
    template:`
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
    `
    //`
    //     <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue':'white'">Save</button>
    // `
    //  template: `<h2>{{getTitle()}}</h2>
    //            <ul>
    //                 <li *ngFor="let course of courses">
    //                     {{course}}
    //                 </li>
    //             </ul>
    //             <img src="{{imageUrl}}"/>
    //             <img [src]="imageUrl"/>
    //             <table>
    //                 <tr>
    //                     <td [attr.colspan]="colSpan"></td>
    //                 </tr>
    //             </table>

    //         `
})
export class CoursesComponent {
    title="List of courses";
    courses ;
    imageUrl="http://lorempixel.com/400/200";
    colSpan=2;
    isActive=true;

    constructor(service:CoursesService){
        //let service=new CoursesService();
        this.courses=service.getCourses();
    }
    getTitle(){
        return this.title;
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    onDivClicked(){
        console.log("div was clicked");
    }
}