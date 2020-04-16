exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredientName: 'Bagel', quantity: 1, recipeId: 1 },
        { ingredientName: 'Cream Cheese', quantity: 1, recipeId: 1 },
        { ingredientName: 'Bread', quantity: 1, recipeId: 2 },
        { ingredientName: 'Nutella', quantity: 1, recipeId: 2 },
        { ingredientName: 'Apple', quantity: 1, recipeId: 3 },
        { ingredientName: 'Pear', quantity: 1, recipeId: 3 },
      ]);
    });
};
