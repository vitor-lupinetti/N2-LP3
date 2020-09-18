function buildAnchor(page, title, icon, id) {
  const breakLine = document.createElement('br');

  const spanIcon = document.createElement('span');
  spanIcon.classList.add('icon-font');
  spanIcon.innerHTML = icon;

  const strong = document.createElement('strong');
  strong.innerHTML = title;
  strong.appendChild(breakLine);
  strong.appendChild(spanIcon);

  const anchor = document.createElement('a');
  anchor.id = id;
  anchor.classList.add('col');
  anchor.href = page;
  anchor.appendChild(strong);

  return anchor;
}

function buildBottomBar() {
  const divFooter = document.createElement('div');
  divFooter.classList.add('rodape');
  divFooter.appendChild(buildAnchor('projeto1.html', 'Feature 1', '&#x1f4f0;', 'feature1'));
  divFooter.appendChild(buildAnchor('projeto2.html', 'Feature 2', '&#x1f4cc;', 'feature2'));
  divFooter.appendChild(buildAnchor('projeto3.html', 'Feature 3', '&#x1F4DD;', 'feature3'));
  divFooter.appendChild(buildAnchor('projeto4.html', 'Feature 4', '&#x1F981;', 'feature4'));

  const nav = document.createElement('nav');
  nav.classList.add('rodape-container');
  nav.classList.add('col');
  nav.appendChild(divFooter);

  return nav;
}

function buildListItemSimple(targetPlace, title) {
  const anchor = document.createElement('a');
  anchor.classList.add('nav-link');
  anchor.href = targetPlace;
  anchor.innerHTML = title;

  const listItem = document.createElement('li');
  listItem.classList.add('nav-item');
  listItem.appendChild(anchor);

  return listItem;
}

function buildTopBar() {
  const idTopbar = 'navbarSupportedContent';

  const brand = document.createElement('a');
  brand.classList.add('navbar-brand');
  brand.href = '#';
  brand.innerHTML = 'N2';

  const iconToggler = document.createElement('span');
  iconToggler.classList.add('navbar-toggler-icon');

  const toggler = document.createElement('button');
  toggler.classList.add('navbar-toggler');
  toggler.type = 'button';
  toggler.dataset.toggle = 'collapse';
  toggler.dataset.target = `#${idTopbar}`;
  toggler.appendChild(iconToggler);

  const links = document.createElement('ul');
  links.classList.add('navbar-nav');
  links.classList.add('mr-auto');
  links.appendChild(buildListItemSimple('#', 'Page 1'));
  links.appendChild(buildListItemSimple('#', 'Page 2'));

  const divCollapse = document.createElement('div');
  divCollapse.classList.add('collapse');
  divCollapse.classList.add('navbar-collapse');
  divCollapse.id = idTopbar;
  divCollapse.appendChild(links);
  
  const nav = document.createElement('nav');
  nav.classList.add('navbar');
  nav.classList.add('navbar-expand-lg');
  nav.classList.add('navbar-light');
  nav.classList.add('bg-light');
  nav.appendChild(brand);
  nav.appendChild(toggler);
  nav.appendChild(divCollapse);

  return nav;
}
