# HashMap

This is a project that implements the HashMap data structure from [The Odin Project](https://www.theodinproject.com/lessons/javascript-hashmap-data-structure). A HashMap is a data structure that operates like a dictionary. It stores data in key-value pairs by taking the key into a hash function to produce a hash code and then using this code as the index of the buckets or array to place the key-value pair inside.

## Key Takeaways

- Learned to construct a HashMap from the ground up.
- The core concepts of a HashMap, including data in key-value pair, hash function, hash code, buckets, collision resolution strategies(chaining, open-addressing), dynamic map expansion, and rehashing.
- Pros of a HashMap: it is very efficient in data insertion, retrieval/search, and removal.
- Cons of a HashMap: it may allocate more memory than the amount of data present, rehash has an O(n), potential of collision, and its effects on efficiency.
- What a HashSet is. It is like a HashMap but only has keys without associated values. each key in a HashSet is unique, duplicate key will not be inserted. Useful when the key to be stored does not need a corresponding value, such as a set of unique usernames.

## Future Improvements

- Learn to write tests to test each method inside the data structure.
