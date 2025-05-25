function abc()
{
    console.log(abc.xyz)
}

abc()
abc.xyz = 200;
abc.xyz = 300;
abc()

let arr = [1,2,3,4]

arr[100] = 500;

console.log(arr);

const arrr = [...1,2,3]
console.log(arrr);;