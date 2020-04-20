import {teams} from './teams';

export interface ITrade {
  teamA: teams;
  teamB?: teams;
  picksGiven: number[];
  picksReceived: number[];
}
