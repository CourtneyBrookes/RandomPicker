const foods = [
    'Pizza',
    'Burger',
    'Sushi',
    'Tacos',
    'Pasta',
    'Salad',
    'Ice Cream',
    'Steak',
    'Chicken Curry',
    'Sandwich'
];

document.getElementById('pickButton').addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * foods.length);
    const randomFood = foods[randomIndex];
    document.getElementById('foodResult').textContent = `You should have: ${randomFood}!`;
});

