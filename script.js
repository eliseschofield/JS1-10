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

