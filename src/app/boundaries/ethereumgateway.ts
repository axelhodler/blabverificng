import {Injectable} from "@angular/core";
import { environment } from '../../environments/environment';
declare var web3: any;

@Injectable()
export class EthereumGateway {
  verificationContract: any;

  connectToContract() {
    this.verificationContract = web3.eth.verificationContract(JSON.parse(environment.CONTRACT_ABI)).at(environment.CONTRACT_ADDRESS);
  }

  currentUserAddress() {
    return web3.eth.coinbase;
  }
}
