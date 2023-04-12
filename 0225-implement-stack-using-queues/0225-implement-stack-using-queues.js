
var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let newQueue = [];
    while (this.queue.length > 1) {
        newQueue.push(this.queue.shift());
    }
    const val = this.queue.shift();
    this.queue = newQueue;
    return val;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const topVal = this.pop();
    this.push(topVal);
    return topVal;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue.length;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */