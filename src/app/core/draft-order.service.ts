import { Injectable } from '@angular/core';
import {IDraftPickSlot} from '../pick-list/draft-pick-slot';
import {teams} from '../pick-list/teams';
import {ITrade} from '../pick-list/trade';

@Injectable({
  providedIn: 'root'
})
export class DraftOrderService {
  initialDraftPickSlots: IDraftPickSlot[] = [
    // ROUND 1
    {pickNumber: 1, team: teams.CIN},
    {pickNumber: 2, team: teams.WAS},
    {pickNumber: 3, team: teams.DET},
    {pickNumber: 4, team: teams.NYG},
    {pickNumber: 5, team: teams.MIA},
    {pickNumber: 6, team: teams.LAC},
    {pickNumber: 7, team: teams.CAR},
    {pickNumber: 8, team: teams.ARZ},
    {pickNumber: 9, team: teams.JAX},
    {pickNumber: 10, team: teams.CLE},
    {pickNumber: 11, team: teams.NYJ},
    {pickNumber: 12, team: teams.LVR},
    {pickNumber: 13, team: teams.SF, receivedFrom: teams.IND},
    {pickNumber: 14, team: teams.TB},
    {pickNumber: 15, team: teams.DEN},
    {pickNumber: 16, team: teams.ATL},
    {pickNumber: 17, team: teams.DAL},
    {pickNumber: 18, team: teams.MIA, receivedFrom: teams.PIT},
    {pickNumber: 19, team: teams.LVR, receivedFrom: teams.CHI},
    {pickNumber: 20, team: teams.JAX, receivedFrom: teams.LAR},
    {pickNumber: 21, team: teams.PHI},
    {pickNumber: 22, team: teams.MIN, receivedFrom: teams.BUF},
    {pickNumber: 23, team: teams.NE},
    {pickNumber: 24, team: teams.NO},
    {pickNumber: 25, team: teams.MIN},
    {pickNumber: 26, team: teams.MIA, receivedFrom: teams.HOU},
    {pickNumber: 27, team: teams.SEA},
    {pickNumber: 28, team: teams.BAL},
    {pickNumber: 29, team: teams.TEN},
    {pickNumber: 30, team: teams.GB},
    {pickNumber: 31, team: teams.SF},
    {pickNumber: 32, team: teams.KC},
    // ROUND 2
    {pickNumber: 33, team: teams.CIN},
    {pickNumber: 34, team: teams.IND, receivedFrom: teams.WAS},
    {pickNumber: 35, team: teams.DET},
    {pickNumber: 36, team: teams.NYG},
    {pickNumber: 37, team: teams.LAC},
    {pickNumber: 38, team: teams.CAR},
    {pickNumber: 39, team: teams.MIA},
    {pickNumber: 40, team: teams.HOU, receivedFrom: teams.ARZ},
    {pickNumber: 41, team: teams.CLE},
    {pickNumber: 42, team: teams.JAX},
    {pickNumber: 43, team: teams.CHI, receivedFrom: teams.LVR},
    {pickNumber: 44, team: teams.IND},
    {pickNumber: 45, team: teams.TB},
    {pickNumber: 46, team: teams.DEN},
    {pickNumber: 47, team: teams.ATL},
    {pickNumber: 48, team: teams.NYJ},
    {pickNumber: 49, team: teams.PIT},
    {pickNumber: 50, team: teams.CHI},
    {pickNumber: 51, team: teams.DAL},
    {pickNumber: 52, team: teams.LAR},
    {pickNumber: 53, team: teams.PHI},
    {pickNumber: 54, team: teams.BUF},
    {pickNumber: 55, team: teams.BAL, receivedFrom: teams.NE},
    {pickNumber: 56, team: teams.MIA, receivedFrom: teams.NO},
    {pickNumber: 57, team: teams.LAR, receivedFrom: teams.HOU},
    {pickNumber: 58, team: teams.MIN},
    {pickNumber: 59, team: teams.SEA},
    {pickNumber: 60, team: teams.BAL},
    {pickNumber: 61, team: teams.TEN},
    {pickNumber: 62, team: teams.GB},
    {pickNumber: 63, team: teams.KC, receivedFrom: teams.SF},
    {pickNumber: 64, team: teams.SEA, receivedFrom: teams.KC},
    // ROUND 3
    {pickNumber: 65, team: teams.CIN},
    {pickNumber: 66, team: teams.WAS},
    {pickNumber: 67, team: teams.DET},
    {pickNumber: 68, team: teams.NYJ, receivedFrom: teams.NYG},
    {pickNumber: 69, team: teams.CAR},
    {pickNumber: 70, team: teams.MIA},
    {pickNumber: 71, team: teams.LAC},
    {pickNumber: 72, team: teams.ARZ},
    {pickNumber: 73, team: teams.JAX},
    {pickNumber: 74, team: teams.CLE},
    {pickNumber: 75, team: teams.IND},
    {pickNumber: 76, team: teams.TB},
    {pickNumber: 77, team: teams.DEN},
    {pickNumber: 78, team: teams.ATL},
    {pickNumber: 79, team: teams.NYJ},
    {pickNumber: 80, team: teams.LVR},
    {pickNumber: 81, team: teams.LVR, receivedFrom: teams.CHI},
    {pickNumber: 82, team: teams.DAL},
    {pickNumber: 83, team: teams.DEN, receivedFrom: teams.PIT},
    {pickNumber: 84, team: teams.LAR},
    {pickNumber: 85, team: teams.DET, receivedFrom: teams.PHI},
    {pickNumber: 86, team: teams.BUF},
    {pickNumber: 87, team: teams.NE},
    {pickNumber: 88, team: teams.NO},
    {pickNumber: 89, team: teams.MIN},
    {pickNumber: 90, team: teams.HOU},
    {pickNumber: 91, team: teams.LVR, receivedFrom: teams.SEA},
    {pickNumber: 92, team: teams.BAL},
    {pickNumber: 93, team: teams.TEN},
    {pickNumber: 94, team: teams.GB},
    {pickNumber: 95, team: teams.DEN, receivedFrom: teams.SF},
    {pickNumber: 96, team: teams.KC},
    {pickNumber: 97, team: teams.CLE, receivedFrom: teams.HOU},
    {pickNumber: 98, team: teams.NE},
    {pickNumber: 99, team: teams.NYG},
    {pickNumber: 100, team: teams.NE},
    {pickNumber: 101, team: teams.SEA},
    {pickNumber: 102, team: teams.PIT},
    {pickNumber: 103, team: teams.PHI},
    {pickNumber: 104, team: teams.LAR},
    {pickNumber: 105, team: teams.MIN},
    {pickNumber: 106, team: teams.BAL},
    // ROUND 4
    {pickNumber: 107, team: teams.CIN},
    {pickNumber: 108, team: teams.WAS},
    {pickNumber: 109, team: teams.DET},
    {pickNumber: 110, team: teams.NYG},
    {pickNumber: 111, team: teams.HOU, receivedFrom: teams.MIA},
    {pickNumber: 112, team: teams.LAC},
    {pickNumber: 113, team: teams.CAR},
    {pickNumber: 114, team: teams.ARZ},
    {pickNumber: 115, team: teams.CLE},
    {pickNumber: 116, team: teams.JAX},
    {pickNumber: 117, team: teams.TB},
    {pickNumber: 118, team: teams.DEN},
    {pickNumber: 119, team: teams.ATL},
    {pickNumber: 120, team: teams.NYJ},
    {pickNumber: 121, team: teams.LVR},
    {pickNumber: 122, team: teams.IND},
    {pickNumber: 123, team: teams.DAL},
    {pickNumber: 124, team: teams.PIT},
    {pickNumber: 125, team: teams.NE, receivedFrom: teams.CHI},
    {pickNumber: 126, team: teams.LAR},
    {pickNumber: 127, team: teams.PHI},
    {pickNumber: 128, team: teams.BUF},
    {pickNumber: 129, team: teams.BAL, receivedFrom: teams.NE},
    {pickNumber: 130, team: teams.NO},
    {pickNumber: 131, team: teams.ARZ, receivedFrom: teams.HOU},
    {pickNumber: 132, team: teams.MIN},
    {pickNumber: 133, team: teams.SEA},
    {pickNumber: 134, team: teams.BAL},
    {pickNumber: 135, team: teams.PIT, receivedFrom: teams.TEN},
    {pickNumber: 136, team: teams.GB},
    {pickNumber: 137, team: teams.JAX, receivedFrom: teams.SF},
    {pickNumber: 138, team: teams.KC},
    {pickNumber: 139, team: teams.TB},
    {pickNumber: 140, team: teams.JAX, receivedFrom: teams.CHI},
    {pickNumber: 141, team: teams.MIA},
    {pickNumber: 142, team: teams.WAS},
    {pickNumber: 143, team: teams.ATL, receivedFrom: teams.BAL},
    {pickNumber: 144, team: teams.SEA},
    {pickNumber: 145, team: teams.PHI},
    {pickNumber: 146, team: teams.PHI},
    // ROUND 5
    {pickNumber: 147, team: teams.CIN},
    {pickNumber: 148, team: teams.CAR, receivedFrom: teams.WAS},
    {pickNumber: 149, team: teams.DET},
    {pickNumber: 150, team: teams.NYG},
    {pickNumber: 151, team: teams.LAC},
    {pickNumber: 152, team: teams.CAR},
    {pickNumber: 153, team: teams.MIA},
    {pickNumber: 154, team: teams.MIA, receivedFrom: teams.JAX},
    {pickNumber: 155, team: teams.MIN, receivedFrom: teams.CLE},
    {pickNumber: 156, team: teams.SF, receivedFrom: teams.DEN},
    {pickNumber: 157, team: teams.JAX, receivedFrom: teams.ATL},
    {pickNumber: 158, team: teams.NYJ},
    {pickNumber: 159, team: teams.LVR},
    {pickNumber: 160, team: teams.IND},
    {pickNumber: 161, team: teams.TB},
    {pickNumber: 162, team: teams.WAS, receivedFrom: teams.PIT},
    {pickNumber: 163, team: teams.CHI},
    {pickNumber: 164, team: teams.DAL},
    {pickNumber: 165, team: teams.JAX, receivedFrom: teams.LAR},
    {pickNumber: 166, team: teams.DET, receivedFrom: teams.PHI},
    {pickNumber: 167, team: teams.BUF},
    {pickNumber: 168, team: teams.PHI, receivedFrom: teams.NE},
    {pickNumber: 169, team: teams.NO},
    {pickNumber: 170, team: teams.BAL, receivedFrom: teams.MIN},
    {pickNumber: 171, team: teams.HOU},
    {pickNumber: 172, team: teams.NE, receivedFrom: teams.SEA},
    {pickNumber: 173, team: teams.MIA, receivedFrom: teams.BAL},
    {pickNumber: 174, team: teams.TEN},
    {pickNumber: 175, team: teams.GB},
    {pickNumber: 176, team: teams.SF},
    {pickNumber: 177, team: teams.KC},
    {pickNumber: 178, team: teams.DEN},
    {pickNumber: 179, team: teams.DAL},
    // ROUND 6
    {pickNumber: 180, team: teams.CIN},
    {pickNumber: 181, team: teams.DEN, receivedFrom: teams.WAS},
    {pickNumber: 182, team: teams.DET},
    {pickNumber: 183, team: teams.NYG},
    {pickNumber: 184, team: teams.CAR},
    {pickNumber: 185, team: teams.MIA},
    {pickNumber: 186, team: teams.LAC},
    {pickNumber: 187, team: teams.CLE, receivedFrom: teams.ARZ},
    {pickNumber: 188, team: teams.BUF, receivedFrom: teams.CLE},
    {pickNumber: 189, team: teams.JAX},
    {pickNumber: 190, team: teams.PHI, receivedFrom: teams.ATL},
    {pickNumber: 191, team: teams.NYJ},
    {pickNumber: 192, team: teams.GB, receivedFrom: teams.LVR},
    {pickNumber: 193, team: teams.IND},
    {pickNumber: 194, team: teams.TB},
    {pickNumber: 195, team: teams.NE, receivedFrom: teams.DEN},
    {pickNumber: 196, team: teams.CHI},
    {pickNumber: 197, team: teams.IND, receivedFrom: teams.MIA},
    {pickNumber: 198, team: teams.PIT},
    {pickNumber: 199, team: teams.LAR},
    {pickNumber: 200, team: teams.CHI, receivedFrom: teams.PHI},
    {pickNumber: 201, team: teams.MIN, receivedFrom: teams.BUF},
    {pickNumber: 202, team: teams.ARZ, receivedFrom: teams.NE},
    {pickNumber: 203, team: teams.NO},
    {pickNumber: 204, team: teams.NE, receivedFrom: teams.HOU},
    {pickNumber: 205, team: teams.MIN},
    {pickNumber: 206, team: teams.JAX, receivedFrom: teams.SEA},
    {pickNumber: 207, team: teams.BUF, receivedFrom: teams.BAL},
    {pickNumber: 208, team: teams.GB, receivedFrom: teams.TEN},
    {pickNumber: 209, team: teams.GB},
    {pickNumber: 210, team: teams.SF},
    {pickNumber: 211, team: teams.NYJ, receivedFrom: teams.KC},
    {pickNumber: 212, team: teams.NE},
    {pickNumber: 213, team: teams.NE},
    {pickNumber: 214, team: teams.SEA},
    // ROUND 7
    {pickNumber: 215, team: teams.CIN},
    {pickNumber: 216, team: teams.WAS},
    {pickNumber: 217, team: teams.SF, receivedFrom: teams.DET},
    {pickNumber: 218, team: teams.NYG},
    {pickNumber: 219, team: teams.MIN, receivedFrom: teams.MIA},
    {pickNumber: 220, team: teams.LAC},
    {pickNumber: 221, team: teams.CAR},
    {pickNumber: 222, team: teams.ARZ},
    {pickNumber: 223, team: teams.JAX},
    {pickNumber: 224, team: teams.TEN, receivedFrom: teams.CLE},
    {pickNumber: 225, team: teams.BAL, receivedFrom: teams.NYJ},
    {pickNumber: 226, team: teams.CHI, receivedFrom: teams.LVR},
    {pickNumber: 227, team: teams.MIA, receivedFrom: teams.IND},
    {pickNumber: 228, team: teams.ATL, receivedFrom: teams.TB},
    {pickNumber: 229, team: teams.WAS, receivedFrom: teams.DEN},
    {pickNumber: 230, team: teams.NE, receivedFrom: teams.ATL},
    {pickNumber: 231, team: teams.DAL},
    {pickNumber: 232, team: teams.PIT},
    {pickNumber: 233, team: teams.CHI},
    {pickNumber: 234, team: teams.LAR},
    {pickNumber: 235, team: teams.DET, receivedFrom: teams.PHI},
    {pickNumber: 236, team: teams.GB, receivedFrom: teams.BUF},
    {pickNumber: 237, team: teams.DEN, receivedFrom: teams.NE},
    {pickNumber: 238, team: teams.NYG, receivedFrom: teams.NO},
    {pickNumber: 239, team: teams.BUF, receivedFrom: teams.MIN},
    {pickNumber: 240, team: teams.HOU},
    {pickNumber: 241, team: teams.NE, receivedFrom: teams.SEA},
    {pickNumber: 242, team: teams.GB, receivedFrom: teams.BAL},
    {pickNumber: 243, team: teams.TEN},
    {pickNumber: 244, team: teams.CLE, receivedFrom: teams.GB},
    {pickNumber: 245, team: teams.SF},
    {pickNumber: 246, team: teams.MIA, receivedFrom: teams.KC},
    {pickNumber: 247, team: teams.NYG},
    {pickNumber: 248, team: teams.HOU},
    {pickNumber: 249, team: teams.MIN},
    {pickNumber: 250, team: teams.HOU},
    {pickNumber: 251, team: teams.MIA},
    {pickNumber: 252, team: teams.DEN},
    {pickNumber: 253, team: teams.MIN},
    {pickNumber: 254, team: teams.DEN},
    {pickNumber: 255, team: teams.NYG}
  ];

  draftPickSlots: IDraftPickSlot[] = [];

  constructor() {
    this.draftPickSlots = this.initialDraftPickSlots;
  }

  getInitialDraftOrder(): IDraftPickSlot[] {
    return this.draftPickSlots;
  }

  setInitialDraftOrder(draftPickSlot: IDraftPickSlot): void {
    this.draftPickSlots = this.draftPickSlots.map((slot: IDraftPickSlot) => {
      if (slot.pickNumber === draftPickSlot.pickNumber) {
        return draftPickSlot;
      }
      return slot;
    });
  }

  processTrade(trade: ITrade): void {
    console.log(trade);
    this.draftPickSlots = this.draftPickSlots.map((slot: IDraftPickSlot) => {
      if (trade.picksGiven.includes(slot.pickNumber)) {
        return Object.assign({}, slot, { team: trade.teamB}, { receivedFrom: slot.team});
      }
      else if (trade.picksReceived.includes(slot.pickNumber)){
        return Object.assign({}, slot, { team: trade.teamA}, { receivedFrom: slot.team});
      }
      return slot;
    });
  }

}
