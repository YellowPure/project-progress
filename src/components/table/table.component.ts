import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

import {Task} from '../../app/task';
import {AppService} from '../../app/app.service';

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
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    title = 'my first angular App';
    members = [];
    startModel: NgbDateStruct;
    endModel: NgbDateStruct;
    taskType = '任务类型';
    taskes: Task[];
    default = DEFAULT;
    base = {
        taskType: ['普通', '紧急', '组内'],
        risk: ['低', '中', '高'],
        categorys: ['直播', '点播', 'h5', 'hybrid'],
        status: ['开发', '联调', '测试'],
    developers: [
      '王亚伟',
      '黄亮',
      '何蜜',
      '陈北侠',
      '李程',
      '周妍',
      '易春宝'
    ]
  };

  constructor(
      private router: Router,
    private appService: AppService,
  ) {}
  ngOnInit() {
    console.log('table init');
    this.getList();
    // this.taskes = this.appService.getTaskList();
  }

  getList() {
    this.taskes = this.appService.getTaskList();
    console.log(this.taskes);
  }

  changeTaskType(data, index) {
    console.log(data, index);
    this.taskes[index].taskType = data;
  }

  changeDeveloper(data, index) {
    this.taskes[index].developer = data;
  }

  changeCategory(data, index) {
    this.taskes[index].category = data;
  }

  changeStatu(data, index) {
    this.taskes[index].status = data;

  }

  // 添加新任务
  addTask() {
    this.taskes.push(this.default);
  }

  // 完成该任务 添加到归档中
  finish(target, index) {
    console.log(target, index);
    if (target.checked === true) {
      this.send(this.taskes[index]);
      this.taskes.splice(index, 1);
    }
  }

  // 发送数据
  send(data) {

  }

  // 去开发者页
  toDeveloper(name) {
    console.log('develop', name);
    this.router.navigate(['/person', name]);
  }
}
