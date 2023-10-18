const mealController = {
    getMeal: (req, res) => {
        res.render('pages/meal', {title: "Meal",} );
    },
    
    deleteMeal : (req, res) => {
        res.render('pages/meal', {title: "Meal",} );
    }   

};

//export controller
module.exports = mealController;
