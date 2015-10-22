//console.log(process.argv.slice(2));
var sum = 0;
process.argv.slice(2).forEach(function(n) {
	sum += Number(n);
});
console.log(sum);