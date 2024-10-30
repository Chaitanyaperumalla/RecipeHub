// Function to create cards from the JSON data
function createCards(data) {
  const container = document.getElementById('cards-container');

  data.forEach(item => {
    const meal = item.data;

    // Create card element
    const card = document.createElement('div');
    card.className = "bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-95";
    
    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="text-xl font-semibold mb-2">${meal.strMeal}</h2>
        <p class="text-gray-600 mb-4">${meal.strInstructions.slice(0, 100)}...</p>
        <a href="${meal.strSource}" class="text-blue-500 hover:underline">View Recipe</a>
      </div>
    `;

    // Append card to the container
    container.appendChild(card);
  });
}

// Fetch the data from data.json
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    createCards(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
