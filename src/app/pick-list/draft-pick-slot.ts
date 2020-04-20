import {teams} from './teams';
import {IProspect} from '../core/prospect';

export interface IDraftPickSlot {
  pickNumber: number;
  team: teams;
  receivedFrom?: teams;
  comments?: string;
  pick?: IProspect;
}

