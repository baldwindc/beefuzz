
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
function fizz(i) { 
    var beelink = '<iframe width="560" height="315" src="https://www.youtube.com/embed/0fH3ulUT14o?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    if (i % 3 === 0 && i % 5 === 0) { 
        $("#fizzvalue").text("Fizzbuzzing...");
        console.log("Fizzbuzzing...<" + i + ">");
    }
    else if (i % 3 === 0) { 
        $("#fizzvalue").text("Fizzing...<" + i + ">");
        $("#beesnest").append(beelink);
        console.log("Fizz...");
    }
    else if (i % 5 === 0) { 
        $("#fizzvalue").text("Buzzing...<" + i + ">");
        console.log("Buzz...");
    }
}

async function start() { 
    for(var i = 0; i < 100; i++) { 
        fizz(i);
        await sleep(1000);
    }
}