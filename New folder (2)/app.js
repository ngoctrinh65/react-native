const express = require('express');
const cors = require('cors'); // Add this line

const app = express();
const port = 3000;

app.use(cors()); // Add this line to enable CORS
app.use(express.static('public'));
// Sử dụng require để nhập dữ liệu từ file data.js
const { categories, sizes, recipes, getCategoryById, getCategoryName, getRecipes, getNumberOfRecipes, getRecipesByCategoryName, getRecipesByRecipeName } = require('./data');

// Endpoint để trả về dữ liệu categories
app.get('/api/categories', (req, res) => {
    res.json(categories);
});

// Endpoint để trả về dữ liệu sizes
app.get('/api/sizes', (req, res) => {
    res.json(sizes);
});

// Endpoint để trả về dữ liệu recipes
app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});

// Endpoint để trả về dữ liệu theo categoryId
app.get('/api/category/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    const category = getCategoryById(categoryId);
    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ error: 'Category not found' });
    }
});

// Endpoint để trả về số lượng recipes theo categoryId
app.get('/api/recipes/count/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    const count = getNumberOfRecipes(categoryId);
    res.json({ count });
});

// Endpoint để trả về danh sách recipes theo categoryId
app.get('/api/recipes/category/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    const recipesByCategory = getRecipes(categoryId);
    res.json(recipesByCategory);
});

// Endpoint để trả về danh sách recipes theo tên category
app.get('/api/recipes/category/name/:categoryName', (req, res) => {
    const categoryName = req.params.categoryName;
    const recipesByCategoryName = getRecipesByCategoryName(categoryName);
    res.json(recipesByCategoryName);
});

// Endpoint để trả về danh sách recipes theo tên recipe
app.get('/api/recipes/name/:recipeName', (req, res) => {
    const recipeName = req.params.recipeName;
    const recipesByRecipeName = getRecipesByRecipeName(recipeName);
    res.json(recipesByRecipeName);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
