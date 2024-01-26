import { HashSet } from "./HashSet.js";
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

const hashSet = new HashSet();

// populate the hashSet
for (const key in testData) {
  hashSet.set(key);
}
hashSet.set("remove");

// display all elements in the hashSet
hashSet.buckets.forEach((bucket) => {
  console.log(util.inspect(bucket, false, null, true));
  console.log(bucket.size());
});
console.log(util.inspect(hashSet.buckets, false, null, true));

console.log("test set() for replacing repeated key");
hashSet.set("a");

console.log("test get() to get value of a:");
console.log(hashSet.get("a"));

console.log("test has():");
console.log(hashSet.has("a"));
console.log(hashSet.has("don't have"));

console.log("test remove()");
console.log(hashSet.remove("remove"));

console.log("test length()");
console.log(hashSet.length());

console.log("test keys()");
console.log(hashSet.keys());

console.log("test capacity and bucket length");
console.log(hashSet.capacity);
console.log(hashSet.buckets.length);

console.log("test filled bucket");
console.log(hashSet.filledBucket);
