import PetitionService from "./petition";
import { MaterialModel } from "../models/material.model";

class MaterialService {

  private petition: PetitionService;
  private baseUrl: string;
  
  constructor() {
    this.petition = new PetitionService();
    this.baseUrl = this.petition.baseUrl;
  }

  public getMaterial(id: string, onSuccess: Function , onError: Function): void {
    this.petition.get(`${this.baseUrl}/getMaterial?id=${id}`,
      (resp: any) => {
        onSuccess(resp.data.map((material: any) => new MaterialModel(material)));
      }, 
      (error: any) => {
        onError(error);
      }
    );
  }

}

export default MaterialService;