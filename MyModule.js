const moment = require('moment');

class MyModule {
    _name = "";


    constructor(_name) {
        this._name = _name;
    }

    getGreetingMessage() {
        return `Hello, ${this._name}!\n`;
    }

}

module.exports.MyModule = MyModule;