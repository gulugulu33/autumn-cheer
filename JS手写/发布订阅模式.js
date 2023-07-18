class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(eventName, callback) {
        if(!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }
    emit(eventName, ...args) {
        if(this.events[eventName]) {
            const callbacks = this.events[eventName]
            callbacks.forEach((callback) => {
                callback(...args)
            })
        }
    }
    off(eventName, callback) {
        const callbacks = this.events[eventName]
        if(callbacks) {
            let idx = callbacks.indexOf(callback)
            if(idx !== -1) {
                callbacks.splice(idx, 1)
            }
        }
    }
}

const emitter = new EventEmitter()

const myWith = (...args) => {
    console.log(args);
}

emitter.on('CUPK', myWith)

emitter.emit('CUPK', 33, 'wzq')

emitter.off('niuma', myWith)

emitter.emit('CUPK', 33, 'wzq')
