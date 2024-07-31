//write a program to find the sum of all the odd numbers for a limit 10
const lim=10
let sum=0
for(let i=1;i<=lim;i++)
{
    if(i%2!=0)
sum+=i;
}
console.log('sum of odd number to the limit 10 is ',sum);