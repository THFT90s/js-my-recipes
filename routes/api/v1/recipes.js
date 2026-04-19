
const router = require('express').Router()
const recipes = require('../../../data/recipes.json')


// GET /api/v1/
router.get('/', (req, res) => {
  const card = recipes.map(recipe => ({
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    prepTime: recipe.prepTime,
    difficulty: recipe.difficulty
  }))

  res.json(card)
})



// GET /api/v1/recipe/:id
router.get('/recipe/:id', (req, res) => {
  const { id } = req.params
  const recipe = recipes.find(recipe => recipe.id === Number(id))

  res.json(recipe)
})


// POST /api/v1/recipe/add
router.post('/recipe/add', (req, res) => {
  const newRecipe = req.body
  newRecipe.id = recipes.length + 1
  recipes.push(newRecipe)

  res.json(newRecipe)
})

module.exports = router