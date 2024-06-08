import MessageService from '../services/messageService.js';

export default class MessageController {

    constructor() {
        this.messageService = new MessageService();
    }

    async addMessage(user, message) {
        return await this.messageService.add(user, message);
    }

    async getAllMessages() {
        return await this.messageService.getAll();
    }
    
}

