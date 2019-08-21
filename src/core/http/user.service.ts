import PetitionService from "./petition";
import { UserDataModel } from "../models/user-data.model";

class UserService {

  private petition: PetitionService;
  private baseUrl: string;

  constructor() {
    this.petition = new PetitionService();
    this.baseUrl = this.petition.baseUrl;
  }

  public login(email: string, password: string, onSuccess: Function, onError: Function) {
    const userData: any = {
      email,
      password
    }

    this.petition.post(`${this.baseUrl}/login`, userData,
      (data: any) => { 
        onSuccess(new UserDataModel(data.userData));
      }, (error: any) => {
        onError(error);
      }
    );
  }

}

export default UserService;