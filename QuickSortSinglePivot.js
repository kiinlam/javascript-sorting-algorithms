/** 单基准单向快排
 * 特征：一个基准值，一个从左往右扫描的游标，一个步步前进的分区位
 *
 * @param {*[]} array - 待排序数组
 * @param {number} leftIndex - 左侧开始下标
 * @param {number} rightIndex - 右侧结束下标
 * @return {*[]} - 排序后数组
 */
function quickSortSinglePivot(array = [], leftIndex = 0, rightIndex = array.length - 1) {

    // 数组有两个或以上元素才需要排序
    if (leftIndex < rightIndex) {
        // 分区位置
        const partitionIndex = partition(array, leftIndex, rightIndex)
        // 递归排序
        quickSortSinglePivot(array, leftIndex, partitionIndex - 1)
        quickSortSinglePivot(array, partitionIndex + 1, rightIndex)
    }

    // 返回排序完的数组副本
    return array
}

// 分区数组
function partition(array, lowIndex, highIndex) {

    // 用于比较的基准值
    // 最终小于基准值的元素排在左边，大于等于基准值的元素排在右边
    const pivot = array[highIndex]

    // 设置分区位置初始值
    let partitionIndex = lowIndex
    // 逐个于基准值比较，小于基准值时，将元素与分区位置的元素交换，同时分区位置往右移
    for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex++) {
        if (array[currentIndex] < pivot) {
            swap(array, partitionIndex, currentIndex)
            partitionIndex += 1
        }
    }

    // 将分区位置的元素与基准值交换
    swap(array, partitionIndex, highIndex)

    return partitionIndex
}

// 交换数组元素
function swap(array, left, right) {
    if (left !== right) {
      [array[left], array[right]] = [array[right], array[left]]
    }
}

quickSortSinglePivot( [5, 3, 7, 4, 1, 9, 8, 6, 2]) // =>[1, 2, 3, 4, 5, 6, 7, 8, 9]
