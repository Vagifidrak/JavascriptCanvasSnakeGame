var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var snakes = [];

vx = 10;
vy = 0;
var score = 0;

for (var b = 15; b > 0; b--) { //Ilanin olçüsü burda tənzimləndi

    snakes.push({
        "x": 10 * b,
        "y": 20
    })
}
pozX = Math.ceil(Math.random() * //düşmenin çıxma yerin 
    400);
pozY = Math.ceil(Math.random() * //bu hisseden elave edilir
    300);

function animation() {
    ctx.font = "25pt arial";
    ctx.fillText(score, 300, 50);



    ctx.clearRect(0, 0, 400, 300);
    snakes.pop(); //axirinci element pop ile silinir
    snakes.unshift({ //evvele element unshift ile elave olunur
        "x": snakes[0].x + vx,
        "y": snakes[0].y + vy
    });
    ctx.fillRect(pozX, pozY, 20, 20); //düşmən boyu

    for (var b = 0; b < snakes.length; b++) {

        ctx.fillRect(snakes[b].x, snakes[b].y, 20, 20) //ilanin ireliye getdiyini bu komanda ile gposteririk
    }

    if (snakes[0].x >= pozX && snakes[0].x <= pozX + 20) {
        if (snakes[0].y >= pozY && snakes[0].y <= pozY + 20) {

            snakes.push({
                "x": pozX + 20,
                "y": pozY + 20
            });

            pozX = Math.ceil(Math.random() * 400);
            pozY = Math.ceil(Math.random() * 300);

        }
    }

    //Sərhədlər Start
    if (snakes[0].x >= 498) {
        clearInterval(interval);
        alert("Ilanı boğdun Aytam")
    }
    if (snakes[0].x <= 0) {
        clearInterval(interval);
        alert("Ilanı boğdun Aytam")
    }
    if (snakes[0].y >= 497) {
        clearInterval(interval);
        alert("Ilanı boğdun Aytam")
    }
    if (snakes[0].y <= 0) {
        clearInterval(interval);
        alert("Ilanı boğdun Aytam")
    }
    //Sərhədlər End


}

addEventListener("keyup", tusYakala, false) //klaviyaturanin taninmasi

function tusYakala(e) {

    e = e || event;

    tus = e.keyCode;
    if (tus == 37) {
        vx = -20;
        vy = 0;
        if (vx == 20) {
            vx -= 20
        }

    }
    if (tus == 38) {
        vx = 0;
        vy = -20;
    }
    if (tus == 39) {
        vx = 20;
        vy = 0;
    }
    if (tus == 40) {
        vy = 20
        vx = 0;
    }
}


var interval = setInterval(animation, 100); //ilanin hərəkət sürətinin tənzimlnməsi