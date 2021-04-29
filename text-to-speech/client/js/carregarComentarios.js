const template = (comentario, id) => {

    const divNovoComentario = document.createElement('div');
    divNovoComentario.classList.add("ouvir-comentario");
    
    const conteudo = `
     <p id="comentarios" class="comentarios-texto">${comentario}</p>
     <button class="botao botao-ouvir" onclick="document.getElementById('playid').play()">Ouvir</button>
    <audio id="${id}">
    <source src="audio/${id}.wav" type="audio/wav" />
    </audio>
    `
    divNovoComentario.innerHTML = conteudo;
    return divNovoComentario;
}

const comentariosView = document.querySelector('#comentariosView');
console.log(comentariosView)

window.onload = function carregarComentarios() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000', true);
    xhr.send();
    xhr.onload = () => {

        const comentarios = JSON.parse(xhr.response);
        console.log(comentarios)
        comentarios.forEach(elemento => {
            comentariosView.appendChild(template(elemento.comentario, elemento.id));
        });

    }

    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'http://localhost:3000', true);

    // xhr.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log('Conexão OK!')
    //         const comentarios = JSON.parse(this.responseText)

    //         console.log(comentarios);
    //     }
    // }

    // xhr.send()
};