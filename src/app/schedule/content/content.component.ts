import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'content-name',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    indexEl:number[]=[];
    constructor() { }

    ngOnInit(): void {
        let i =20;
        for (let index = 0; index < i; index++) {
            this.indexEl.push(index);
            
        }
     }
}
