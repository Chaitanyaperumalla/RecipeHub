# RecipeHub: A Dynamic Recipe Display Web Application

## Abstract
RecipeHub is a web application that dynamically displays recipes from a JSON dataset using a modern UI. The app utilizes Tailwind CSS for styling and vanilla JavaScript for functionality. It features a responsive card-based layout to showcase recipes, with a dark mode toggle for better user experience. RecipeHub provides a seamless way to explore recipes and view details with a single click.


## Introduction
RecipeHub addresses the need for an intuitive platform to display recipe information dynamically. By leveraging JavaScript and JSON data, the app fetches and renders recipe cards on-the-fly. It ensures responsiveness and aesthetic appeal through Tailwind CSS. The dark mode toggle enhances usability, allowing users to switch themes effortlessly.


## Methodology

### 1. **Data Source**
The recipe information is stored in a JSON file (`data.json`) containing details such as:
- Recipe name (`strMeal`)
- Image URL (`strMealThumb`)
- Instructions (`strInstructions`)
- Source URL (`strSource`)

### 2. **Frontend Development**
- **HTML Structure**: A grid container (`cards-container`) acts as a placeholder for dynamically injected recipe cards.
- **CSS Styling**: Tailwind CSS is used for a visually appealing and responsive design.
- **Dark Mode**: A toggle feature allows switching between dark and light themes.

### 3. **Dynamic Card Creation**
- **JavaScript Logic**:
  - Fetches data from the JSON file.
  - Creates recipe cards with image, name, brief instructions, and a link to the full recipe.
  - Appends cards to the container.
- **Error Handling**: Ensures smooth operation by catching and displaying errors if the data fails to load.


## Key Features

1. **Dynamic Recipe Display**  
   Recipes are dynamically rendered from `data.json`, ensuring scalability and easy updates.

2. **Responsive Design**  
   The grid layout adjusts based on screen size for optimal viewing on any device.

3. **Dark Mode Toggle**  
   Users can switch between dark and light themes, with smooth transitions.

4. **Interactive UI**  
   - Hover effects on cards for better engagement.
   - Clickable links redirect users to detailed recipe sources.


## Results
RecipeHub successfully loads and displays recipes dynamically, ensuring a responsive and interactive user interface. The application is intuitive and provides easy navigation through the recipe catalog. The dark mode toggle is functional, offering a personalized user experience.

## This is the link to check
https://chaitanyaperumalla.github.io/RecipeHub/


## Conclusion
RecipeHub is a feature-rich, dynamic recipe display web application. Its modern UI, combined with the ease of data modification, makes it a practical solution for showcasing recipes. The project demonstrates the effective use of JavaScript and Tailwind CSS for building interactive and responsive web applications.

