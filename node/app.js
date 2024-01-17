const express = require('express');
const cors = require('cors'); // Add this line

const app = express();
const port = 3000;

app.use(cors()); // Add this line to enable CORS
app.use(express.static('public'));
// Sử dụng require để nhập dữ liệu từ file data.js
const { categories, sizes, recipes, users ,getCategoryById, getCategoryName, getRecipes, getNumberOfRecipes, getRecipesByCategoryName, getRecipeById } = require('./data');

// Endpoint để trả về dữ liệu categories
// Endpoint để trả về dữ liệu categories
app.get('/api/categories', (req, res) => {
    const categoriesWithImagePath = categories.map(category => ({
        id: category.id,
        name: category.name,
        img: category.img,
        imagePath: `/Category${category.img.substring(category.img.lastIndexOf('/'))}`
    }));

    res.json(categoriesWithImagePath);
});


// Endpoint để trả về dữ liệu sizes
app.get('/api/sizes', (req, res) => {
    res.json(sizes);
});

// Endpoint để trả về dữ liệu recipes
app.get('/api/recipes', (req, res) => {
    const recipesWithImagePath = recipes.map(recipe => ({
        productId: recipe.productId,
        categoryId: recipe.categoryId,
        title: recipe.title,
        img: recipe.img,
        imagePath: `/Cookies${recipe.img.substring(recipe.img.lastIndexOf('/'))}`,
        categoryName: getCategoryName(recipe.categoryId), // Include the category name
    }));
    res.json(recipesWithImagePath);
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

    // Include imagePath in the response
    const recipesWithImagePath = recipesByCategory.map(recipe => ({
        productId: recipe.productId,
        categoryId: recipe.categoryId,
        title: recipe.title,
        img: recipe.img,
        imagePath: `/Cookies${recipe.img.substring(recipe.img.lastIndexOf('/'))}`,
        categoryName: getCategoryName(recipe.categoryId), // Include the category name
    }));

    res.json(recipesWithImagePath);
});



// Endpoint để trả về danh sách recipes theo id
app.get('/api/recipes/:productId', (req, res) => {
    const productId = parseInt(req.params.productId);
    const recipe = getRecipeById(productId);

    if (recipe) {
        const recipeWithImagePath = {
            productId: recipe.productId,
            categoryId: recipe.categoryId,  
            title: recipe.title,
            price: recipe.price,
            description: recipe.description,
            img: recipe.img,
            imagePath: `/Cookies${recipe.img.substring(recipe.img.lastIndexOf('/'))}`,
            categoryName: getCategoryName(recipe.categoryId),
        };
        res.json(recipeWithImagePath);
    } else {
        res.status(404).json({ error: 'Recipe not found' });
    }
});
app.get('/api/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = users.find(user => user.id === userId);
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
});
  
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
