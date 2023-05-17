import { http } from "./config";

var config = { headers: {  
  'Content-Type': 'application/vnd.api+json',
  'Access-Control-Allow-Origin': '*'}
}

export default {

  AnimeSuggestion: (val) => {
    let replaceVal = val.replaceAll(' ', '%20')

    let nameAnime = `anime?filter[text]=${replaceVal}`

    return http.get(nameAnime, config)
  }
}