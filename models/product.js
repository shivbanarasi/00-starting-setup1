const db=require('../util/database');

const Cart=require('./cart');


module.exports = class Product {
  constructor(title,price, imageUrl, discription) {
    //this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.discription = discription;
    this.price = price;
  }

  save() {
   // let data=[this.title,this.price,this.imageUrl,this.discription];
 return db.execute('INSERT INTO products ( title, price, imageUrl, discription) VALUES("'+this.title+'","'+this.price+'","'+this.imageUrl+'","'+this.discription+'")'
 //[this.title,this.price,this.imageUrl,this.discription]
 
 );
}

  static deleteById(id){
    
    return db.execute('DELETE FROM products WHERE title="'+id+'"');
  }

  static fetchAll(cb) {
    return db.execute('SELECT * FROM products')
  }

  static findById(id){
    return db.execute('select * FROM products WHERE title="'+id+'"')  
  }

  static editby(id){
    return db.execute('UPDATE products SET title="'+this.title+'",price="'+this.price+'",imageUrl="'+this.imageUrl+'",discription="'+this.discription+'"');
    
  }
};
