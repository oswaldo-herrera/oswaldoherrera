function mostrarInfo() {
    document.getElementById('descripcion').style.display = 'block';
}

function ocultarInfo() {
    document.getElementById('descripcion').style.display = 'none';
}


//variable

const card = document.querySelector('#project_card');

//evento

document.addEventListener('DOMContentLoaded', () => {
    mostrarCard();
});


//funcion

function mostrarCard() {
    items.forEach(item => {
        const productos = document.createElement('p');

        productos.innerHTML = 

        `
        <div class="card">
            <div class="cover_card">
            <img src="${item.img}" alt="">
            </div>
            <h2>${item.title_h2}</h2>
            <p>${item.description}</p>
            <hr>
            <div class="footer_card">
            <a href="${item.github}" target="_blank">GitHUb</a>
            <a href="${item.web}" target="_blank">Sitio Web</a>
            </div>
        </div>`

        card.appendChild(productos);
    })
}






