function print() {
    console.log("** DVD Shop **")
    console.log("1. Select a DVD to Rent")
    console.log("2. Cost of rental")
    console.log("3. Customer details")
    console.log("4. Customer credit card details")
    console.log("5. Exit")
}

print();
const choice = prompt("Please enter your choice (1-5)");
if (choice == '1' || choice == '2' || choice == '3' || choice == '4') {
    print();
} else if (choice == '5') {
    window.close();
} else {
    alert('Error in number input, input number 1-5');
}