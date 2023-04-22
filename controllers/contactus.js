exports.getacall = (req, res, next) => {
  res.render('contactus', {
    pageTitle: 'Contact Us',
    path: '/contactus',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};
exports.postsuccess = (req,res,next) =>{
    res.redirect('/success');
};