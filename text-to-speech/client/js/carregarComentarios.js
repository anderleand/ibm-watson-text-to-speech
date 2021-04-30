const template = (comentario, id) => {

    const divNovoComentario = document.createElement('div');
    divNovoComentario.classList.add("ouvir-comentario");

    const conteudo = `
     <p id="comentarios" class="comentarios-texto">${comentario}</p>
     <button class="botao botao-ouvir" onclick=document.getElementById("${id}").play()>Ouvir</button>
    <audio id="${id}">
    <source src="./../server/public/audio/${id}.wav" type="audio/wav" />
    </audio>
    `
    divNovoComentario.innerHTML = conteudo;
    return divNovoComentario;
}

const comentariosView = document.querySelector('#comentariosView');

window.onload = function carregarComentarios() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000', true);
    xhr.send();
    xhr.onload = () => {

        if (xhr.readyState == 4 && xhr.status == 200) {
            const comentarios = JSON.parse(xhr.response);
            comentarios.forEach(elemento => {
                comentariosView.appendChild(template(elemento.comentario, elemento.id));
            });
        }

    }

};