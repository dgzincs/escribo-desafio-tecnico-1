let getNumber = prompt("Insira o número", 11);

function sumOfMultiplesOf3Or5(num)
{
	let count = 0;

	for (let i = 0; i < num; i++)
	{
		if (i % 3 == 0 || i % 5 == 0) 
		{
			count += i;
		}
	}

	return count;
}

console.log(sumOfMultiplesOf3Or5(getNumber));
alert(sumOfMultiplesOf3Or5(getNumber));
// ...