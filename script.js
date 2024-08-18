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

const creatureSkills = {
    "Neyon TD": "“On death” Deals 20 DMG to the enemy troop in the arena with more ATK.",
    "Neyon JK": "“On death” Gives 2 stacks of Injury to all enemies in the arena.",
    "Neyon JT": "“On death” Gives all allied troops in the arena +10 ATK and +0HP permanently.",
    "Neyon UR": "“On death” Gives +10 ATK and +10 HP to the allied hero.",
    "Neyon VG": "“On death” Gives 20 SHIELD to all friendly troops in the arena until the end of the round.",
    "Neyon VC": "“On death” Explodes and deals +30 DMG to the enemy in front.",
    "Neyon WF": "“On Death” Heals all friendly troops in the arena and the allied hero for 20 HP.",
    
    "Drogdor TD": "“After combat” Deals 20 DMG to adjacent enemy troops.",
    "Drogdor JK": "“After combat” If the enemy has a negative effect, he will do 20 DMG.",
    "Drogdor JT": "“After combat” Reduces 20 ATK of adjacent enemy troops.",
    "Drogdor UR": "“After combat” Gives himself +10 ATK and +10 HP.",
    "Drogdor VG": "“After combat” Gain +20 ATK each time he attacks the enemy hero.",
    "Drogdor VC": "“After combat” Deals 20 DMG to the enemy hero.",
    "Drogdor WF": "“After combat” Heals adjacent friendly troops for 20 HP.",
    
    "Buzz TD": "“When fighting” Leaves 2 stacks of Enfeeble (troops only).",
    "Buzz JK": "“When fighting” Every time he attacks, the enemy will receive 2 stacks of Injury.",
    "Buzz JT": "“When fighting” Leaves 2 stacks of Soul Weaken (troops only).",
    "Buzz UR": "“When fighting” Leaves 2 stacks of Favorite Meal.",
    "Buzz VG": "“When combating” Heals +20 HP when hitting the enemy.",
    "Buzz VC": "“When fighting” Leaves 2 stacks of Burn (only for heroes).",
    "Buzz WF": "“When fighting” Every time he attacks, the enemy will receive 2 stacks of Hunter's Mark.",
    
    "Flitus TD": "“On entering” Causes 20 damage to the troop in front.",
    "Flitus JK": "“On entering” Gives 3 stacks of Injury to the enemy troop on the opposite line.",
    "Flitus JT": "“Upon entering” The next allied troop in the arena gains +20 ATK and +20 HP until the end of the round.",
    "Flitus UR": "“Upon entering” Gives himself 2 stacks of Favorite Meal.",
    "Flitus VG": "“Upon entering” Gives +20 ATK to the allied hero until the end of the round.",
    "Flitus VC": "“Upon entering” Deals 40 DMG to the enemy hero.",
    "Flitus WF": "“Upon entering” Heals the allied hero for 30 HP.",
    
    "Ivur TD": "“When changing” Inflicts 10 DMG to enemy troops in the same and adjacent line.",
    "Ivur JK": "“When switching” The enemy troop on the same line will receive 3 stacks of Hunter Mark.",
    "Ivur JT": "“When changing” Adjacent troops will gain +10 АТК and +10 HP.",
    "Ivur UR": "“On Switch” Deals 20 DMG to adjacent allied troops and gains HP equal to the DMG dealt.",
    "Ivur VG": "“When changing” Gain +20 ATK and +20 HP until the end of the round.",
    "Ivur VC": "“On Switch” Deals 20 DMG to adjacent allied troops and hits the enemy hero for 20 DMG + 10 DMG per affected allied troop.",
    "Ivur WF": "“On Switch” Heals +20 HP to adjacent allied troops and the hero.",
    
    "Norpur TD": "“At the start of the round” Deals 20 DMG to the enemy troop on the center line.",
    "Norpur JK": "“At the beginning of the round” Deals 20 DMG to the strongest enemy troop.",
    "Norpur JT": "“At the start of the round” Lowers -20 ATK to the most powerful enemy troop.",
    "Norpur UR": "“At the start of the round” The enemy troop on the same line receives 2 stacks of Favorite Meal.",
    "Norpur VG": "“At the start of the round” If there is an enemy troop on the same line, heal the hero for 20 HP. If not, deal 20 DMG to the enemy hero.",
    "Norpur VC": "“At the start of the round” Gives 2 stacks of Burn to the enemy hero.",
    "Norpur WF": "“At the start of the round” Give 20 SHIELD to our hero."
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
            outputDiv.innerHTML = `<p>The combination of ingredients you have chosen does not belong to any recipe. 
            Using them will spawn a random Drogdor or Neyon.</p>`;
        }
        
          // Obtener la habilidad de la criatura generada
    const creatureSkill = creatureSkills[generatedCreature];

    // Mostrar la habilidad debajo de la imagen de la criatura
    const creatureSkillElement = document.getElementById("creature-skill");
    creatureSkillElement.innerText = creatureSkill;

    // Mostrar el contenedor de la criatura y su habilidad (en caso de que esté oculto)
    document.getElementById("creature-container").style.display = "block";
         
    });

    const excludedIngredients = ["Fenix_Flower", "Star_Dust", "Dragon_Scale"];
    const filteredIngredients = ingredients.filter(ingr => !excludedIngredients.includes(ingr));
    
    // Function to generate a combination of 4 unique ingredients
    function generateRandomCombination() {
        let randomCombination = [];
        while (randomCombination.length < 4) {
            const randomIngr = filteredIngredients[Math.floor(Math.random() * filteredIngredients.length)];
            if (!randomCombination.includes(randomIngr)) {
                randomCombination.push(randomIngr);
            }
        }
        return randomCombination;
    }

    // Function to check if a combination exists in recetasCriaturas
    function isCombinationInRecetas(combination) {
        const sortedCombo = combination.slice().sort().toString();
        return Object.values(recetasCriaturas).some(receta => 
            receta.slice().sort().toString() === sortedCombo
        );
    }

    // Generate a random combination that is not in recetasCriaturas
    function generateValidRandomCombination() {
        let combination;
        do {
            combination = generateRandomCombination();
        } while (isCombinationInRecetas(combination));
        return combination;
    }

    // Generate a random combination and display it
    document.getElementById('generate-random').addEventListener('click', () => {
        const randomCombination = generateValidRandomCombination();
        selectedIngredients = randomCombination;

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

    // Close the modal and reset program
    document.querySelector('.close').addEventListener('click', () => {
        const modal = document.getElementById('randomModal');
        modal.style.display = "none";
        resetProgram();
    });

    // Close modal if clicked outside of content
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('randomModal');
        if (event.target == modal) {
            modal.style.display = "none";
            resetProgram();
        }
     });
    
    // Abrir el modal de Info Skills
document.getElementById('info-skills').addEventListener('click', () => {
    const modal = document.getElementById('infoSkillsModal');
    modal.style.display = "block";
});

// Cerrar el modal cuando se haga clic en la "X"
document.querySelector('.close-skills').addEventListener('click', () => {
    const modal = document.getElementById('infoSkillsModal');
    modal.style.display = "none";
});

// Cerrar el modal cuando se haga clic fuera del contenido del modal
window.addEventListener('click', (event) => {
    const modal = document.getElementById('infoSkillsModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

    // Reset all selections
    function resetProgram() {
        selectedIngredients = [];
        updateSelectedIngredients();
        document.getElementById('creature-output').innerHTML = '';
    }

    // Reset all selections
    document.getElementById('reset').addEventListener('click', () => {
        resetProgram();
    });
});
