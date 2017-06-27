let args = process.argv.slice(2);
let intArrSum = 0;

args.forEach(function (int) {
    intArrSum += +int;
});

console.log(intArrSum);
