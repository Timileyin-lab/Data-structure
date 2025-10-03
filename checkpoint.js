function sumDistinct(arr1, arr2) {
  let sum = 0;

  
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      sum += arr1[i];
    }
  }

  
  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      sum += arr2[i];
    }
  }

  return sum;
}

// Example:
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
console.log(sumDistinct(set1, set2)); 
function dot_product(v1, v2) {
  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}

function checkOrthogonal(vectors) {
  for (let k = 0; k < vectors.length; k++) {
    let [v1, v2] = vectors[k];
    let ps = dot_product(v1, v2);

    if (ps === 0) {
      console.log(`Vectors ${k + 1} are orthogonal`);
    } else {
      console.log(`Vectors ${k + 1} are not orthogonal`);
    }
  }
}

let vectors = [
  [[1, 2], [2, -1]],   
  [[1, 1], [1, 1]]     
];
checkOrthogonal(vectors);
