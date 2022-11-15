# TODO API

### **_DÉROULEMENT_**

- Présentation du test et discussion (10-15min) 

- Travail personnel (1h)

- Restitution (10min) 

- Discussion (20-30min) 


### **_PROBLÈME_**

Coder une API de todo qui permet d’ajouter, de récupérer toutes les todos, de récupérer une todo spécifique, de modifier une todo et de supprimer une todo.

Ainsi que quelques fonctionnalités supplémentaires.

### **_PARTIE I_**

Le projet contient déjà une route pour lister toutes les todos et une route pour ajouter une nouvelle todo, mais le code n’est pas conforme au best practice de développement.

Vous retravaillerez ce code pour le rendre :  

- Compréhensible par un développeur rejoignant le projet.

- Facilement maintenable.

> Pour cela libre à vous d’utiliser les méthodes et outils de votre choix.

### **_PARTIE II_**

1. Ajouter les routes:
   - Récupérer une todo spécifique via l’id
   - Modifier une todo
   - Supprimer une todo

2. Prouver par les moyens de votre choix que vos routes fonctionnent.

#### `BONUS I`
Ajouter des tags à l’objet todo et la possibilité de filtrer la liste de todos.

#### `BONUS II`
Créer une route pour insérer plusieurs todos en un appel.

#### `BONUS  III`
Quelle(s) fonctionnalité(s) ajouteriez-vous à cette API?  
Si vous avez le temps, codez-la. 

<br/><br/>

# Repo informations

### **_Available Scripts_**

In the project directory, you can run:
- `npm transpile` (Will compile the typescript code in JS)
- `npm start` (Runs the api server, you need to transpile before you start.)
    - Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
- `npm test` (Launches the tests)

### **_Available Endpoints_**

- ```GET http://localhost:8000/health``` (Will give you the status of the api.)
- ```GET http://localhost:8000/todo``` (Will give you the list of todo in memory)
- ```POST http://localhost:8000/todo``` (Will add a todo.)
  - body: 
    - ``` {"value": "Test a todo"} ```

