/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
 const result =  await knex('meals').del()

 if(result){
  return  await knex('meals').insert([
    {
      name: 'burger',
     description: 'burger with cheese',
     price: 70,
     is_vegetarian: false,
     image: 'https://payments.ipaygh.com/app/webroot/img/products/MER02854-Double_Decker-0.jpeg',
    },
    {
      name: 'pizza',
      description: 'pizza with beef',
      price: 130,
      is_vegetarian: false,
      image: 'https://payments.ipaygh.com/app/webroot/img/products/MER02854-Freestyler-0.jpeg'
    },
     {
      name : 'rice',
      description: 'rice with chicken',
      price: 80,
      is_vegetarian: false,
      image: 'https://payments.ipaygh.com/app/webroot/img/products/MER02854-Fried_Rice-0.jpeg'

     },
     {
      name: 'pork',
      description: 'pork with beef',
      price: 90,
      is_vegetarian: false,
      image: 'https://payments.ipaygh.com/app/webroot/img/products/MER02854-Portion_of_Pork-0.jpeg'
     }

  ]);

 }




};