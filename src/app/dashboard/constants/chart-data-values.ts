import { Observable, of } from 'rxjs';
import { IReportsGraph } from '../model/get-users.model';

export const CHART_DATA_VALUES_ARRAY: Observable<IReportsGraph[]> = of([
  {
    id: 1,
    data: {
      agreeableness: 13.333333333333334,
      drive: 21.66666668,
      luck: 10,
      openess: 30,
    },
    type: 'bar',
  },
  {
    id: 2,
    data: {
      agreeableness: 21,
      drive: 14,
      luck: 40,
      openess: 19,
    },
    type: 'bar',
  },
  {
    id: 3,
    data: {
      agreeableness: 23,
      drive: 29,
      luck: 15,
      openess: 25,
    },
    type: 'bar',
  },
  {
    id: 4,
    data: {
      agreeableness: 35,
      drive: 8,
      luck: 20,
      openess: 30,
    },
    type: 'bar',
  },
]);
