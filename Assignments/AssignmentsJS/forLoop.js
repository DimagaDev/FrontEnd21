let success = false ;
do {
    console.log("Please enter two digits to print even numbers");
    const start = prompt("The first digit: ")
    const end = prompt("The second digit: ")

    if (start > 0 && end > 0){
        for (let index = start; index <= end; index ++) {
            if (index % 2 == 0 && index != 0) {
                console.log(index); 
            }
        }
        success = true;
    }
    else {
        console.log("Please enter positive integers");
    } 


}
while (success == false)




