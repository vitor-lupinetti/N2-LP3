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
