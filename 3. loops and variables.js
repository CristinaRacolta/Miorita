reset();

let lista= [6, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1]

for(let culoar= 0; culoar< lista.lenght; culoar++) {
    for(let i= 0; i < lista[culoar]; i++)
    {
        move();
    }

   turnRight();
}



















/*
    Loops and variables
    ===================

    Repeating code is highly inefficient.
    Sometimes you may need to alter the code which means you may need to make the change as many
    times as it is repeated.

    Also, there may be times when you really don't know how many times you need to repeat.
*/

while(canMove()) {
  // The "while" command makes the following command repeat as long as the condition is true
  move()
}

/*
  What if you know exactly how many times you need to repeat? You can use variables.

  Variables hold information in the computer's memory.
  A variable can have any name you want, made from letters, numbers and some special characters.
  The name of the variable cannot start with a number
  To give a variable a value, you use the = sign, with the variable on the left and the value
  you want to assign to it on the right.
  The value you've given the variable will be used instead of the variable in future operations.

  In the programming language we use here, variables are defined using the "var" keyword.
*/

var iteration = 1

while (iteration < 7) {
  move()

  // The variable's value can change to anything you want,
  // including the result of a expression or even a command that returns a value.
  // There is nothing stopping us from the variable itself in that expression
  iteration = iteration + 1;
}

// The above is so often needed that there is a shorter way to do it:

for (var i = 1; i < 7; i = i + 1) {
  // The "for" command makes the following re-run as long as the second expression is true
  // The first expression runs only once before anything else
  // The last expression runs at the end of every iteration

  move()
}

/*
Variable names should be as descriptive as possible.
Longer names are harder to write, but most modern code editors can auto-complete them.

"i" is often used as short for "iteration", so it is OK.
*/

/*
CHALLENGE
=========
Help Miorița get to the center of the spiral
*/