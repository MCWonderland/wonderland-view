import {Component, Input, OnInit} from '@angular/core';
import {KitChangeRecord} from "../../../../data/schema/stats";
import {DateService} from "../../../../core/service/date.service";

@Component({
  selector: 'app-kit-record',
  templateUrl: './kit-record.component.html',
  styleUrls: ['./kit-record.component.scss']
})
export class KitRecordComponent implements OnInit {

  @Input()
  changes!: KitChangeRecord[]

  constructor(
    private dateService: DateService
  ) {
  }

  ngOnInit(): void {
  }

  formatDuration(time: number): string {
    return this.dateService.formatDuration(time)
  }

  getFirstKit(): string {
    return this.changes[0]?.kit || 'Unknown'
  }

  shouldDisplayKitChanges(): boolean {
    return this.changes.length > 1
  }

  getKitChangeCount(): number {
    return this.changes.length - 1
  }
}
