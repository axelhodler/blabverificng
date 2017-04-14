import {Injectable} from "@angular/core";

@Injectable()
export class Config {
  readonly CONTRACT_ADDRESS: string = '_CONTRACT_ADDRESS_';
  readonly CONTRACT_ABI: string = '_CONTRACT_ABI_';
}
