// ES5
function Server(name, ip) {
    this.name = name;
    this.ip = ip;
}

Server.prototype.getUrl = function () {
    return `https://${this.ip}:80`;
}

const aws = new Server('AWS', '77.77.77.12')
// console.log(aws);

// ES6
class Server {
    constructor(name, ip) {
    }

    getUrl = function () {
        return `https://${this.ip}:80`;
    }
}

