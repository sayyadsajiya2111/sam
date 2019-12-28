exports.factorial=function(n)
{
	fact=1;
	for(i=1;i<=n;i++)
	{
		console.log("in factorial");
		
		fact=fact*i;
	}
	return fact;
}