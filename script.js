function toggleMode() {
    const html = document.documentElement;

    html.classList.toggle('light');

    const img = document.querySelector("#profile img");

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'Foto do Mayk Brito da Rocktseat usando óculos de grau e camisa preta.')
    } else {
        img.setAttribute('src', './assets/avatar-light.png');
        img.setAttribute('alt', 'Foto do Mayk Brito da Rocktseat usando óculos escuros e jaqueta preta.')
    }
}