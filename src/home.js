export default function displayHome() {
    const container = document.createElement('div');

    const header = document.createElement('h1');
    header.textContent = 'Chez Zidane';
    container.appendChild(header);

    const header2 = document.createElement('h2');
    header2.textContent = "The best of France"
    container.appendChild(header2);

    const para = document.createElement('h3');
    para.textContent = "Zinedine Zidane, acclamé comme l'athlète sportif par excellence, symbolise le succès de la nation Francaise postmoderne, la nouvelle France plurielle. A travers ce travail, j’interroge l’image de Zidane par le biais d’une analyse critique de la couverture de presse concernant l’infâme coup de tête qui a eu lieu lors du match final de la Coupe du Monde de Football durant l’été de 2006. En cartographiant la couverture de presse, je focalise sur la « chute » et la « redemption » de Zidane en attirant l’attention sur le discours racialisé qui a été utilisé pour définir et faire suivre des explications particulières de l’événement."
    container.appendChild(para);


    
    return container;
}
