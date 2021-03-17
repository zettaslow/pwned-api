import { BreachModel } from "./Breach";

export interface BreachResponse {
  IsBreached: boolean,
  Message: string,
  Breaches?: BreachModel[]
}