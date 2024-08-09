export default function displayMenu() {
    const container = document.createElement('div');

    const header = document.createElement('h1');
    header.textContent = 'Menu';
    container.appendChild(header);

    const header2 = document.createElement('h2');
    header2.textContent = "Steakfrites"
    container.appendChild(header2);

    const para = document.createElement('h3');
    para.textContent = "Steak frites, meaning 'steak [and] fries' in French, is a dish consisting of steak paired with French fries. It is commonly served in European brasseries, and is considered by some to be the national dish of Belgium, which is the place of its invention.";
    container.appendChild(para);


    
    return container;
}