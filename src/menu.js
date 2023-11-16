const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    
    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    const menuItem1Img = document.createElement('img');
    menuItem1.textContent = 'tarte tatin';
    menuItem1Img.src = 'https://media.vogue.fr/photos/5ca1ffec3d44a0ca8acc067f/master/pass/Au%20Petit%20Tonneau.png';
    menuItem1Img.alt = 'tarte tatin';
    menuItem1Img.height = 100;

    const menuItem2 = document.createElement('li');
    const menuItem2Img = document.createElement('img');
    menuItem2.textContent = 'escargot';
    menuItem2Img.src = 'https://media-cdn.tripadvisor.com/media/photo-s/17/47/9e/6d/photo7jpg.jpg';
    menuItem2Img.alt = 'escargot';
    menuItem2Img.height = 100;

    const menuItem3 = document.createElement('li');
    const menuItem3Img = document.createElement('img');
    menuItem3.textContent = 'ratatouille';
    menuItem3Img.src = 'https://www.belledeprovence.com/cdn/shop/articles/amirali-mirhashemian-R02KgL5Ti3Y-unsplash_1200x904.jpg?v=1647567009';
    menuItem3Img.alt = 'ratatouille';
    menuItem3Img.height = 100;

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem1Img);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem2Img);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem3Img);
    
    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
}

export default createMenuPage;