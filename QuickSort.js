// 快速排序
function quickSort(array) {
  let length = array.length
  if (length < 2) {
    return array
  }
  let pivot = array[0], left = [], right = []
  for (let i = 1; i < length; i++) {
    let v = array[i]
    v < pivot && left.push(v)
    v >= pivot && right.push(v)
  }
  return quickSort(left).concat(pivot, quickSort(right))
}
