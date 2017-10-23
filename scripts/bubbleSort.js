function bubbleSort(array) {
  const length = array.length; 
  for (let i = 0; i < length; i++) { 
    for (let j = 0; j < (length - i - 1); j++) { 
      if(array[j] > array[j + 1]) { 
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      } 
    } 
  } 
  return array;
};



function bubbleSortBackwards(array) {
  const length = array.length;
  for (let i = (length - 1); i >= 0; i--) {
    for (let j = (length - i); j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }
  }
  return array;
};

module.exports = bubbleSort;
module.exports = bubbleSortBackwards;
