import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { Task } from './task';
import { AppService } from './app.service';
import { Router, ɵROUTER_PROVIDERS } from '@angular/router';

const now = new Date();

const DEFAULT: Task = {
  taskType: '普通',
  name: '',
  developer: '无',
  category: '直播',
  start: Date.now().toString(),
  end: Date.now().toString(),
  progress: 0,
  status: '开发',
  other: ''
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
  ) {}
  ngOnInit() {
  }

}
