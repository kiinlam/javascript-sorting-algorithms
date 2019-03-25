// 原地快速排序

/** 原地快速排序避免占用额外内存，直接在数组上进行操作
 *
 * @param {*[]} originalArray - 待排序数组
 * @param {number} leftIndex
 * @param {number} rightIndex
 * @param {boolean} isRecursive
 * @return {*[]} - 排序后数组
 */
function quickSortInPlace(orginArray = [], leftIndex = 0, rightIndex = orginArray.length - 1, isRecursive = false) {
    // 第一次调用时创建副本，在副本上排序
    const array = isRecursive ? orginArray : [...orginArray]

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
        const pivot = array[highIndex]

        // 设置划分位置初始值
        let partitionIndex = lowIndex
        // 逐个于基准值比较，小于基准值时，将元素与划分位置的元素交换，同时划分位置往右移
        for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex++) {
            if (array[currentIndex] < pivot) {
                swap(partitionIndex, currentIndex)
                partitionIndex += 1
            }
        }

        // 将划分位置的元素与基准值交换
        swap(partitionIndex, highIndex)

        return partitionIndex
    }

    // 数组有两个或以上元素才需要排序
    if (leftIndex < rightIndex) {
        // 划分位置
        const partitionIndex = partition(leftIndex, rightIndex)
        // 递归排序
        quickSortInPlace(array, leftIndex, partitionIndex - 1, true)
        quickSortInPlace(array, partitionIndex + 1, rightIndex, true)
    }

    // 返回排序完的数组副本
    return array
}

quickSortInPlace( [5, 3, 7, 4, 1, 9, 8, 6, 2]) // =>[1, 2, 3, 4, 5, 6, 7, 8, 9]
