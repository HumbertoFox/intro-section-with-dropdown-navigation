# Frontend Mentor - Intro section with dropdown navigation solution

Esta é uma solução para o [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). 
Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Layout do projeto em tela de Desktop/Notebook/Tablet/Mobile.


<div align="center">

![Visualização do design para o desafio de codificação Intro section with dropdown navigation](./src/assets/images/design/desktop-preview.jpg)

![Visualização do design para o desafio de codificação Intro section with dropdown navigation](./src/assets/images/design/desktop-design.jpg)

![Visualização do design para o desafio de codificação Intro section with dropdown navigation](./src/assets/images/design/mobile-design.jpg)

![Visualização do design para o desafio de codificação Intro section with dropdown navigation](./src/assets/images/design/mobile-menu-collapsed.jpg)

![Visualização do design para o desafio de codificação Intro section with dropdown navigation](./src/assets/images/design/mobile-menu-expanded.jpg)

</div>

## Bem-vindo! 👋

### O que aprendi

Mais uma prática com o HTML, CSS e Js! show 😎

Solução responsive no HTML
```html
      <picture class="picture-right">
        <source media="(max-width: 900px)" srcset="./src/assets/images/image-hero-mobile.png">
        <img src="./src/assets/images/image-hero-desktop.png" alt="Image Ilustration">
      </picture>
```

Adicionando img com pseudo elemento
```css
.ul-menu .li-features::after,
.ul-menu .li-company::after {
    position: absolute;
    content: url(../assets/images/icon-arrow-down.svg);
    right: 0;
    top: 5px;
    opacity: .6;
    transition: .3s ease-in-out;
}
```

Adicionando e Removendo class com click.
```Js
selectLiFeatures.addEventListener("click", () => {
    selectUlFeature.classList.toggle('active');
});
```

### Construído com 🚀

- Marcação semântica HTML5
- Propriedades personalizadas CSS
- Caixa flexível
- Js

## Desenvolvido em: 🚀

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30px"/>
</div>
