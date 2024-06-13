class EventEmitter {
    
    constructor() {
        this.events = new Map()
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, [])
        }
        
        const listeners = this.events.get(eventName)
        listeners.push(callback)
        
        return {
            unsubscribe: () => {
                const index = listeners.indexOf(callback)
                if (index !== -1) {
                    listeners.splice(index, 1)
                }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return []
        }
        
        let result = []
        const callbacks = this.events.get(eventName)
        for (const callback of callbacks) {
            result.push(callback(...args))
        }
        return result
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */