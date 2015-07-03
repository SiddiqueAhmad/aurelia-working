import {HttpClient} from 'aurelia-http-client';

export class ItemService {
    static inject = [HttpClient];
    url = 'http://192.168.1.40:8080/api/solditems';
    constructor(http){
        this.http = http;
    }

    getItems(itemFilters){

    	let filters = {}
    if( itemFilters.stock  ) {
      filters = itemFilters 
    } else {
      itemFilters.stock = 1
      filters = itemFilters
    }

      return  this.http.createRequest(this.url).asPost().withHeader("Content-Type", "application/json").withContent(filters).send();
    }
}