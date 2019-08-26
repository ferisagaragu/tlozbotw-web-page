import PetitionService from "./petition";
import { BowModel } from "../models/bow.model";

class BowService {

  private petition: PetitionService;
  private baseUrl: string;
  
  constructor() {
    this.petition = new PetitionService();
    this.baseUrl = this.petition.baseUrl;
  }

  public getBows(id: string, onSuccess: Function , onError: Function): void {
    this.petition.get(`${this.baseUrl}/getBows?id=${id}`,
      (resp: any) => {
        onSuccess(resp.data.map((bow: any) => new BowModel(bow)));
      }, 
      (error: any) => {
        onError(error);
      }
    )
  }
}

export default BowService;