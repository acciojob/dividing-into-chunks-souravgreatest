const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans=[],temp=[]
	let i=0,sum=0
	for(let j=0;j<arr.length;j++)
	{
		if(arr[j]>n)
		{
			if(temp.length>0)
			{
				ans.push(temp)
				temp=[]
				sum=0
			}
			continue;
		}
		if(sum+arr[j]<=n)
		{
			sum+=arr[j];
			temp.push(arr[j])
		}
		else
		{
			if(temp.length>0)
			{
				ans.push(temp)
			}
			temp=[arr[j]]
			sum=arr[j] 
		}
	}
	if(temp.length>0)ans.push(temp)
	return ans
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
