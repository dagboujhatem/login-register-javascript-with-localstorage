

function inscription(event) {
    
    // bloquer l'envoi de formulaire 
    event.preventDefault();

    // Récupération des valeurs saisies par l'utilisateur
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("mail").value;
    var password = document.getElementById("mdp").value;
    var passwordConfirmation = document.getElementById("conf").value;
    
    // Validation des champs
    errors = 0;
    if(nom === "")
    {
        document.getElementById("nom").classList.remove('is-valid');
        document.getElementById("nom").classList.add('is-invalid');
        errors++;
        // affichage le texte d'erreur
        document.getElementById("nom-error").innerText = "Le nom est obligatoire.";
    }
    else
    {
        document.getElementById("nom").classList.remove('is-invalid');
        document.getElementById("nom").classList.add('is-valid');
        // vider le message d'erreur
        document.getElementById("nom-error").innerText = "";
    }
    if(prenom === "")
    {
        document.getElementById("prenom").classList.remove('is-valid');
        document.getElementById("prenom").classList.add('is-invalid');
        errors++;
        // affichage le texte d'erreur
        document.getElementById("prenom-error").innerText = "Le prénom est obligatoire.";
    }
    else
    {
        document.getElementById("prenom").classList.remove('is-invalid');
        document.getElementById("prenom").classList.add('is-valid');
         // vider le message d'erreur
         document.getElementById("prenom-error").innerText = "";
    }
    if(email.indexOf('@') == -1)
    {
        document.getElementById("mail").classList.remove('is-valid');
        document.getElementById("mail").classList.add('is-invalid');
        errors++;
        // affichage le texte d'erreur
        document.getElementById("mail-error").innerText = "L'adresse e-mail est invalid.";
    }
    else
    {
        document.getElementById("mail").classList.remove('is-invalid');
        document.getElementById("mail").classList.add('is-valid');
         // vider le message d'erreur
         document.getElementById("mail-error").innerText = "";
    }
    if(password === "")
    {
        document.getElementById("mdp").classList.remove('is-valid');
        document.getElementById("mdp").classList.add('is-invalid');
        errors++;
        // affichage le texte d'erreur
        document.getElementById("mdp-error").innerText = "Le mot de passe est obligatoire.";
    }
    else
    {
        document.getElementById("mdp").classList.remove('is-invalid');
        document.getElementById("mdp").classList.add('is-valid');
         // vider le message d'erreur
         document.getElementById("mdp-error").innerText = "";
    }
    if(passwordConfirmation === "" || password !== passwordConfirmation)
    {
        document.getElementById("conf").classList.remove('is-valid');
        document.getElementById("conf").classList.add('is-invalid');
        errors++;
        // affichage le texte d'erreur
        document.getElementById("conf-error").innerText = "La confirmation est obligatoire, ou bien la confirmation est invalid.";
    }
    else
    {
        document.getElementById("conf").classList.remove('is-invalid');
        document.getElementById("conf").classList.add('is-valid');
         // vider le message d'erreur
         document.getElementById("conf-error").innerText = "";
    }

    if(errors>0)
    {
        return;
    }

    // Création d'un objet user 
    var user = {
        nom: nom,
        prenom: prenom,
        email: email,
        password: password
    };

    // Récupération des anciens utilisateurs (s'il existe) ou bien tableau vide
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Ajouter user to users
    users.push(user);

    // Sauvegarder users dans le localStorage
    localStorage.setItem('users', JSON.stringify(users));

    
    // Vider les champs
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("mdp").value = "";
    document.getElementById("conf").value ="";

    // Vider les classe validations (is-valid)
    document.getElementById("nom").classList.remove('is-valid');
    document.getElementById("prenom").classList.remove('is-valid');
    document.getElementById("mail").classList.remove('is-valid');
    document.getElementById("mdp").classList.remove('is-valid');
    document.getElementById("conf").classList.remove('is-valid');
}

