export default class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value, pointer = this.head) {
    if (this.head === null) {
      this.head = new Node(value);
      return this.head;
    } else if (pointer === null) {
      return new Node(value);
    }
    pointer.next = this.append(value, pointer.next);
    return pointer;
  }

  update(key, value) {
    let temp = this.head;
    while (temp !== null) {
      if (typeof temp.value === "object" && Object.keys(temp.value)[0] == key) {
        temp.value[key] = value;
        return;
      } else if (temp.value === key) {
        temp.value = key;
        return;
      }
      temp = temp.next;
    }

    this.append({ [key]: value });
  }

  find(key) {
    let temp = this.head;
    while (temp !== null) {
      if (typeof temp.value === "object" && Object.keys(temp.value)[0] == key) {
        return temp.value[key];
      } else if (temp.value === key) {
        return temp.value;
      }
      temp = temp.next;
    }
    return null;
  }

  contains(key, pointer = this.head) {
    if (pointer === null) {
      return false;
    }

    if (Object.keys(pointer.value)[0] == key || pointer.value === key) {
      return true;
    }

    return this.contains(key, pointer.next);
  }

  delete(key, cur = this.head, prev = null) {
    if (cur === null) {
      return false;
    }

    if (Object.keys(cur.value)[0] == key || cur.value === key) {
      if (prev !== null) {
        cur = cur.next;
        prev.next = cur;
      } else {
        this.head = cur.next;
      }
      return true;
    }

    return this.delete(key, cur.next, cur);
  }

  size(counter = 0, pointer = this.head) {
    if (pointer === null) {
      return counter;
    }

    return this.size(counter + 1, pointer.next);
  }

  getKeys(pointer = this.head, arr = []) {
    let key;
    if (pointer === null) {
      return arr;
    }

    if (typeof pointer.value === "object") {
      key = Object.keys(pointer.value)[0];
    } else {
      key = pointer.value;
    }
    arr.push(key);
    return this.getKeys(pointer.next, arr);
  }

  getValues(pointer = this.head, arr = []) {
    let value;
    if (pointer === null) {
      return arr;
    }
    value = Object.values(pointer.value)[0];
    arr.push(value);
    return this.getValues(pointer.next, arr);
  }

  getEntries() {
    let temp = this.head;
    let arr = [];
    while (temp !== null) {
      arr = arr.concat(Object.entries(temp.value)[0]);
      temp = temp.next;
    }
    return arr;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
