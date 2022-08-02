/*
    The Escape
    ==========

    Miorița is in the middle of a sheepfold of random size.
    She was surrounded by fences, but one of them broke down.
    She starts facing a random direction.

    Help her get to the grass zone at the edge of the sheepfold.
*/
reset();
function turnAround() // After the name, we always need a set of parenthesis.
// The instructions that a function does are grouped in a block, so we use {curly braces}
{
    turnRight()
    turnRight()
}
turnAround();
move();

turnRight();
function superMove(times=1){

    for(var i=0; i<times; i++){
        move();
    }
}
superMove(2);