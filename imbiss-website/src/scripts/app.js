// Kategorien und Gerichte
const menu = {
	Burger: [
		{ name: 'Cheeseburger', desc: 'Saftiger Rindfleischburger mit Käse', price: '5,50€' },
		{ name: 'Hamburger', desc: 'Klassischer Burger mit Salat und Tomate', price: '5,00€' },
		{ name: 'Chickenburger', desc: 'Knuspriges Hähnchenfilet im Bun', price: '5,50€' }
	],
	Döner: [
		{ name: 'Döner Classic', desc: 'Mit Salat, Tomate, Zwiebeln', price: '6,00€' },
		{ name: 'Döner Box', desc: 'Fleisch mit Pommes', price: '6,50€' },
		{ name: 'Vegetarischer Döner', desc: 'Mit Falafel und Gemüse', price: '6,00€' },
		{ name: 'veganer Döner', desc: 'Mit Gemüse', price: '6,00€' }
	],
	Getränke: [
		{ name: 'Cola', desc: '0,33l', price: '2,00€' },
		{ name: 'Wasser', desc: '0,5l', price: '1,50€' },
		{ name: 'Ayran', desc: 'Joghurtgetränk', price: '2,00€' },
	]
};

const categoryList = document.getElementById('category-list');
const dishesDiv = document.getElementById('dishes');

function showCategories() {
	categoryList.innerHTML = '';
	Object.keys(menu).forEach((cat, idx) => {
		const li = document.createElement('li');
		li.textContent = cat;
		li.onclick = () => showDishes(cat, li);
		if (idx === 0) li.classList.add('active');
		categoryList.appendChild(li);
	});
}

function showDishes(category, activeLi) {
	// Kategorie hervorheben
	Array.from(categoryList.children).forEach(li => li.classList.remove('active'));
	if (activeLi) activeLi.classList.add('active');

	const dishes = menu[category];
	dishesDiv.innerHTML = '';
	dishes.forEach(dish => {
		const card = document.createElement('div');
		card.className = 'dish-card';
		card.innerHTML = `<h3>${dish.name}</h3><p>${dish.desc}</p><p><strong>${dish.price}</strong></p>`;
		dishesDiv.appendChild(card);
	});
}

// Initial anzeigen
showCategories();
showDishes(Object.keys(menu)[0], categoryList.children[0]);
// This file is intentionally left blank.