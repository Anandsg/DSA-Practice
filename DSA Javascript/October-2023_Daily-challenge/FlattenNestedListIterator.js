class NestedIterator {
    constructor(nestedList) {
        this.flattened = this.flatten(nestedList);
        this.index = 0;
    }

    flatten(nested) {
        let result = [];
        for (let ni of nested) {
            if (ni.isInteger()) {
                result.push(ni.getInteger());
            } else {
                result.push(...this.flatten(ni.getList()));
            }
        }
        return result;
    }

    next() {
        return this.flattened[this.index++];
    }

    hasNext() {
        return this.index < this.flattened.length;
    }
}