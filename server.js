const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

class ChatServer {
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = socketIO(this.server);
        this.clients = new Set();
        this.PORT = process.env.PORT || 4000;

        this.setupExpress();
        this.setupSocketIO();
        this.startServer();
    }

    setupExpress() {
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    setupSocketIO() {
        this.io.on('connection', (socket) => {
            // Recupera o endereço IP real do cliente
            const clientIP = socket.handshake.headers['x-forwarded-for'] || socket.handshake.address;

            console.log(`Novo usuário conectado - IP: ${clientIP}, ID do Socket: ${socket.id}`);

            // Adiciona o cliente ao conjunto
            this.clients.add(socket);

            socket.on('update', (content) => {
                // Emite a atualização apenas para os outros clientes, não para o remetente
                this.broadcastUpdate(socket, content);
            });

            socket.on('disconnect', () => {
                console.log(`Usuário desconectado - IP: ${clientIP}, ID do Socket: ${socket.id}`);

                // Remove o cliente do conjunto quando desconectado
                this.clients.delete(socket);
            });
        });
    }

    broadcastUpdate(senderSocket, content) {
        // Emite a atualização para todos os outros clientes
        this.clients.forEach((client) => {
            if (client !== senderSocket) {
                client.emit('update', content);
            }
        });
    }

    startServer() {
        this.server.listen(this.PORT, () => {
            console.log(`Servidor rodando na porta ${this.PORT}`);
        });
    }
}

// Cria uma instância da classe ChatServer
const chatServer = new ChatServer();