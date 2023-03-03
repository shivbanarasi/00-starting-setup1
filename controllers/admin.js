const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing :false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const discription = req.body.discription;
  const product = new Product(title , price, imageUrl, discription);
  product.save()
  .then(()=>{
    res.redirect('/');
  })
  .catch(err=>console.log(err)) 
  
};

exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit;
if(editMode){
  const pageTitle=req.query.productId;
  res.render('admin/edit-product', {
    pageTitle: 'Edit Product',
    path: '/admin/edit-product',
    editing:editMode,
    product:pageTitle
  });
}
 
  }


exports.postEditProduct=(req,res,next)=>{
  //const prodId=req.body.productId;
  const updatedTitle=req.body.title;
  const updatedPrice=req.body.price;
  const updatedImageUrl=req.body.imageUrl;
  const updatedDesc=req.body.discription;
  const updatedProduct=new Product(//prodId,
    updatedTitle,
    updatedPrice,
    updatedImageUrl,
    updatedDesc
    );
    updatedProduct.editby(updatedTitle)
    .then(()=>{
      res.redirect('/admin/products');
    })
    .catch(err=>console.log(err));
    
};

exports.getProducts = (req, res, next) => {
   Product.fetchAll()
    .then(([rows,fieldData])=>{
      res.render('admin/products', {
        prods: rows,
        pageTitle: 'admin Products',
        path: '/products'
    });
      
      })
      .catch(err=>console.log(err));
    
  };
  


exports.postDeleteProduct=(req,res,next)=>{
  const prodId=req.body.productId;
  console.log(prodId);
  Product.deleteById(prodId)
  .then((r)=>{
    console.log(r)
    res.redirect('/admin/products')
  })
  .catch(err=>console.log(err));
  
}
