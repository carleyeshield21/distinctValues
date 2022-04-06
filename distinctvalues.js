// Given a random number of array of any length, create a function to determine how many distinct values of each number/element is within that array
function distinctvalues(arr) {
    // arr = [11, 12, 13, 11, 12, 11, 12, 13, 14, 11, 14]
    // To make this easier, we use the sort function so that we can arrange the array into an ascending order, so we can easily apply the for loop condition and count if there is a change of value, that change of value will be our counter which is also the equivalent of the number of distinct values in the array
    sorted = arr.sort()

    counter = 1
    i = 0
    for (j = 0; j <= sorted.length - 1; j++) {
        if (sorted[i] != sorted[j]) {
            counter++
            i = j
        }
    }
    console.log(`The number of distinct values in the array ${arr} is ${counter}`)


    // Here is a table so we can see the relationship of the indices i and j, j will be inside a usual for loop, while i will start at 1 and will take the value of j whenever it detects an inequality
    // i	j	sorted[i]	sorted[j]
    // 0	0	   11	      11
    // 0	1	   11	      11
    // 0	2	   11	      11
    // 0	3	   11	      11
    // 0	4	   11	      12
    // 4	5	   12	      12
    // 4	6	   12	      12
    // 4	7	   12	      13
    // 7	8	   13	      13
    // 7	9	   13	      14
    // 9	10	   14	      14
}
distinctvalues([11, 12, 13, 11, 12, 11, 12, 13, 14, 11, 14])
console.log('==============================================')
distinctvalues([10, 5, 6, 8, 9, 4, 7, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3])