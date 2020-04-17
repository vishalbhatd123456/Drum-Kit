function add(num1,num2)
{
    return (num1 + num2);
}
function multiply(num1,num2)
{
    return (num1*num2);
}

function calc(num1,num2,operator)
{
    return operator(num1,num2);
}
function division(num1,num2)
{
    return num1/num2;
}

function subtract(num1,num2)
{
    return(num1-num2);
}


calc(2,5,subtract)