let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    bg.style.top = value * 0.5 + "px";
    moon.style.left = - value * 1.2 + "px";
    mountain.style.top = - value * 0.1 + "px";
    road.style.top = value * 0.15 + "px";
    text.style.top = value * 1 + "px";
});

// script.js
// setInterval(() => {
//     function getRandomColor() {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//           color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//       }
      
//       const textColor = text.textContent;  
//       // Crear un array de caracteres envueltos en <span>
      
//       const coloredText = [...textColor].map(char => `<span>${char}</span>`).join('');
      
//       // Asignar colores aleatorios a cada <span>
//         const coloredTextWithColors = coloredText.replace(/<span>/g, '<span style="color: ' + getRandomColor() + ';">');
//       text.innerHTML = coloredTextWithColors;
// }, 1000);