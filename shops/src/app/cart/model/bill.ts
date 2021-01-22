import {User} from '../../page-common/model/User';
import {BillGood} from './billGood';

export class Bill {
  public idBill: number;
  public createdDate: string;
  public billType: boolean;
  public user: User;
  public listBillGood: BillGood[];
}
