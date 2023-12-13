class ChatClient {
    constructor() {
        this.editor = document.getElementById('editor');
        this.socket = io();

        this.setupEvents();
    }

    setupEvents() {
        this.editor.addEventListener('input', () => {
            const content = this.editor.innerHTML;
            this.socket.emit('update', content);
        });

        this.socket.on('update', (content) => {
            this.editor.innerHTML = content;
        });
    }
}

// Cria uma instância da classe ChatClient
const chatClient = new ChatClient();

function lightmode() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var element2 = document.h2;
    element2.classList.toggle("titulo");
  }