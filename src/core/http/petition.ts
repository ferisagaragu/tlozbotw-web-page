class PetitionService { 

  baseUrl: string;
  headers: any;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl ? baseUrl : 'http://localhost:3400';
    this.headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJlbWFpbCI6ImZlcmlzYWdhcmFndUBnbWFpbC5jb20iLCJ1aWQiOiJiN0daWHFrU1FLYm1lbkx1M2hyQ1J5SERldWUyIn0sImlhdCI6MTU2NjMzMzEwMCwiZXhwIjoxNTY2MzUxMTAwfQ.K8ImHnJP8k2TFBbdLPkEPuyDBo3tMjQVuWpA3pJwSJk',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  }

  public get(url: string, onSuccess: Function, onError?: Function): void {
    fetch(url, {
      method: 'GET',
      headers: this.headers
    }).then((response: any) => {
      if(response.ok) {
        return response.json();         
      }
      throw response.json();
    }).then((data: any) => {
      onSuccess(data);
    }).catch((errorCallback: any) => 
      errorCallback.then((error: any) => {
        if (onError) {
          onError(error);
        }
      })
    );
  }

  public post(url: string, params: any, onSuccess: Function, onError?: Function): void {
    fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(params)
    }).then((response: any) => {
      if(response.ok) {
        return response.json();         
      }
      throw response.json();
    }).then((data: any) => {
      onSuccess(data);
    }).catch((errorCallback: any) => 
      errorCallback.then((error: any) => {
        if (onError) {
          onError(error);
        }
      })
    );
  }

}

export default PetitionService;
