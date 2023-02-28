/*
programmation impérative : on stocke les données directement dans le DOM. Pas
pratique pour ajouter des fonctionnalités.

programmation déclarative :
  - une seule source de vérité : les données (state)
  - quand on veut changer quelque chose sur l'affichage : on modifie les données,
  pas directement le DOM, on reconstruit complètement l'affichage à partir des
  données (donc pas d'état intermédiaire à gérer)

=> on indique comment doit être l'affichage par rapport au state, et la machine va gérer les
mises à jour de l'affichage

Avantages et inconvénients :
  - impératif : on met à jour dans le DOM seulement ce qui a changé MAIS peu évolutif (bugs quand on rajoute des fonctionnalités)
  - déclaratif : évolutif (facile d'ajouter des nouvelles fonctionnalités sans tout
  casser) MAIS on recharge tout le DOM à chaque changement de données (bof pour les
  performances)

Et si on pouvait avoir à la fois quelque chose de facile à faire évoluer, et de 
performant (mettre à jour dans le DOM seulement ce qui a changé) ? => React

React utilise de la programmation déclarative, et il utilise un DOM virtuel qui lui
permet de mettre à jour dans le DOM réel seulement ce qui a changé.
*/
const app = {
  data: [
    {
      name: 'ma visiotec',
      step: 'préparation',
      skill: 'Mise en place de l\'environnement',
      tool1: 'Virtual Box',
      tool2: 'Linux Ubuntu',
      tool3: 'VS Code',
    },
    {
      name: 'ma visiotec',
      step: 'Conception',
      skill: 'Rédaction d\'un cahier des charges',
      tool1: 'Google Doc',
      tool2: 'Discord',
      tool3: 'Slack',
    },
    {
      name: 'ma visiotec',
      step: 'Conception',
      skill: 'Rédaction de user stories',
      tool1: 'Discord',
      tool2: 'Trello',
      tool3: 'Slack',
    },
    {
      name: 'ma visiotec',
      step: 'Conception',
      skill: 'Maquettage de wireframes',
      tool1: 'Whimsical.com',
      tool2: 'Discord',
      tool3: 'Slack',
    },
    {
      name: 'ma visiotec',
      step: 'Conception',
      skill: 'Modélisation du MCD',
      tool1: 'Mocodo.net',
      tool2: 'Discord',
      tool3: 'Slack',
    },
    {
      name: 'ma visiotec',
      step: 'Mise en oeuvre',
      skill: 'Coder un Back-end',
      tool1: 'PHP/Symfony',
      tool2: 'Doctrine',
      tool3: 'VS Code',
    },
    {
      name: 'ma visiotec',
      step: 'Mise en oeuvre',
      skill: 'Coder un Back-office',
      tool1: 'PHP/Symfony',
      tool2: 'Twig',
      tool3: 'VS Code',
    },
    {
      name: 'ma visiotec',
      step: 'Mise en oeuvre',
      skill: 'Management (Scrum master)',
      tool1: 'Discord',
      tool2: 'Trello',
      tool3: 'Slack',
    },
    {
      name: 'ma visiotec',
      step: 'Mise en oeuvre',
      skill: 'Versionning',
      tool1: 'Github',
      tool2: 'Linux',
      tool3: 'VS Code',
    },
    {
      name: 'lescapadezen.com',
      step: 'préparation',
      skill: 'Mise en place de l\'environnement',
      tool1: 'Windows',
      tool2: 'Google Chrome',
      tool3: 'Wordpress.com',
    },
    {
      name: 'lescapadezen.com',
      step: 'préparation',
      skill: 'Trouver un client',
      tool1: 'Facebook.com',
      tool2: 'Call téléphonique',
      tool3: 'Google Doc (devis)',
    },
    {
      name: 'lescapadezen.com',
      step: 'préparation',
      skill: 'Receuil du besoin client',
      tool1: 'Facebook.com',
      tool2: 'Call téléphonique',
      tool3: 'Google Doc (devis)',
    },
    {
      name: 'lescapadezen.com',
      step: 'Conception',
      skill: 'Maquettage',
      tool1: 'Paint',
      tool2: 'Google Doc (devis)',
      tool3: 'Photoshop',
    },
    {
      name: 'lescapadezen.com',
      step: 'Mise en oeuvre',
      skill: 'Réalisation en no-code/low-code',
      tool1: 'Wordpress.com',
      tool2: 'Sirvoy.com',
      tool3: 'Vikwp.com',
    },
    {
      name: 'lescapadezen.com',
      step: 'Déploiement',
      skill: 'Déploiement',
      tool1: 'OVH.com',
      tool2: 'Wordpress.com',
      tool3: 'Stripe',
    },
    {
      name: 'Oflix',
      step: 'préparation',
      skill: 'Mise en place de l\'environnement',
      tool1: 'Virtual Box',
      tool2: 'Linux Ubuntu',
      tool3: 'VS Code',
    },
    {
      name: 'Oflix',
      step: 'Mise en oeuvre',
      skill: 'Copier-coder un back-end',
      tool1: 'PHP/Symfony',
      tool2: 'Doctrine',
      tool3: 'VS Code',
    },
    {
      name: 'Oflix',
      step: 'Mise en oeuvre',
      skill: 'Copier-coder un back-office',
      tool1: 'PHP/Symfony',
      tool2: 'Twig',
      tool3: 'VS Code',
    },
    {
      name: 'Oflix',
      step: 'Mise en oeuvre',
      skill: 'Créer et administer une base de données',
      tool1: 'PHP/Symfony',
      tool2: 'Adminer',
      tool3: 'MySQL',
    },
    {
      name: 'Oflix',
      step: 'Mise en oeuvre',
      skill: 'Versionning',
      tool1: 'VS Code',
      tool2: 'Github',
      tool3: 'Linux',
    },
    {
      name: 'Portfolio',
      step: 'préparation',
      skill: 'Mise en oeuvre',
      tool1: 'Virtual Box',
      tool2: 'Linux Ubuntu',
      tool3: 'VS Code',
    },
    {
      name: 'Portfolio',
      step: 'Mise en oeuvre',
      skill: 'Copier-coder un code similaire',
      tool1: 'VS Code',
      tool2: 'HTML',
      tool3: 'CSS',
    },
    {
      name: 'Portfolio',
      step: 'Déploiement',
      skill: 'Déploiement',
      tool1: 'Net2ftp',
      tool2: 'OVH.com',
      tool3: 'VS Code',
    },
    {
      name: 'mon CV interactif',
      step: 'préparation',
      skill: 'Mise en place de l\'environnement',
      tool1: 'Virtual Box',
      tool2: 'Linux Ubuntu',
      tool3: 'VS Code',
    },
    {
      name: 'mon CV interactif',
      step: 'Conception',
      skill: 'Maquettage',
      tool1: 'Google Doc',
      tool2: 'Paint',
      tool3: 'Whimsical.com',
    },
    {
      name: 'mon CV interactif',
      step: 'Mise en oeuvre',
      skill: 'Copier-coder un code similaire',
      tool1: 'VS Code',
      tool2: 'Javascript',
      tool3: 'Google Chrome',
    },
    {
      name: 'mon CV interactif',
      step: 'Déploiement',
      skill: 'Mise en place de l\'environnement',
      tool1: 'net2ftp',
      tool2: 'OVH.com',
      tool3: 'VS Code',
    },
  ],

  // state : les données qui pilotent l'affichage. Ici c'est la valeur sélectionnée pour le
  // langage de base et pour la spécialité
  state: {
    currentName: 'ma visiotec',
    currentStep: 'préparation',
  },
  // dessiner toute l'interface à partir du state
  createFinder: function() {
    // on commence par vider le container
    app.container.innerHTML = "";

    app.createTitle();
    app.createOrder();
    app.createForm();

    // on fait le filtrage en fonction du state
    const selectedElements = app.data.filter((item) => item.name === app.state.currentName && item.step === app.state.currentStep);

    app.createCounter(selectedElements.length);
    app.createResults(selectedElements);
  },

  init: function() {
    // on récupère le conteneur, qui servira pour chacun des blocs

    app.container = document.querySelector('#app');
    //container.insertBefore(title, null);
    // on dessine l'application pour la première fois
    app.createFinder();
  },

  createTitle: function() {
    const title = document.createElement('h1');
    const subtitle = document.createElement('h2');
    title.textContent="Le CV interactif";
    title.id="title";
    subtitle.textContent="by Pierre-Antoine Large";
    subtitle.id="subtitle";
    app.container.appendChild(title);
    app.container.appendChild(subtitle);
  },

  createOrder: function() {
    const order = document.createElement('p');
    order.textContent="Sélectionner un projet, puis une étape :";
    order.id="order";
    app.container.appendChild(order);
  },

  createForm: function() {

    const form = document.createElement('form');
    const select = document.createElement('select');
    select.className = 'search-choices';
    
    // pas de parenthèses ici
    select.addEventListener('change', app.handleResultsForName);
    // autre syntaxe : select.setAttribute('class', 'search-choices');
    app.createOption(select, 'ma visiotec', app.state.currentName);
    app.createOption(select, 'lescapadezen.com', app.state.currentName);
    app.createOption(select, 'Oflix', app.state.currentName);
    app.createOption(select, 'mon CV interactif', app.state.currentName);
    app.createOption(select, 'Portfolio', app.state.currentName);
    form.appendChild(select);

    const select2 = document.createElement('select');
    select2.className = 'search-choices';
    
    // pas de parenthèses ici
    select2.addEventListener('change', app.handleResultsForStep);
    // autre syntaxe : select.setAttribute('class', 'search-choices');
    app.createOption(select2, 'préparation', app.state.currentStep);
    app.createOption(select2, 'Conception', app.state.currentStep);
    app.createOption(select2, 'Mise en oeuvre', app.state.currentStep);
    app.createOption(select2, 'Déploiement', app.state.currentStep);

    form.appendChild(select2);
    app.container.appendChild(form);
  },

  // créer une option dans un select
  createOption(selectElement, text, selectedValue) {
    const option = document.createElement('option');
    option.textContent = text;
    if (selectedValue === text) {
      option.selected = true;
    }
    selectElement.appendChild(option);
  },

  // changement de projet
  handleResultsForName: function(event) {
    // récupérer la nouvelle valeur
    const newValue = event.target.value;
    // on met à jour le state
    app.state.currentName = newValue;

    // adapter l'affichage => tout redessiner
    app.createFinder();
  },

  // changement du step
  handleResultsForStep: function(event) {
    // récupérer la nouvelle valeur
    const newValue = event.target.value;
    app.state.currentStep = newValue;

    // adapter l'affichage => tout redessiner
    app.createFinder();
  },

  createCounter: function(nbResults) {
    const counter = document.createElement('p');
    counter.id = 'counter';
    counter.textContent = nbResults  + ' compétence(s) trouvé(s)';
    app.container.appendChild(counter);
  },

  createResults: function(selectedElements) {
    const results = document.createElement('ul');

    selectedElements.forEach((item) => {
      const result = document.createElement('ul');
      result.textContent = item.skill;
      result.className = 'list-item';
      
      const tab = document.createElement('span');
      tab.className = 'list-tag1';
      tab.textContent='                              ';

      //const resultat = document.createElement('li');
      //resultat.textContent = "";
      //resultat.className = 'list-item2';
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = item.tool1;
      tag.className = 'list-tag';
      const tagSpe = document.createElement('span');
      tagSpe.className = 'tag';
      tagSpe.textContent = item.tool2;
      tagSpe.className = 'list-tag';
      const tagS = document.createElement('span');
      tagS.className = 'tag';
      tagS.textContent = item.tool3;
      tagS.className = 'list-tag';
      //result.appendChild(div);
      results.appendChild(result);
      
      result.appendChild(tab);
      result.appendChild(tag);
      result.appendChild(tagSpe);
      result.appendChild(tagS);
      
      
      
    });
    
    app.container.appendChild(results);
  },

};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);
