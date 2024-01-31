# Chat-Local

- Crie uma pasta para ser o diretorio raiz do projeto
- Mova os arquivos do projeto para a pasta criada
- Abra o diretorio raiz com um editor de sua escolha e, no terminal, digite as linhas de comando abaixo:

```
npm init -y
```
> Inicia um projeto node
```
npm install express http socket.io path
```
> Instala as dependências do projeto

- No DiretorioRaiz/package.json insira a linha "start" como está no trecho de comando abaixo:

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
```
- Para iniciar o projeto digite no terminal o seguinte comandos:

```
  node server.js
```
> Em seu terminal será exibido a porta do seu "server"

Para acessar o projeto digite no navegador a URL "http://localhost:", e depois dos dois-pontos(:) digite a porta exibida no terminal, por exemplo, "http://localhost:3000"

> Para compartilhar o servidor com alguém, não é necessario os arquivos do projeto ou os passos descritos anteriormente, apenas a URL com a porta descrita!
> [!IMPORTANT]
> Será necessário todos usuários estarem na mesma conexão local para acessar o sever.

