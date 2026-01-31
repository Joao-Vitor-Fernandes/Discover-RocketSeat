function toggleMode() {
  const html = document.documentElement

  // // no html, na lista de classe, contém a classe "light"?
  // if(html.classList.contains('light')) {
  //   // se sim, remove a classe "light"
  //   html.classList.remove('light')
  // } else {
  //   // se não, adiciona a classe "light"
  //   html.classList.add('light')
  // }
  html.classList.toggle('light')

  
  // pegar a tag img
  const img = document.querySelector('#profile img')

  // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Mayk Brito de óculos de sol e jaqueta preta')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Foto de Mayk Brito de óculos e jaqueta preta')
  }
}