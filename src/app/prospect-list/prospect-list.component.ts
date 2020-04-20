import { Component, OnInit } from '@angular/core';
import { ProspectsRepositoryService } from '../core/prospects-repository.service';
import { IProspect } from '../core/prospect';
import {DraftOrderService} from '../core/draft-order.service';
import {IDraftPickSlot} from '../pick-list/draft-pick-slot';

@Component({
  selector: 'app-prospect-list',
  templateUrl: './prospect-list.component.html',
  styleUrls: ['./prospect-list.component.css']
})
export class ProspectListComponent implements OnInit {
  prospects: IProspect[] = [];
  filteredProspects: IProspect[];
  positionFilterOptions: string[] = ['All'];
  showOnlyAvailable: boolean = true;

  _positionFilter: string;
  get positionFilter(): string{
    return this._positionFilter;
  }
  set positionFilter(value: string){
    this._positionFilter = value;
    this.filteredProspects = this.positionFilter ? this.filterProspects(this.positionFilter) : this.prospects;
  }

  constructor(private prospectRepositoryService: ProspectsRepositoryService, private draftOrderService: DraftOrderService) {
  }

  ngOnInit(): void {
    const prospectsTaken: number[] = this.draftOrderService.getInitialDraftOrder().map((draftPickSlot: IDraftPickSlot) => { if (draftPickSlot.pick) { return draftPickSlot.pick.rank; }});
    this.prospects = this.prospectRepositoryService.getProspects().filter((prospect: IProspect) => !prospectsTaken.includes(prospect.rank)).filter((prospect: IProspect) => prospect.rank !== 0).sort((a, b) => (a.rank > b.rank) ? 1 : -1);
    this.filteredProspects = this.prospects;
    this.positionFilterOptions = this.positionFilterOptions.concat(Array.from(new Set(this.prospects.map((prospect: IProspect) => prospect.position)))).sort((a, b) => (a > b) ? 1 : -1);
    this.positionFilter = 'All';
  }

  positionDropdownChanged(position: string): void {
    this.positionFilter = position;
  }

  showAvailableCheckClicked(): void {
    this.showOnlyAvailable = !this.showOnlyAvailable;
    if (this.showOnlyAvailable){
      const prospectsTaken: number[] = this.draftOrderService.getInitialDraftOrder().map((draftPickSlot: IDraftPickSlot) => { if (draftPickSlot.pick) { return draftPickSlot.pick.rank; }});
      this.filteredProspects = this.prospectRepositoryService.getProspects().filter((prospect: IProspect) => !prospectsTaken.includes(prospect.rank)).filter((prospect: IProspect) => prospect.rank !== 0).sort((a, b) => (a.rank > b.rank) ? 1 : -1);
    }
    else{
      this.filteredProspects = this.prospectRepositoryService.getProspects().filter((prospect: IProspect) => prospect.rank !== 0).sort((a, b) => (a.rank > b.rank) ? 1 : -1);
    }
  }

  filterProspects(position: string): IProspect[] {
    return this.prospects.filter((prospect: IProspect) => prospect.position === position || position === 'All');
  }

}
