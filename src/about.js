export default function displayAbout() {
    const container = document.createElement('div');

    const header = document.createElement('h1');
    header.textContent = 'About';
    container.appendChild(header);

    const header2 = document.createElement('h2');
    header2.textContent = "Our Story"
    container.appendChild(header2);

    const para = document.createElement('p');
    para.textContent = "Ce restaurant reconnu internationalement était l'œuvre du chef Auguste Gusteau. Malheureusement, le critique culinaire Anton Ego lui fait perdre une étoile après une critique assassine. Gusteau meurt peu de temps après. Le restaurant, repris par son sous-chef Skinner, perd encore une étoile après le décès du chef. Alfredo Linguini est embauché deux ans après la mort du chef. Avec l'aide de Rémy, il passe de plongeur à cuisinier. Leur cuisine fait à nouveau rayonner le restaurant qui suscite à nouveau l'attention du public. La mère de Linguini apprend à Skinner que le jeune homme est le fils de l'ancien propriétaire. Après avoir tenté en vain de cacher ce secret, Skinner est renvoyé et Linguini devient le nouveau propriétaire.";
    container.appendChild(para);


    
    return container;
}