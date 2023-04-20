export function merge(collection_1: number[], collection_2: number[]) {
    let res: number[] = []
    let len = collection_1.length + collection_2.length;
    let i = 0;
    let j = 0;
    let k = 0;
    while (len > 0) {
        if (collection_1.length === 0 || i === collection_1.length) {
            res[k] = collection_2[j];
            j += 1;
        } else if (collection_2.length === 0 || j === collection_2.length) {
            res[k] = collection_1[i];
            i += 1;
        } else {
            if (collection_1[i] <= collection_2[j]) {
                res[k] = collection_1[i];
                i += 1;
            } else {
                res[k] = collection_2[j];
                j += 1;
            }
        }
        k += 1;
        len -= 1;
    }
    return res;
}

// input here
console.log(merge([1, 2, 3, 4, 5, 7, 9], [2, 4, 6, 8, 10]))