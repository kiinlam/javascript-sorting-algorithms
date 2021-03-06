/** 单基准双向快排
 * 特征：一个基准值，两个从两侧往中间靠拢的游标，一个固定的分区位
 * 理想情况下，每次都能对半分时，时间复杂度为O(nlogn)
 * 对于已经排好序的数组n，操作次数为1+2+3+...+(n-3)+(n-2)+(n-1)+n，时间复杂度O(n^2)
 * @param {*[]} array - 待排序数组
 * @param {number} leftIndex - 左侧开始下标
 * @param {number} rightIndex - 右侧结束下标
 * @return {*[]} - 排序后数组
 */
function quickSortSinglePivot2(array = [], leftIndex = 0, rightIndex = array.length - 1) {

  

  // 数组有两个或以上元素才需要排序
  if (leftIndex < rightIndex) {
    // 划分位置
    const partitionIndex = partition(array, leftIndex, rightIndex)
    // 递归排序
    quickSortSinglePivot2(array, leftIndex, partitionIndex - 1)
    quickSortSinglePivot2(array, partitionIndex + 1, rightIndex)
  }

  // 返回排序后的数组
  return array
}

// 划分数组
function partition(array, lowIndex, highIndex) {

  // 用于比较的基准值
  // 最终小于基准值的元素排在左边，大于等于基准值的元素排在右边
  const pivot = array[lowIndex]

  // 记录划分位置初始值
  const partitionIndex = lowIndex

  // 左游标起始位置
  lowIndex++

  while(true) {

    // 从左往右查找比基准值大的元素，直到与右游标重合
    for (; lowIndex <= highIndex; lowIndex++) {
      if (array[lowIndex] > pivot) {
        break;
      }
    }

    // 从右往左查找比基准值小的元素，直到与左游标重合
    for (; lowIndex <= highIndex; highIndex--) {
      if (array[highIndex] < pivot) {
        break;
      }
    }

    // 如果两侧游标已经相遇或越过，则不需要交换元素
    if (lowIndex >= highIndex) {
      break
    }

    // 左游标大于基准值的元素，与右游标小于基准值的元素，进行交换
    swap(array, lowIndex++, highIndex--)
  }

  // 完成一轮扫描后，将划分位置的元素与基准值交换
  // 此时highIndex所在位置的元素小于基准值
  swap(array, partitionIndex, highIndex)

  return highIndex
}

// 交换数组元素
function swap(array, left, right) {
  if (left !== right) {
    [array[left], array[right]] = [array[right], array[left]]
  }
}

quickSortSinglePivot2([5, 3, 7, 4, 1, 9, 8, 6, 2]) // =>[1, 2, 3, 4, 5, 6, 7, 8, 9]
