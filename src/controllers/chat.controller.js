import { Chats } from 'api/collections';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class ChatCtrl extends Controller {
  static $inject = ['$stateParams']

  constructor() {
    super(...arguments);

    this.chatId = this.$stateParams.chatId;

    this.helpers({
      data() {
        return Chats.findOne(this.chatId);
      }
    });
  }
}