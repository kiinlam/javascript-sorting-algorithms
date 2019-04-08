/** 双基准快排
 * 特征：头尾两个基准值，一个从左往右扫描的游标，两个往中间收敛的标记位
 *
 * @param {*[]} array - 待排序数组
 * @param {number} leftIndex - 左侧开始下标
 * @param {number} rightIndex - 右侧结束下标
 * @return {*[]} - 排序后数组
 */
function dualPivotQuickSort(array = [], leftIndex = 0, rightIndex = array.length - 1) {

  // 数组有两个或以上元素才需要排序
  if (leftIndex < rightIndex) {
    
    // 确保第一个基准值小于等于第二个基准值
    if (array[leftIndex] > array[rightIndex]) {
      swap(leftIndex, rightIndex)
    }
  
    // 用于比较的基准值
    // 最终小于左基准值的元素排在左边，大于右基准值的元素排在右边，其余的在中间
    const pivotLeft = array[leftIndex]
    const pivotRight = array[rightIndex]
    
    let lt = leftIndex + 1
    let gt = rightIndex - 1
    let i = leftIndex + 1
    
    while(i <= gt) {
    
      // 游标从左往右扫描
      // 比基准值小时，与lt位置的元素交换，然后i、lt往右移一位
      // 比基准值大时，与gt位置的元素交换，然后gt往左移一位
      if (array[i] < pivotLeft) {
        swap(i, lt)
        i++
        lt++
      } else if (array[i] > pivotRight) {
        swap(i, gt)
        gt--
      } else {
        i++
      }
    }
    
    // 交换左侧、右侧基准值
    swap(leftIndex, --lt)
    swap(rightIndex, ++gt)
    
    // 递归排序
    dualPivotQuickSort(array, leftIndex, lt - 1)
    dualPivotQuickSort(array, lt + 1, gt - 1)
    dualPivotQuickSort(array, gt + 1, rightIndex)
  }

  // 返回排序后的数组
  return array
}

// 交换数组元素
function swap(left, right) {
  if (left !== right) {
    [array[left], array[right]] = [array[right], array[left]]
  }
}

dualPivotQuickSort([5, 3, 7, 4, 1, 9, 8, 6, 2]) // =>[1, 2, 3, 4, 5, 6, 7, 8, 9]
