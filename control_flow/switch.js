const op="*"
const a=20
const b=12
switch (op) {
    case "+":
        console.log("Sum of two number is: ",a+b);
        break;
    case "-":
        console.log("Substraction of two number is: ",a-b);
        break;
    case "*":
        console.log("Multiplication of two number is: ",a*b);
        break;

    default:
        console.log("Something went wrong");
        break;
}