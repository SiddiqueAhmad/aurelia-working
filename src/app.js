import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
  	 // config.options.pushState = true; // <-- this is all you need here
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'search',   name: 'search',     moduleId: './search',       nav: true, title:'Search' },
      
    ]);

    this.router = router;
  }
}
