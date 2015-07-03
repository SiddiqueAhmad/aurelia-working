import {inject} from 'aurelia-framework';
import {ItemService} from './item-service';
import {Router, activationStrategy} from 'aurelia-router';


@inject(ItemService, Router)
export class Search{
  heading = 'Search';
  searchText = '';
  higestSold = false;
  deadItems = false;
  lowestSold = false;
  adjusted = false;
  notAdjusted = false;
  activeItems = false;
  inActive = false;
  items = [];
  

  constructor(ItemService, router){
    this.ItemService = ItemService;
    this.router = router;
  }

  activate(params){

    return this.ItemService.getItems(params).then(response => {
      this.items = response.content.data;
      
    });
  }

   determineActivationStrategy(){
     return activationStrategy.replace;
   }

  filterItems() {

   if(this.activeItems){
    this.activeItems = false
   } else {
    this.activeItems = true;
   }

    this.router.navigateToRoute('search', { active: this.activeItems })

    //this.items = [{"name":" Schweppes Soft Drink (Ginger Ale,Tonic Water,300ml) ","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/5/4/5472.jpg","price":80,"lastpurchased":38},{"name":"Heinz Beans (Baked Beanz,415g)","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/0/0/003181_1.jpg","price":110,"lastpurchased":84},{"name":"Bounty Chocolate (Bar) 57g","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/o/bounty_chocolate_coconut_85_g__1.jpg","price":60,"lastpurchased":47.9166},{"name":"Old Elpaso Tortila 8 Flour Wraps 8 inch 311g","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/4/6/46000273426.jpg","price":350,"lastpurchased":295},{"name":"Mirinda Soft Drink (150ml)","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/0/2/020310090758_untitled-1_20copy.jpg","price":60,"lastpurchased":29.45},{"name":"McCain Frozen Food (Smiles,450g)","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/o/r/original1.993423.2.jpg","price":250,"lastpurchased":225},{"name":" Hersheys Syrup (680g,Chocolate)  ","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/s/y/syrup.jpg","price":310,"lastpurchased":270},{"name":" Nestle Yogurt (Natural) ","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/n/e/nestle-yogurt-detail.jpg","price":90,"lastpurchased":77.25},{"name":"Pringles Chips (Original,40g)","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/p/r/pringles_original_40g.jpg","price":70,"lastpurchased":60},{"name":"Rafhan Baking Jelly (Strawberry,80g)","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/8/9/8961014189513_1.jpg","price":55,"lastpurchased":50.84},{"name":"CADBURY D/M 49G FRUIT&NUT","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/7/1/71_5jdhd1vl._sl1500_.jpg","price":95,"lastpurchased":81.25},{"name":"Betty Crocker Cake Mixes (French Vanilla,432g)","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/e/betty-crocker-cake-mix-_sup.jpg","price":250,"lastpurchased":205},{"name":"Cakes (C5,Caramel,150g) Galaxy","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/i/m/image_11_18.jpg","price":690,"lastpurchased":209},{"name":"PINAR LABANEH 200G","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/p/i/pinar_laban_labne_200_g_.jpg","price":430,"lastpurchased":8.5},{"name":"Chips (311.8g,Spicy Sweet Chilli) Doritos","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/u/bugles_spicy_sweet_chili.jpg","price":530,"lastpurchased":500},{"name":"Gerber Baby Juice (Pear,118ml)","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/e/gerber-baby-juice-_100_-pea.jpg","price":160,"lastpurchased":56.23},{"name":"Kettle Chips (Sour Cream,Sweet Onion,40g)","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9dfâ€¦ab33525d08d6e5fb8d27136e95/k/e/kettle_chips_sour_cream_sweet_onion_40g.jpg","price":210,"lastpurchased":140},{"name":"Cadbury Chocolate (Dairy Milk,Whole Nut,200g)","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/2/12756_4.1405593347.jpg","price":310,"lastpurchased":245},{"name":"Lurpak Fresh Butter (250g,Spreadable,Unsalted )","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/5/7/5740900806405.jpg","price":360,"lastpurchased":325},{"name":"Lurpak Fresh Butter (Spreadable,Salted ) 250g","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/8/8/8847415115806.jpg","price":360,"lastpurchased":325},{"name":"Mac Biscuits Marie Finge 200g","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/m/c/mcvities_biscuit_marie_finger_200_g_.png","price":190,"lastpurchased":165},{"name":" Maltesers Thick Shake 300ml","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/5/0/5060122037082.jpg","price":350,"lastpurchased":190},{"name":"Elle &amp; Vire Whipping Cream (Liquide,198ml)","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9dfâ€¦b33525d08d6e5fb8d27136e95/e/l/elle_vire_whipping_cream_excellence_1_l_.jpg","price":390,"lastpurchased":264.99},{"name":"Chips (Crunchy Cheese ,30g) Cheetos","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/h/cheetos_crunchy_cheese_snacks.jpg","price":50,"lastpurchased":45.08},{"name":"MENTOS GUM SPEARMI 15&#039;30G","image":"http://www.esajeecom.esajee.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/m/e/mentos.jpg","price":140,"lastpurchased":130}];

    /*this.ItemService.getItems(filters).then(response => {
     
      this.items = response.content.data;
      
    });*/

  }

}
