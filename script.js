
document.addEventListener('DOMContentLoaded', () => {
    const ingredients = [
        "Elemental_Soul", "Quimeric_Essence", "Mandrake_Root", "Griffin_Feather", "Basilisc_Eye", 
        "Siren_Tear", "Golem_Heart", "Fenix_Flower", "Star_Dust", "Dragon_Scale"
    ];

    const recetasCriaturas = {
        "Neyon_TD": ["Siren_Tear", "Griffin_Feather", "Quimeric_Essence", "Mandrake_Root"],
        "Neyon_JK": ["Siren_Tear", "Elemental_Soul", "Quimeric_Essence", "Mandrake_Root"],
        "Neyon_JT": ["Siren_Tear", "Elemental_Soul", "Griffin_Feather", "Basilisc_Eye"],
        "Neyon_UR": ["Siren_Tear", "Elemental_Soul", "Quimeric_Essence", "Golem_Heart"],
        "Neyon_VG": ["Siren_Tear", "Mandrake_Root", "Quimeric_Essence", "Golem_Heart"],
        "Neyon_VC": ["Siren_Tear", "Elemental_Soul", "Griffin_Feather", "Golem_Heart"],
        "Neyon_WF": ["Siren_Tear", "Basilisc_Eye", "Griffin_Feather", "Golem_Heart"],
        "Drogdor_TD": ["Dragon_Scale", "Griffin_Feather", "Basilisc_Eye", "Mandrake_Root"],
        "Drogdor_JK": ["Dragon_Scale", "Griffin_Feather", "Quimeric_Essence", "Mandrake_Root"],
        "Drogdor_JT": ["Dragon_Scale", "Golem_Heart", "Basilisc_Eye", "Mandrake_Root"],
        "Drogdor_UR": ["Dragon_Scale", "Elemental_Soul", "Quimeric_Essence", "Mandrake_Root"],
        "Drogdor_VG": ["Dragon_Scale", "Basilisc_Eye", "Quimeric_Essence", "Mandrake_Root"],
        "Drogdor_VC": ["Dragon_Scale", "Griffin_Feather", "Golem_Heart", "Mandrake_Root"],
        "Drogdor_WF": ["Dragon_Scale", "Quimeric_Essence", "Golem_Heart", "Mandrake_Root"],
        "Buzz_TD": ["Mandrake_Root", "Griffin_Feather", "Quimeric_Essence", "Basilisc_Eye"],
        "Buzz_JK": ["Mandrake_Root", "Elemental_Soul", "Quimeric_Essence", "Basilisc_Eye"],
        "Buzz_JT": ["Mandrake_Root", "Elemental_Soul", "Griffin_Feather", "Basilisc_Eye"],
        "Buzz_UR": ["Mandrake_Root", "Griffin_Feather", "Golem_Heart", "Star_Dust"],
        "Buzz_VG": ["Mandrake_Root", "Quimeric_Essence", "Golem_Heart", "Basilisc_Eye"],
        "Buzz_VC": ["Mandrake_Root", "Elemental_Soul", "Griffin_Feather", "Golem_Heart"],
        "Buzz_WF": ["Mandrake_Root", "Griffin_Feather", "Golem_Heart", "Basilisc_Eye"],
        "Flitus_TD": ["Quimeric_Essence", "Griffin_Feather", "Basilisc_Eye", "Golem_Heart"],
        "Flitus_JK": ["Quimeric_Essence", "Griffin_Feather", "Basilisc_Eye", "Star_Dust"],
        "Flitus_JT": ["Quimeric_Essence", "Griffin_Feather", "Basilisc_Eye", "Siren_Tear"],
        "Flitus_UR": ["Quimeric_Essence", "Elemental_Soul", "Basilisc_Eye", "Siren_Tear"],
        "Flitus_VG": ["Quimeric_Essence", "Griffin_Feather", "Basilisc_Eye", "Elemental_Soul"],
        "Flitus_VC": ["Quimeric_Essence", "Siren_Tear", "Basilisc_Eye", "Golem_Heart"],
        "Flitus_WF": ["Quimeric_Essence", "Siren_Tear", "Basilisc_Eye", "Mandrake_Root"],
        "Ivur_TD": ["Star_Dust", "Siren_Tear", "Griffin_Feather", "Quimeric_Essence"],
        "Ivur_JK": ["Star_Dust", "Siren_Tear", "Basilisc_Eye", "Mandrake_Root"],
        "Ivur_JT": ["Star_Dust", "Siren_Tear", "Basilisc_Eye", "Quimeric_Essence"],
        "Ivur_UR": ["Star_Dust", "Siren_Tear", "Griffin_Feather", "Mandrake_Root"],
        "Ivur_VG": ["Star_Dust", "Siren_Tear", "Quimeric_Essence", "Mandrake_Root"],
        "Ivur_VC": ["Star_Dust", "Siren_Tear", "Elemental_Soul", "Mandrake_Root"],
        "Ivur_WF": ["Star_Dust", "Siren_Tear", "Golem_Heart", "Mandrake_Root"],
        "Norpur_TD": ["Fenix_Flower", "Siren_Tear", "Griffin_Feather", "Quimeric_Essence"],
        "Norpur_JK": ["Fenix_Flower", "Siren_Tear", "Basilisc_Eye", "Mandrake_Root"],
        "Norpur_JT": ["Fenix_Flower", "Siren_Tear", "Basilisc_Eye", "Quimeric_Essence"],
        "Norpur_UR": ["Fenix_Flower", "Siren_Tear", "Griffin_Feather", "Mandrake_Root"],
        "Norpur_VG": ["Fenix_Flower", "Siren_Tear", "Quimeric_Essence", "Mandrake_Root"],
        "Norpur_VC": ["Fenix_Flower", "Siren_Tear", "Elemental_Soul", "Mandrake_Root"],
        "Norpur_WF": ["Fenix_Flower", "Siren_Tear", "Golem_Heart", "Mandrake_Root"]
    };

    let selectedIngredients = [];

    // Create ingredient buttons
    const ingredientButtons = document.getElementById('ingredient-buttons');
    ingredients.forEach(ingr => {
        const img = document.createElement('img');
        img.src = `images/${ingr}.png`;
        img.alt = ingr;
        img.addEventListener('click', () => toggleIngredient(ingr));
        ingredientButtons.appendChild(img);
    });

    // Toggle ingredient selection
    function toggleIngredient(ingr) {
        const index = selectedIngredients.indexOf(ingr);
        if (index > -1) {
            selectedIngredients.splice(index, 1);
        } else if (selectedIngredients.length < 4) {
            selectedIngredients.push(ingr);
        }
        updateSelectedIngredients();
    }

    // Update selected ingredients list
    function updateSelectedIngredients() {
        const selectedList = document.getElementById('selected-ingredients');
        selectedList.innerHTML = '';
        selectedIngredients.forEach(ingr => {
            const li = document.createElement('li');
            li.textContent = ingr.replace(/_/g, ' ');
            selectedList.appendChild(li);
        });

        const imgs = document.querySelectorAll('#ingredient-buttons img');
        imgs.forEach(img => {
            img.classList.remove('selected');
            if (selectedIngredients.includes(img.alt)) {
                img.classList.add('selected');
            }
        });
    }

    // Generate creature based on selected ingredients
    document.getElementById('generate-creature').addEventListener('click', () => {
        const selectedSet = new Set(selectedIngredients);
        const creature = Object.keys(recetasCriaturas).find(criatura =>
            recetasCriaturas[criatura].every(ingr => selectedSet.has(ingr)) &&
            recetasCriaturas[criatura].length === selectedSet.size
        );

        const outputDiv = document.getElementById('creature-output');
        if (creature) {
            outputDiv.innerHTML = `<h2>Generated Creature: ${creature.replace(/_/g, ' ')}</h2>
                                   <img src="images/${creature}.png" alt="${creature}">`;
        } else {
            outputDiv.innerHTML = `<p>The combination of ingredients you have chosen does not belong to any recipe. Using them will spawn a random Drogdor or Neyon.</p>`;
        }
    });

    // Generate a random combination of ingredients excluding specific ones
    document.getElementById('generate-random').addEventListener('click', () => {
        const excludedIngredients = ["Fenix_Flower", "Star_Dust", "Dragon_Scale"];
        const filteredIngredients = ingredients.filter(ingr => !excludedIngredients.includes(ingr));

        let randomCombination = [];
        while (randomCombination.length < 4) {
            const randomIngr = filteredIngredients[Math.floor(Math.random() * filteredIngredients.length)];
            if (!randomCombination.includes(randomIngr)) {
                randomCombination.push(randomIngr);
            }
        }

        selectedIngredients = randomCombination;
        updateSelectedIngredients();

        // Display the modal with random ingredients
        const modal = document.getElementById('randomModal');
        const randomIngredientsDiv = document.getElementById('random-ingredients');
        randomIngredientsDiv.innerHTML = '';

        randomCombination.forEach(ingr => {
            const img = document.createElement('img');
            img.src = `images/${ingr}.png`;
            img.alt = ingr;
            randomIngredientsDiv.appendChild(img);
        });

        modal.style.display = "block";
    });

    // Close the modal
    document.querySelector('.close').addEventListener('click', () => {
        const modal = document.getElementById('randomModal');
        modal.style.display = "none";
    });

    // Close modal if clicked outside of content
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('randomModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Reset all selections
    document.getElementById('reset').addEventListener('click', () => {
        selectedIngredients = [];
        updateSelectedIngredients();
        document.getElementById('creature-output').innerHTML = '';
    });
});
