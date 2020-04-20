import { Component, OnInit } from '@angular/core';
import { DraftOrderService } from '../core/draft-order.service';
import { IDraftPickSlot } from './draft-pick-slot';
import { teams } from './teams';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ProspectsRepositoryService} from '../core/prospects-repository.service';
import {IProspect} from '../core/prospect';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {ITrade} from './trade';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.css']
})
export class PickListComponent implements OnInit {
  faTrash = faTrash;
  teamsList: string[] = Object.keys(teams).filter((key: string) => typeof teams[key] === 'number').sort((a, b) => (a > b) ? 1 : -1);
  tradeTeamsList: string[] = [];
  trade: ITrade | undefined;
  teamATradeAssets: number[] = [];
  teamBTradeAssets: number[] = [];
  // pick slot dataset
  filteredPickSlots: IDraftPickSlot[];
  _pickOrder: IDraftPickSlot[];
  get pickOrder(): IDraftPickSlot[]{
    return this._pickOrder;
  }
  set pickOrder(value: IDraftPickSlot[]){
    this._pickOrder = value;
    this.prospects = this.filterAvailableProspects();
    this.filteredPickSlots = this.teamFilter ? this.filterPickSlots(this.teamFilter) : this.pickOrder;
  }
  // prospect dataset
  prospects: IProspect[] = [];
  filteredProspects: IProspect[];
  // pick slot filters
  teamFilterOptions: string[] = ['All'];
  _teamFilter: string;
  get teamFilter(): string{
    return this._teamFilter;
  }
  set teamFilter(value: string){
    this._teamFilter = value;
    this.filteredPickSlots = this.teamFilter ? this.filterPickSlots(this.teamFilter) : this.pickOrder;
  }
  // prospect filters
  _playerNameFilter: string;
  get playerNameFilter(): string{
    return this._playerNameFilter;
  }
  set playerNameFilter(value: string){
    this._playerNameFilter = value;
    this.filteredProspects = this.playerNameFilter ? this.filterProspects(this.playerNameFilter) : this.prospects;
  }

  constructor(private draftOrderService: DraftOrderService, private modalService: NgbModal, private prospectRepositoryService: ProspectsRepositoryService) { }

  ngOnInit(): void {
    this.pickOrder = this.draftOrderService.getInitialDraftOrder();
    const prospectsTaken: number[] = this.pickOrder.map((draftPickSlot: IDraftPickSlot) => { if (draftPickSlot.pick) { return draftPickSlot.pick.rank; }});
    this.filteredPickSlots = this.pickOrder;
    this.teamFilterOptions = this.teamFilterOptions.concat(this.teamsList);
    this.teamFilter = 'All';

    this.prospects = this.prospectRepositoryService.getProspects().filter((prospect: IProspect) => !prospectsTaken.includes(prospect.rank)).filter((prospect: IProspect) => prospect.rank !== 0).sort((a, b) => (a.rank > b.rank) ? 1 : -1);
    this.filteredProspects = this.prospects;
  }

  getTeam(team: teams){
    return teams[team];
  }

  teamDropdownChanged(team: string): void {
    this.teamFilter = team;
  }

  filterPickSlots(team: string): IDraftPickSlot[] {
    return this.pickOrder.filter((draftPickSlot: IDraftPickSlot) => teams[draftPickSlot.team] === team || team === 'All');
  }

  filterProspects(playerName: string): IProspect[] {
    return this.prospects.filter((prospect: IProspect) => (prospect.firstName + prospect.lastName + prospect.position).toLocaleLowerCase().includes(playerName.replace(/[\s,]/g, '')) || (prospect.lastName + prospect.firstName + prospect.position).toLocaleLowerCase().includes(playerName.replace(/[\s,]/g, '').toLocaleLowerCase()));
  }

  filterAvailableProspects(): IProspect[]{
    const prospectsTaken: number[] = this.pickOrder.map((draftPickSlot: IDraftPickSlot) => { if (draftPickSlot.pick) { return draftPickSlot.pick.rank; }});
    return this.prospects.filter((prospect: IProspect) => !prospectsTaken.includes(prospect.rank));
  }

  previousPickMade(pickNumber: number): boolean {
    const previousPickSlot: IDraftPickSlot = this.pickOrder.find((draftPickSlot: IDraftPickSlot) => draftPickSlot.pickNumber === pickNumber - 1);
    return pickNumber === 1 || Boolean(previousPickSlot.pick);
  }

