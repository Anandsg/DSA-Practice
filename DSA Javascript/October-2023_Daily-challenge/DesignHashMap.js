var MyHashMap = function () {
    this.SIZE = 809; //prime number
    this.NOT_FOUND = -1;
    this.buckets = new Array(this.SIZE).fill(new Bucket());

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    this.buckets[this.hashKey(key)].insertIntoBucket(key, value);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    return this.buckets[this.hashKey(key)].getValue(key) !== null ? this.buckets[this.hashKey(key)].getValue(key) : this.NOT_FOUND;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    this.buckets[this.hashKey(key)].removeFromBucket(key);
};

/** 
 * @param {number} key 
 * @return {number}
 */
MyHashMap.prototype.hashKey = function (key) {
    return key % this.SIZE;
};

class Bucket {

    constructor() {
        this.bucketPairs = [];
        this.NOT_FOUND = -1;
    }

    insertIntoBucket(key, value) {
        let index = this.findIndexOfPair(key);
        if (index !== this.NOT_FOUND) {
            this.bucketPairs[index].value = value;
            return;
        }
        this.bucketPairs.push(new Pair(key, value));
    }

    removeFromBucket(key) {
        let index = this.findIndexOfPair(key);
        if (index !== this.NOT_FOUND) {
            this.bucketPairs.splice(index, 1);
        }
    }

    getValue(key) {
        let index = this.findIndexOfPair(key);
        return index !== this.NOT_FOUND ? this.bucketPairs[index].value : null;
    }

    findIndexOfPair(key) {
        for (let i = 0; i < this.bucketPairs.length; ++i) {
            if (this.bucketPairs[i].key === key) {
                return i;
            }
        }
        return this.NOT_FOUND;
    }
}

function Pair(key, value) {
    this.key = key;
    this.value = value;
}