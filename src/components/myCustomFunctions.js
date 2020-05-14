import React from "react"

export function numbers(num)
{
  var numberPrint=[];
  for(let i=1;i<num;i++)
  {
    numberPrint.push(i)
    numberPrint.push(<br />);
  }

  return (numberPrint)
}
console.log('dd');