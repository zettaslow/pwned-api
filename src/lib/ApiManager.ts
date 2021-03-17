import axios, { AxiosResponse } from 'axios';
import 'dotenv/config';
import { BreachModel } from '../models/Breach';
import { BreachResponse } from '../models/BreachResponse';

const HIBP_Breaches_PerAccount_Endpoint = "https://haveibeenpwned.com/api/v3/breachedaccount/";
const HIBP_UserAgent = "pwned-api";

export async function GetBreachesForEmail(account: string): Promise<BreachResponse> {
  let endpoint = HIBP_Breaches_PerAccount_Endpoint + "/" + account + "?truncateResponse=false";

  return axios({
    method: 'get',
    url: HIBP_Breaches_PerAccount_Endpoint + "/" + account + "?truncateResponse=false",
    headers: {
      "hibp-api-key": process.env.HIBP_API_KEY,
      "user-agent": HIBP_UserAgent
    },
    
  }).then(function (response: AxiosResponse<BreachModel[]>) {
    let apiResponse: BreachResponse = {
      IsBreached: false,
      Message: ""
    };

    if (response.data.length > 0) {
      apiResponse.IsBreached = true;
      // filter data for ONLY verified breaches
      apiResponse.Breaches = response.data.filter((breach) => {
        return breach.IsVerified
      });
    }

    return apiResponse;
  }).catch((exception) => {
    console.log(exception);

    let apiResponse: BreachResponse = {
      IsBreached: false,
      Message: "No breaches found for " + account
    }
    return apiResponse;
  });
}