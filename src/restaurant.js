const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // create and append image  
    const image = document.createElement('img');
    image.src = "https://www.peninsula.com/-/media/images/paris/new/dining/loiseau-blanc/ppr-oiseau-blanc-interior-evening-1074/ppr-oiseaublanc.png?mw=987&hash=58953560C2A423F8B8D6B9EE0D7271CC";
    image.alt = "paris";
    image.height = '300';
    pageContent.appendChild(image);

    // create and append headline 
    const headline = document.createElement('h1');
    headline.textContent = 'Finest in Paris';
    pageContent.appendChild(headline);

    // create and append copy 
    const copy = document.createElement('p');
    copy.textContent = '"The most fascinatingly tasty spot for a tummy-filling encounter in France!" -Raphaël';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;