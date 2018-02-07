import { Injectable } from '@angular/core';

import { Task } from './task';
import { TASKSE } from './mock-taskes';
import { Promise } from 'q';

@Injectable()
export class AppService {
    getTaskList(): Task[] {
        return TASKSE;
    }

    getPerson(name): Task[] {
        return TASKSE;
    }
}
