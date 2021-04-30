#  **Text to Speech - IBM Watson**



![img](https://i.imgur.com/IeZBAWK.png)

A aplicação consiste em uma página com dois painéis,  no painel a esquerda é possível realizar o cadastro de novos comentários. No painel da direita exibira os comentários cadastrado com um botão para ouvir o comentário. Para gerar o áudio do comentário , foi utilizada a API  **Text to Speech do IBM Watson**.



## Instruções de execução em ambiente local

- *Banco de Dados*
- *Server* em Node.js
- index.html como *Client*



## Configurando o Banco de Dados MySQL

Necessário criar um database, abaixo segue as configurações que utilizei:

```
host: 'localhost'
port: '3306'
user: 'root'
password: 'admin'
database: 'text-to-speech'
```

No arquivo **/text-to-speech/server/infraestrutura/conexao.js**  é possível alterar essas configurações, caso queira. 



## Instalando as dependências do servidor

No terminal dentro do diretório  **/text-to-speech/server/** execute `npm install`



## Subindo o Servidor

No terminal dentro do diretório  **/text-to-speech/server/** execute `node index`



## Acessando a aplicação no browser

No diretório  **/text-to-speech/cliente/** execute `index.html`



Tudo pronto! A partir daqui já é possível utilizar a aplicação.