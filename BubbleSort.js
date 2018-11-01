//冒泡排序
//当前元素a与下一个元素b比较大小
//b大于a时，交换位置
function bubbleSort(array) {
    let boundary = array.length - 1

    while(boundary--){
        let alreadySorted = true

        for (let j = 0; j < boundary + 1; j++) {
            if( array[j + 1] < array[j] ){
                [array[j], array[j+1]] = [array[j+1], array[j]]
                alreadySorted = false
            }
        }

        if (alreadySorted) {
            return array
        }
    }

    return array
}
