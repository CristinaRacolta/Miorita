/*
    Based on a famous Romanian novel, The hatchet (Baltagul),
    Miorița has to find the hatchet and bring it to Vitoria.

    The hatchet always starts right in front of Miorița.
    Vitoria is always at the bottom-right corner of the sheepfold.
*/
reset();
move();
pick("hatchet")
turnRight();
function superMove(times = 1)
{
   
    for(var i = 0; i < times; i = i+1) {
        move()
    }
}

superMove(4);
turnLeft();
superMove(3);
drop("hatchet");