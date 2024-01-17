 const categories = [
    {
      id: 3,
      name: 'Cookies',
      img:
      './Category/Cookies.webp'
    },
    {
      id: 1,
      name: 'Mexican Food',
      img: './Category/Mexican.webp'
    },
    {
      id: 2,
      name: 'Italian Food',
      img: './Category/Italian.jpg'
    },
    {
      id: 4,
      name: 'Smoothies',
      img: './Category/Smoothies.jpg'

    },
  
  ];
   const sizes = [
    {
      id: 0,
      name: 'Small',
    },
    {
      id: 1,
      name: 'Medium',
    },
    {
      id: 2,
      name: 'Large',
    },
    // Thêm kích thước khác nếu cần thiết
  ];
   const recipes = [
    {
      productId: 122,
      categoryId: 3,
      title: 'Oatmeal Cookies',
      img: './Cookies/banh-cookies-so-co-la-den-sieu-xốp-nhẹ-recipe-main-photo.webp',
      
      price: '15',
      description:
        '-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.'
    },
    {
      productId: 3,
      categoryId: 4,
      title: 'Triple Berry Smoothie',
      img: './Cookies/cookies-Pecan.webp',
      
      price: '10',
     
      description: 'In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.'
    },
    {
      productId: 2,
      categoryId: 3,
      title: 'Vegan Cookies',
      img: './Cookies/oreo-red-velvet-cookies-recipe-main-photo.webp',
     
      price: '30',
    
      description:
        '-- Beat the egg and then combine it with water in a bowl. Stir. Combine the flour, salt, MSG, pepper, onion powder and garlic powder in a gallon size zip lock bag. Pound each of the breast filets until about 1/4-inch thick. Then cut into bite sized pieces. Coat each piece with the flour mixture by shaking in the zip lock bag. Remove and coat in the egg mixture. Then coat in the flour mixture again. Shake to coat. Deep fry at 375 degrees for 10-12 minutes, until browned and crispy.'
    },
    {
      productId: 3,
      categoryId: 3,
      title: 'Pumpkin Spice Cookies',
      img: './Cookies/oreo-red-velvet-cookies-recipe-main-photo.webp',
     
      price: '45',
     
      description:
        '-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps'
    },
    {
      productId: 1,
      categoryId: 3,
      title: 'Brownies',
      img: './Cookies/oreo-red-velvet-cookies-recipe-main-photo.webp',
     
      price: '30',
      
      description:
        '-- Preheat fryer to 350°F. Thoroughly mix together all spices. Combine spices with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken.\n\n -- Repeat with all the chicken pieces. Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit. Fry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F. Let chicken drain on a few paper towels when it comes out of the fryer. Serve hot.'
    },
    {
      productId: 4,
      categoryId: 1,
      title: 'Perfect Fish Tacos',
      img: './Cookies/oreo-red-velvet-cookies-recipe-main-photo.webp',
      
      price: '35',
      description:
        '-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. '
    },
    {
      productId: 5,
      categoryId: 1,
      title: 'Chicken Fajitas',
  
      img: './Cookies/oreo-red-velvet-cookies-recipe-main-photo.webp',
      
      price: 35,
      
      description:
        '-- In a large bowl, combine 2 tablespoons oil, lemon juice and seasonings; add the chicken. Turn to coat; cover. Refrigerate for 1-4 hours In a large skillet, saute peppers and onions in remaining oil until crisp-tender. Remove and keep warm. Drain chicken, discarding marinade. In the same skillet, cook chicken over medium-high heat for 5-6 minutes or until no longer pink.\n\n -- Return pepper mixture to pan; heat through. Spoon filling down the center of tortillas; fold in half. Serve with toppings as desired.'
    },
   ];
   const users = [
    {
      id: 1,
      username: "1",
      password: "1",
    },
    {
      id: 2,
      username: "user2",
      password: "password2",
    },
    // Các đối tượng người dùng khác có thể được thêm vào đây
  ];

   function getCategoryById(categoryId) {
    let category;
    categories.map(data => {
      if (data.id == categoryId) {
        category = data;
      }
    });
    return category;
  }
  
   function getCategoryName(categoryId) {
    let name;
    categories.map(data => {
      if (data.id == categoryId) {
        name = data.name;
      }
    });
    return name;
  }
  
   function getRecipes(categoryId) {
    const recipesArray = [];
    recipes.map(data => {
      if (data.categoryId == categoryId) {
        recipesArray.push(data);
      }
    });
    return recipesArray;
  }
  
  // modifica
  
   function getNumberOfRecipes(categoryId) {
    let count = 0;
    recipes.map(data => {
      if (data.categoryId == categoryId) {
        count++;
      }
    });
    return count;
  }
  
   function getRecipesByCategoryName(categoryName) {
    const nameUpper = categoryName.toUpperCase();
    const recipesArray = [];
    categories.map(data => {
      if (data.name.toUpperCase().includes(nameUpper)) {
        const recipes = getRecipes(data.id); // return a vector of recipes
        recipes.map(item => {
          recipesArray.push(item);
        });
      }
    });
    return recipesArray;
  }
  
  function getRecipeById(productId) {
    return recipes.find(recipe => recipe.productId === productId);
}
  module.exports = {
    categories,
    sizes,
    recipes,
    users,
    getCategoryById,
    getCategoryName,
    getRecipes,
    getNumberOfRecipes,
    getRecipesByCategoryName,
    getRecipeById,
  };