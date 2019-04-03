// 单基准双向快排

/** 原地快速排序避免占用额外内存，直接在数组上进行操作
 *
 * @param {*[]} array - 待排序数组
 * @param {number} leftIndex
 * @param {number} rightIndex
 * @return {*[]} - 排序后数组
 */
function quickSortSinglePivot2(array = [], leftIndex = 0, rightIndex = array.length - 1) {

    // 划分数组
    function partition(lowIndex, highIndex) {
        // 交换数组元素
        function swap(left, right) {
            if (left !== right) {
              [array[left], array[right]] = [array[right], array[left]]
            }
        }

        // 用于比较的基准值
        // 最终小于基准值的元素排在左边，大于等于基准值的元素排在右边
        const pivot = array[lowIndex]

        // 设置划分位置初始值
        const partitionIndex = lowIndex
        
        // 左侧起始位置
        let leftIndex = lowIndex + 1
        
        // 右侧起始位置
        let rightIndex = highIndex

        while(leftIndex < rightIndex) {
          for (; leftIndex < rightIndex; leftIndex++) {
            if (array[leftIndex] > pivot) {
              break;
            }
          }
          
          for (; leftIndex < rightIndex; rightIndex--) {
            if (array[rightIndex] < pivot) {
              break;
            }
          }
          
          swap(leftIndex, rightIndex)
        }

        // 将划分位置的元素与基准值交换
        swap(partitionIndex, rightIndex)

        return rightIndex
    }

    // 数组有两个或以上元素才需要排序
    if (leftIndex < rightIndex) {
        // 划分位置
        const partitionIndex = partition(leftIndex, rightIndex)
        // 递归排序
        quickSortSinglePivot2(array, leftIndex, partitionIndex - 1, true)
        quickSortSinglePivot2(array, partitionIndex + 1, rightIndex, true)
    }

    // 返回排序完的数组副本
    return array
}

quickSortSinglePivot2( [5, 3, 7, 4, 1, 9, 8, 6, 2]) // =>[1, 2, 3, 4, 5, 6, 7, 8, 9]
