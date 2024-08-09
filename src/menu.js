export default function displayMenu() {
    const container = document.createElement('div');

    const header = document.createElement('h1');
    header.textContent = 'Menu';
    container.appendChild(header);

    const header2 = document.createElement('h2');
    header2.textContent = "Steakfrites"
    container.appendChild(header2);

    const para = document.createElement('p');
    para.textContent = "Steak frites, meaning 'steak [and] fries' in French, is a dish consisting of steak paired with French fries. It is commonly served in European brasseries, and is considered by some to be the national dish of Belgium, which is the place of its invention.";
    container.appendChild(para);

    const header3 = document.createElement('h2');
    header3.textContent = "Lamb Souvlaki";
    container.appendChild(header3);

    const para2 = document.createElement('p');
    para2.textContent = "Souvlaki is the Greek meat dish that means skewer. The specialty consists of lamb chunks that have been marinated in a mixture of oil, lemon juice, oregano and seasonings before being skewered and grilled. Some souvlakia skewers also include chunks of vegetables such as green pepper or onion.";
    container.appendChild(para2);

    const header4 = document.createElement('h2')
    header4.textContent = "Moules Frites";
    container.appendChild(header4);

    const para3 = document.createElement('p');
    para3.textContent = "Moules-frites or moules et frites is a main dish of mussels and French fries originating in Northern France and Belgium. The title of the dish is French, moules meaning mussels and frites fries, with the Dutch name for the dish meaning the same.";
    container.appendChild(para3);

    
    return container;
}