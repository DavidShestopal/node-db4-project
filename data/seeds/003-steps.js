exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipeStep: 'Toast Bagel', recipeId: 1 },
        { recipeStep: 'Spread Cream Cheese', recipeId: 1 },
        { recipeStep: 'Toast bread', recipeId: 2 },
        { recipeStep: 'Spread nutella', recipeId: 2 },
        { recipeStep: 'Cut Fruit', recipeId: 3 },
        { recipeStep: 'Eat it', recipeId: 3 },
      ]);
    });
};
