import { HashMap } from "./HashMap.js";
import util from "util";

// for testing rehash and expand
const testData = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

// data without the need to expand the table
const testData2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
};

const hashMap = new HashMap();

// populate the hashMap
for (const key in testData) {
  let value = testData[key];
  hashMap.set(key, value);
}
hashMap.set("remove", 404);

hashMap.buckets.forEach((bucket) => {
  console.log(util.inspect(bucket, false, null, true));
  console.log(bucket.size());
});

console.log(hashMap.buckets);

console.log("test set() for replacing repeated key");
hashMap.set("a", 100);

console.log("test get() to get value of a:");
console.log(hashMap.get("a"));

console.log("test has():");
console.log(hashMap.has("a"));
console.log(hashMap.has("don't have"));

console.log("test remove()");
console.log(hashMap.remove("remove"));

console.log("test length()");
console.log(hashMap.length());

console.log("test keys()");
console.log(hashMap.keys());

console.log("test values()");
console.log(hashMap.values());

console.log("test entries()");
console.log(hashMap.entries());

console.log("test capacity and bucket length");
console.log(hashMap.capacity);
console.log(hashMap.buckets.length);

console.log("test filled bucket");
console.log(hashMap.filledBucket);
