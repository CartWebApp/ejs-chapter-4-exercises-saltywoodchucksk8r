function arrayToList(arr) {
  // Add code.
  let list = null;
  for(let arr = array.length -1; arr>=0; arr--){
    list = {value: arr[arr], rest: list};
  }
  return list;
}

function listToArray(list, arr) {

if (!list)return undefined;
else if (arr == 0)return list.value;
else return nth(list.rest, arr - 1); 

}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
