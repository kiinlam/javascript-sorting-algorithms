/** 单基准三路快排
 * 特征：一个不占位的基准值，一个从左往右扫描的游标，两个往中间收敛的标记位
 * 理想情况下，每次都能对半分时，时间复杂度为O(nlogn)
 * 对于已经排好序的数组n，操作次数为1+2+3+...+(n-3)+(n-2)+(n-1)+n，时间复杂度O(n^2)
 *
 * @param {*[]} array - 待排序数组
 * @param {number} leftIndex - 左侧开始下标
 * @param {number} rightIndex - 右侧结束下标
 * @return {*[]} - 排序后数组
 */
function quickSort3way(array = [], leftIndex = 0, rightIndex = array.length - 1) {

  // 数组有两个或以上元素才需要排序
  if (leftIndex < rightIndex) {
  
    // 用于比较的基准值
    // 最终小于基准值的元素排在左边，大于等于基准值的元素排在右边
    const pivot = array[leftIndex]
    
    let lt = leftIndex
    let gt = rightIndex
    let i = leftIndex + 1
    
    while(i <= gt) {
    
      // 游标从左往右扫描
      // 比基准值小时，与lt位置的元素交换，然后i、lt往右移一位
      // 比基准值大时，与gt位置的元素交换，然后gt往左移一位
      if (array[i] < pivot) {
        swap(array, i, lt)
        i++
        lt++
      } else if (array[i] > pivot) {
        swap(array, i, gt)
        gt--
      } else {
        i++
      }
    }
    
    // 递归排序
    quickSort3way(array, leftIndex, lt - 1)
    quickSort3way(array, gt + 1, rightIndex)
  }

  // 返回排序后的数组
  return array
}

// 交换数组元素
function swap(array, left, right) {
  if (left !== right) {
    [array[left], array[right]] = [array[right], array[left]]
  }
}

quickSort3way([5, 3, 7, 4, 1, 9, 8, 6, 2]) // =>[1, 2, 3, 4, 5, 6, 7, 8, 9]