  nextPickMade(pickNumber: number): boolean {
    const nextPickSlot: IDraftPickSlot = this.pickOrder.find((draftPickSlot: IDraftPickSlot) => draftPickSlot.pickNumber === pickNumber + 1);
    return Boolean(nextPickSlot.pick);
  }

  removeProspect(pickNumber: number): void {
    console.log(this.pickOrder.find((draftPickSlot: IDraftPickSlot) => draftPickSlot.pickNumber === pickNumber));
    this.draftOrderService.setInitialDraftOrder(Object.assign({}, this.pickOrder.find((draftPickSlot: IDraftPickSlot) => draftPickSlot.pickNumber === pickNumber), { pick: undefined}));
    this.pickOrder = this.draftOrderService.getInitialDraftOrder();
    this.filteredPickSlots = this.teamFilter ? this.filterPickSlots(this.teamFilter) : this.pickOrder;
  }

  openPickSelection(content, pickSlot: IDraftPickSlot) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      const pick: IDraftPickSlot = Object.assign({}, pickSlot, { pick: result });
      this.draftOrderService.setInitialDraftOrder(pick);
      this.pickOrder = this.draftOrderService.getInitialDraftOrder();
      this.playerNameFilter = '';
    }, (reason) => {
      this.playerNameFilter = '';
    });
  }

  openTrade(content, pickSlot: IDraftPickSlot) {
    this.trade = { teamA: pickSlot.team, picksGiven: [], picksReceived: [] };
    this.teamATradeAssets = this.getTradeAssets(pickSlot.team);
    this.addTradeAsset(pickSlot.pickNumber, 'A');
    this.tradeTeamsList = this.teamsList.filter((team: string) => team !== teams[pickSlot.team]);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.draftOrderService.processTrade(this.trade);
      this.pickOrder = this.draftOrderService.getInitialDraftOrder();
      this.trade = undefined;
      this.teamATradeAssets = [];
      this.teamBTradeAssets = [];
      this.tradeTeamsList = [];
    }, (reason) => {
      this.trade = undefined;
      this.teamATradeAssets = [];
      this.teamBTradeAssets = [];
      this.tradeTeamsList = [];
    });
  }

  setTradeTeamB(team: string): void {
    if (team){
      this.trade = Object.assign({}, this.trade, {teamB: teams[team]});
      this.teamBTradeAssets = this.getTradeAssets(teams[team]);
    }
    else{
      this.trade = Object.assign({}, this.trade, {teamB: undefined});
      this.teamBTradeAssets = [];
    }
  }

  getTradeAssets(team: teams): number[] {
    return this.pickOrder.filter((draftPickSlot: IDraftPickSlot) => draftPickSlot.team === team && !Boolean(draftPickSlot.pick)).map((draftPickSlot: IDraftPickSlot) => draftPickSlot.pickNumber);
  }

  addTradeAsset(pick: number, team: 'A' | 'B'): void {
    if (team === 'A'){
      this.trade = Object.assign({}, this.trade, { picksGiven: (this.trade.picksGiven.concat([pick])).sort((a, b) => (a > b) ? 1 : -1)});
      this.teamATradeAssets = this.teamATradeAssets.filter((pickNumber: number) => pickNumber !== pick);
    }
    else if (team === 'B'){
      this.trade = Object.assign({}, this.trade, { picksReceived: (this.trade.picksReceived.concat([pick])).sort((a, b) => (a > b) ? 1 : -1)});
      this.teamBTradeAssets = this.teamBTradeAssets.filter((pickNumber: number) => pickNumber !== pick);
    }
  }

  removeTradeAsset(pick: number, team: 'A' | 'B'): void {
    if (team === 'A'){
      this.trade = Object.assign({}, this.trade, { picksGiven: this.trade.picksGiven.filter((pickNumber: number) => pickNumber !== pick)});
      this.teamATradeAssets = this.teamATradeAssets.concat([pick]).sort((a, b) => (a > b) ? 1 : -1);
    }
    else if (team === 'B'){
      this.trade = Object.assign({}, this.trade, { picksReceived: this.trade.picksReceived.filter((pickNumber: number) => pickNumber !== pick)});
      this.teamBTradeAssets = this.teamBTradeAssets.concat([pick]).sort((a, b) => (a > b) ? 1 : -1);
    }
  }

}
