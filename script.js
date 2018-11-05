function sleepIn(weekday, vacation)
{
    if (weekday == true && vacation == false)
    {
        return (false);
    }

    return (true);
}

function monkey_trouble(a_smile, b_smile)
{
    if (a_smile == true && b_smile == false)
    {
        return (false);
    }
    if (a_smile == false && b_smile == false)
    {
        return (true);
    }
    if (a_smile == false && b_smile == true)
    {
        return (false);
    }
    if (a_smile == true && b_smile == true)
    {
        return (true);
    }
    return (true)
}

function string_times(word, num){
    var newString = '';
    for(var i = 0; i < num; i++){

        newString = newString +  word;

    }
    return newString;
}

function front_times(word, num){

    var newString = '';

    for(var i = 0; i < num; i++){

        newString = newString + word.substr(0, 3);
    }
    return newString;
}

function string_bits(word){
    var new_string = '';

    for(var i = 0; i <word.length / 2; i++){
        new_string = new_string + word.substr(i*2 , 1)
    }

    return new_string;
}

function caughtSpeeding(speed, birthday){
    if(birthday == true){
        speed = speed -5;
    }

    if(speed <= 60){
        return 0;
    }
    if(speed <= 80 && speed >= 61){
        return 1;
    }

    return 2;

}

function fizz_buzz(num){
    if(num%3 == 0 && num%5 == 0){
        return 'FizzBuzz';
    }

    if(num%3 == 0){
        return 'Fizz';
    }
    if(num%5 ==0){
        return 'Buzz';
    }
    return num + '!';
}

function teaParty(tea, candy){
    if(tea < 5 || candy < 5){
        return 0;
    }
    if(tea >= candy*2 || candy >= tea*2){
        return 2;
    }
    if(tea >=5 && candy >= 5){
        return 1;
    }


}


function blackjack(x, y){
    var diffX = 21 - x
    var diffY = 21-y

    if(x >21 && y>21){
        return 0;
    }
    if(x >21){
        return y;
    }
    if(y>21){
        return x;
    }

    if(diffX>diffY){
        return y;
    }
    if(diffX<diffY){
        return x;
    }
}

function loneSum(x, y, z){
    if(x==y && y==z && x==z){
        return 0;
    }
    if(x == y){
        return z;
    }
    if(x== z){
        return y;
    }
    if(y==z){
        return x;
    }
    return x + y + z;
}



//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += '-';
    document.getElementById("output").innerHTML += sleepIn(false, false);
    document.getElementById("output").innerHTML += '-';
    document.getElementById("output").innerHTML += sleepIn(false, true);
    document.getElementById("output").innerHTML += '-';
    document.getElementById("output").innerHTML += sleepIn(true, true);

    document.getElementById("output1").innerHTML += monkey_trouble(true, false);
    document.getElementById("output1").innerHTML += '-';
    document.getElementById("output1").innerHTML += monkey_trouble(false, false);
    document.getElementById("output1").innerHTML += '-';
    document.getElementById("output1").innerHTML += monkey_trouble(false, true);
    document.getElementById("output1").innerHTML += '-';
    document.getElementById("output1").innerHTML += monkey_trouble(true, true);

//    document.getElementById("output").innerHTML += string_times('bro',4);
//    document.getElementById("output").innerHTML += string_times('dude',2);
//    document.getElementById("output").innerHTML += string_times('yeah',0);
//    document.getElementById("output").innerHTML += string_times('o ',20);
//    document.getElementById("output").innerHTML += string_times('',100);



//    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}

