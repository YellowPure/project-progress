import 'rxjs/add/operator/switchMap';
import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AppService} from '../../app/app.service';
import {Task} from '../../app/task';

@Component({
    selector: 'app-person-component',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
    tasks: Task[];
    constructor(
        private route: ActivatedRoute,
        private appService: AppService
    ) {}
    ngOnInit() {
        this.route.paramMap
        // .switchMap((params: ParamMap) => {
        //     return this.appService.getPerson(params.get('id'));
        // })
        .subscribe(params => {
            // console.log(tasks);
            this.tasks = this.appService.getPerson(params.get('id'));
        });
    }
}
