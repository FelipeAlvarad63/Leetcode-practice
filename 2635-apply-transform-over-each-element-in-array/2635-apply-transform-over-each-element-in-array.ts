function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let newArr = [];

    arr.forEach((item, index) => {        
        newArr.push(fn(item, index));
    });

    return newArr;
};