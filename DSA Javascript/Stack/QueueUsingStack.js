var MyQueue = function () {
    this.firstStack = []
    this.secondStack = []
}

MyQueue.prototype.push = function (x) {
    this.firstStack.push(x)
}

MyQueue.prototype.pop = function () {
    this._prepare()
    return this.secondStack.pop()
}

MyQueue.prototype.peek = function () {
    this._prepare()
    return this.secondStack[this.secondStack.length - 1]
}

MyQueue.prototype.empty = function () {
    return this.firstStack.length === 0 && this.secondStack.length === 0
}

MyQueue.prototype._prepare = function () {
    if (this.secondStack.length === 0)
        while (this.firstStack.length > 0)
            this.secondStack.push(this.firstStack.pop())
}