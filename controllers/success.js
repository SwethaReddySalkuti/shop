exports.success = (req, res, next) => {
  res.render('success', {
    pageTitle: 'Form Submitted Successfully!',
    path: '/success',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};