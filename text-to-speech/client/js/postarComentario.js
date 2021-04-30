const botaoCadastrar = document.querySelector('#botao-cadastrar');
const textArea = document.querySelector('#textarea-comentario');

botaoCadastrar.addEventListener('click', () => {
    //event.preventDefault();
    // onFormBubmit();

    // function onFormBubmit() {
    //     const comentarios =readFormData();
    //     console.log(comentarios)
    //     console.log(JSON.stringify(comentarios))
    // }

    // function readFormData() {
    //     var formData = {};
    //     formData['"comentario"']=textArea.value;
    //     return formData;
    // }

    const param = `comentario=${textArea.value}`;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            alert(xhr.responseText);
        }
    }
    xhr.send(param)

    document.location.reload(true);

});