const hailStone = num => {
	let count = 0;
	while (num !== 1) {
		num = num % 2 ? (3 * num) + 1 : num / 2;
		count++
	}

	return count;
}

console.log(hailStone(10)) //6
console.log(hailStone(23061912)) //71
