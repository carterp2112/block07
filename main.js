//Block 07 Workshop: Opening the Vault

/* Pseudocode for the project:

Variable Message is the Message.

Variable code part one is 5 times 2.
Variable code part two is 80 divided by 2.
Variable code part three is 37 plus 2.

Alert with the message, and three code parts separated by hyphens.*/

//Message for the user.
const message = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination:';

//Set the variables for the sections of the code.
let codePart1 = 5 * 2;
let codePart2 = 80 / 2;
let codePart3 = 37 + 2;

//Make the alert and show the user.
alert(`${message} \n ${codePart1}-${codePart2}-${codePart3}`);