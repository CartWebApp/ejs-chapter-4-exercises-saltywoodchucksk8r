function deepEqual(value, reference) {
if(value === reference) return true;

if(value == null || typeof value != "object" || 
  refrence == null || typeof refrence != "object" return false);

let keysValue = Object.keys(value), keysRefrence = Object.keys(refrence);

if (keysValue.length != keysRefrence.length) return false;

for (let key of keysValue){
  if(!keysRefrence.includes(key)|| !deepEqual(value[key], refrence[key])) return false;

}
return true;
}





// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
