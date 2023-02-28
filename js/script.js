/*
Méthodologie :
- créer une version statique (fausses données, et on ne gère pas les actions de
  l'utilisation clic etc)
  - étape 1 : découper en blocs => imaginer des rectangles pour découper l'interface
  - étape 2 : écrire le code de chacun des blocs, HTML + CSS
- dynamiser : utiliser des vraies données, gérer les interactions utilisateur, ...
*/

/* Plan d'action pour le bonus
x ajouter un deuxième sélecteur
x afficher dans les résultats la spécialité
- filtrage initial et quand le deuxième sélecteur change
*/

const app = {
  // tous les profs disponibles
  data: [
    {
      name: 'Loris',
      language: 'PHP',
      speciality: 'WordPress',
    },
    {
      name: 'Jean',
      language: 'JavaScript',
      speciality: 'Data',
    },
    {
      name: 'Jean-Christophe',
      language: 'PHP',
      speciality: 'Symfony',
    },
    {
      name: 'Jean-Philippe',
      language: 'PHP',
      speciality: 'Symfony',
    },
    {
      name: 'Julien',
      language: 'PHP',
      speciality: 'React',
    },
    {
      name: 'Vincent',
      language: 'JavaScript',
      speciality: 'React',
    },
    {
      name: 'Tony',
      language: 'JavaScript',
      speciality: 'React',
    },
  ],
  init: function() {
    // on récupère le conteneur, qui servira pour chacun des blocs
    app.container = document.querySelector('#app');

    // 3 blocs : formulaire, compteur, résultats
    app.createForm();
    app.createCounter();
    app.createResults();
  },

  // création du formulaire (sélecteur(s))
  createForm: function() {
    // form
    const formElement = document.createElement("form");
    app.container.append(formElement);

    // --- sélecteur pour le socle
    const selectElement = document.createElement("select");
    // on donne une valeur à l'attribut "class" du select
    selectElement.className = "search-choices";
    // on ajoute une classe à celles déjà présentes => dans notre cas ça revient au même
    // selectElement.classList.add("search-choices");

    const option1 = document.createElement('option');
    option1.text = "PHP";
    selectElement.append(option1);

    const option2 = document.createElement('option');
    option2.textContent = "JavaScript";
    selectElement.append(option2);

    formElement.append(selectElement);

    // prévoir d'adapter l'affichage si la valeur change
    selectElement.addEventListener('change', app.handleSelectChange);

    // --- sélecteur pour la spécialité
    const selectElementSpecialty = document.createElement("select");
    selectElementSpecialty.className = "search-choices";
    app.createSpeOption(selectElementSpecialty, 'React');
    app.createSpeOption(selectElementSpecialty, 'Data');
    app.createSpeOption(selectElementSpecialty, 'WordPress');
    app.createSpeOption(selectElementSpecialty, 'Symfony');

    app.container.append(selectElementSpecialty);
  },
  
  // créer une option pour le sélecteur des spécialités :
  // - selectElement L'élément dans lequel on veut ajouter une option
  // - text Le texte pour la nouvelle option
  createSpeOption(selectElement, text) {
    const option = document.createElement('option');
    option.textContent = text;
    selectElement.appendChild(option);
  },

  // création du compteur
  createCounter: function() {
    const counterElement = document.createElement("p");
    counterElement.id = 'counter';
    
    counterElement.textContent = "- profs trouvés";
    app.container.append(counterElement);
  },

  // création des résultats
  createResults: function() {
    const ulElement = document.createElement("ul");
    ulElement.id = "results";

    // pour chaque résultat :
    // - créer un li
    // - textContent : nom du prof, et aussi un "tag" qui précise le langage (span)
    // - ajouter le li dans le ul

    // filtrer app.data en fonction du langage (PHP) et de la spécialité (React), et afficher les vrais résultats
    const results = app.data.filter((item) => item.language === "PHP" && item.speciality === 'React');

    results.forEach((item) => {
      const result = document.createElement("li");
      result.className = "list-item";
 
      // tag pour le langage du socle
      const tag = document.createElement("span");
      tag.className = "list-tag";
      tag.textContent = item.language;

      // tag pour la spécialité
      const tagSpecialty = document.createElement("span");
      tagSpecialty.className = "list-tag";
      tagSpecialty.textContent = item.speciality;

      result.textContent = item.name;
      result.append(tag);
      result.append(tagSpecialty);

      ulElement.append(result);
    });

    app.container.append(ulElement);

    // on veut mettre à jour le compteur avec le bon nombre de résultats
    // une possibilité parmi d'autres : on compte les li qui ont la classe CSS list-item
    const currentLiList = document.querySelectorAll('li.list-item');

    const counterElement = document.querySelector('#counter');
    counterElement.textContent = `${currentLiList.length} profs trouvés`;

    // autre possibilité : utiliser results.length
    // const counterElement = document.querySelector('#counter');
    // counterElement.textContent = `${results.length} profs trouvés`;
  },

  // handler appelé quand le sélecteur de langage change de valeur
  handleSelectChange: function(event) {
    // console.log(`changement, nouvelle valeur = ${event.currentTarget.value}`);
    const newValue = event.currentTarget.value;

    // refaire le filtrage des profs avec la nouvelle valeur, mettre à jour le résultat
    app.updateResults(newValue);
  },

  // mettre à jour les résultats
  updateResults: function(newValue) {
    const results = app.data.filter((item) => item.language === newValue);

    /*
    - il faut récupérer le ul
    - il faut vider le ul
    */
   const ulElement = document.querySelector('#results');
   // on remet à zéro le contenu HTML du ul
   /*
    - textContent : contenu texte d'un élément (sans balises HTML)
    - innerHTML : contenu sous forme de HTML => les balises seront interprétées
    (au lieu de innerHTML on peut aussi utiliser createElement ou removeAllChildNodes)

    - value : l'attribut "value" de l'élément (cas des input, option, etc)
   */
   ulElement.innerHTML = "";

  results.forEach((item) => {
    const result = document.createElement("li");
    result.className = "list-item";

    const tag = document.createElement("span");
    tag.className = "list-tag";
    tag.textContent = item.language;

    result.textContent = item.name;
    result.append(tag);

    ulElement.append(result);
  });

  // on adapte le compteur
  const counterElement = document.querySelector('#counter');
  counterElement.textContent = `${results.length} profs trouvés`;
  }
};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);
