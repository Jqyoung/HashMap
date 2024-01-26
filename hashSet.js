import LinkedList from "./linkedList.js";

class HashSet {
  constructor() {
    this.defaultCapacity = 16;
    this.capacity = this.defaultCapacity;
    this.loadFactor = 0.75;
    this.threshHold = this.capacity * this.loadFactor;
    this.filledBucket = 0;
    this.buckets = new Array(this.defaultCapacity);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  expand(key) {
    const data = this.keys();
    this.capacity *= 2;
    this.threshHold = this.capacity * this.loadFactor;
    this.buckets = new Array(this.capacity);
    this.filledBucket = 0;

    this.set(key);
    data.forEach((element) => {
      this.set(element);
    });
  }

  set(key) {
    // rehash and put the keys in the new bucket
    if (this.filledBucket > this.threshHold) {
      this.expand(key);
    }

    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
      this.buckets[index].append(key);
      this.filledBucket++;
    } else {
      this.buckets[index].update(key);
    }
  }

  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return null;
    } else {
      return this.buckets[index].find(key);
    }
  }

  has(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return false;
    } else {
      return this.buckets[index].contains(key);
    }
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return false;
    } else {
      this.buckets[index].delete(key);
      if (this.buckets[index].head === null) {
        delete this.buckets[index];
        this.filledBucket--;
      }
      return true;
    }
  }

  length() {
    let counter = 0;
    let index = 0;
    while (index < this.capacity) {
      if (this.buckets[index]) {
        counter += this.buckets[index].size();
      }
      index++;
    }
    return counter;
  }

  clear() {
    this.filledBucket = 0;
    this.capacity = this.defaultCapacity;
    this.threshHold = this.capacity * this.loadFactor;
    this.buckets = new Array(this.defaultCapacity);
  }

  keys() {
    let index = 0;
    let keys = [];
    while (index < this.capacity) {
      if (this.buckets[index]) {
        keys = [...keys, ...this.buckets[index].getKeys()];
      }
      index++;
    }
    return keys;
  }
}

export { HashSet };
