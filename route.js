const router = require('express').Router();


router.get('/login', (req, res) => {

    res.render('pages/index', {title: "Login"} );
});

router.get('/employees', (req, res) => {
    let usr = req.query.username;
    if(!usr){
        res.redirect('/login');
    }
    else{
    // fetch employees from endpoint
//    let employees = fetch('https://url')
//                     .then(res => {
//                         res.render('pages/employees', 
//                         {
//                             title: "Employees",
//                             user:usr,
//                             employees: res.json()
//                         });
//                     })
    res.render('pages/employees', {title: "Employees", user:usr} );
    }

});

router.get('/home', (req, res) => {
        let usr = req.query.username;
// if usr is not null or usr is not empty redirect to login page
  
    if(!usr){
        res.redirect('/login');
    }
    else{
    let cuisine = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Pescetarian'];

        res.render('pages/home', {title: "Home", user:usr, kitchen: cuisine, } );
    }

});

//restaurant menu
// router.get('/cuisine/list', (req, res) => {
//     let cuisine = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Pescetarian'];
//     res.json(cuisine);
    
// });

// router.get('order', )


    


module.exports = router;
