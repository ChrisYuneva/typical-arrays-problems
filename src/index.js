
exports.min = function min (array) {
  if (array == undefined || array==0) {
    return 0;
  }

  let min = null;
  for(let i=0; i<array.length; i++){
    if (min > array[i]) min = array[i];
  }
  return min;
}

exports.max = function max (array) {
  if (array == undefined || array==0) {
    return 0;
  }
  let max = null;
  for(let i=0; i<array.length; i++){
    if (max < array[i]) max = array[i];
  }
  return max;
}

exports.avg = function avg (array) {
  if (array == undefined || array==0) {
    return 0;
  }
  let mean = 0;
  for(let i=0; i<array.length; i++){
    mean += array[i];
  }
  return mean / array.length;
}
