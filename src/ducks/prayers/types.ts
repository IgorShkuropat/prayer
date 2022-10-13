import {Comments} from '../../../api/generated';

export type DeletePrayerResponse = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columndId: number;
  commentsIds: Array<number>;
};
