function login(event){
   // bloquer l'envoi de formulaire 
   event.preventDefault();

   // Récupération des valeurs saisies par l'utilisateur

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Validation des champs
    errors = 0;
    if(email.indexOf('@') == -1)
    {
        document.getElementById("email").classList.remove('is-valid');
        document.getElementById("email").classList.add('is-invalid');
        errors++;
        // affichage le texte d'erreur
        document.getElementById("email-error").innerText = "L'adresse e-mail est invalid.";
    }
    else
    {
        document.getElementById("email").classList.remove('is-invalid');
        document.getElementById("email").classList.add('is-valid');
         // vider le message d'erreur
         document.getElementById("email-error").innerText = "";
    }
    if(password === "")
    {
        document.getElementById("password").classList.remove('is-valid');
        document.getElementById("password").classList.add('is-invalid');
        errors++;
        // affichage le texte d'erreur
        document.getElementById("password-error").innerText = "Le mot de passe est obligatoire.";
    }
    else
    {
        document.getElementById("password").classList.remove('is-invalid');
        document.getElementById("password").classList.add('is-valid');
         // vider le message d'erreur
         document.getElementById("password-error").innerText = "";
    }
    
    if(errors>0)
    {
        return;
    }

    // Récupération des anciens utilisateurs (s'il existe) ou bien tableau vide
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Trouver dans le tableau 'users' s'il y a un utilisateur (user object) 
    // ayant le même e-mail et la même mot de passe

    var userFound = users.find(user=> user.email === email && user.password === password);

    // Tester si l'utilisateur n'égale pas undefined
    // pour plus d'infos, visiter ce lien : 

    if(userFound !== undefined)
    {

        // Sauvegarder l'utilisateur dans le localStorage 
        localStorage.setItem('connected-user', JSON.stringify(userFound));

        // Redirection to dashboard
        window.location.href = "dashboard.html";
    }
    else{
        alert("Vérifier votre e-mail ou mot de passe.")
    }

}
