function generatePattern(n) {
  for (let i = 2; i <= n + 3; i++) {
    let output = "";
    for (let j = 1; j <= n + 3; j++) {
      if (j < i) {
        output += j;
      } else if (j === i || j === i + 1) {
        output += "*";
      }
      //   console.log(i, "<<<<",">>>>", j);
    }
    for (let k = i + 2; k <= n + 3; k++) {
      output += k;
    }
    console.log(output);
  }
}

generatePattern(5);
generatePattern(4);

function findMaxDifference(arr) {
  if (arr.length < 2) {
    return 0;
  }

  let maxDifference = arr[0] - arr[1];
  let minElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const currentDifference = arr[i] - minElement;
    // console.log(arr[i], minElement, currentDifference);
    if (currentDifference > maxDifference) {
      maxDifference = currentDifference;
    }

    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }

  return maxDifference;
}

const harga = [10, 7, 5, 8, 11, 9, 1];
const result = findMaxDifference(harga);
console.log(result);
