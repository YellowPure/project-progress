import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-backup',
    templateUrl: './backup.component.html',
    styleUrls: ['./backup.component.css']
})
export class BackupComponent implements OnInit {
    ngOnInit() {
        console.log('backup init');
    }
}
