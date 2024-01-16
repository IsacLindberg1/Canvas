let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let sunX = -10;

//Gräs
context.fillStyle = "green";
context.fillRect(0, 100, 300, 60);

//Sol
function drawnSun(){
    //Himmel
    let sky = context.fillStyle = "#73C2FB";
    context.fillRect(0, 0, 300, 100);

    context.beginPath();
    context.arc(sunX, 40, 20, 0, 2 * Math.PI);
    context.fillStyle = "#FBFF00";
    context.fill();

    sunX++;

    if(sunX > 120){
        context.fillStyle = "#FF6800";
        context.fill();

    }
    if(sunX > 330){
        sunX = -10;
    }

    //Vägg
    context.fillStyle = "#9F5700";
    context.fillRect(70, 70, 100, 60);

    //Här börjar de fyra stockarna till vänster
    context.beginPath();
    context.arc(70, 122.5, 7.5, 0, 2 * Math.PI);
    context.fillStyle = "#8D4D00";
    context.fill();

    context.beginPath();
    context.arc(70, 107.75, 7.5, 0, 2 * Math.PI);
    context.fillStyle = "#8D4D00";
    context.fill();

    context.beginPath();
    context.arc(70, 93, 7.5, 0, 2 * Math.PI);
    context.fillStyle = "#8D4D00";
    context.fill();

    context.beginPath();
    context.arc(70, 78, 7.5, 0, 2 * Math.PI);
    context.fillStyle = "#8D4D00";
    context.fill();
    //Här slutar de fyra stockarna till vänster

    //Här börjar de fyra stockarna till höger
    context.beginPath();
    context.arc(170, 122.5, 7.5, 0, 2 * Math.PI);
    context.fillStyle = "#8D4D00";
    context.fill();

    context.beginPath();
    context.arc(170, 107.75, 7.5, 0, 2 * Math.PI);
    context.fillStyle = "#8D4D00";
    context.fill();

    context.beginPath();
    context.arc(170, 93, 7.5, 0, 2 * Math.PI);
    context.fillStyle = "#8D4D00";
    context.fill();

    context.beginPath();
    context.arc(170, 78, 7.5, 0, 2 * Math.PI);
    context.fillStyle = "#8D4D00";
    context.fill();
    //Här slutar de fyra stockarna till höger

    //Plankar på väggen
    context.fillStyle = "#8D4D00";
    context.fillRect(70, 70, 100, 5);

    context.fillStyle = "#8D4D00";
    context.fillRect(70, 85, 100, 5);

    context.fillStyle = "#8D4D00";
    context.fillRect(70, 100, 100, 5);

    context.fillStyle = "#8D4D00";
    context.fillRect(70, 115, 100, 5);
    //PLankor på väggen

    //Här börjar yttedörren
    context.fillStyle = "#7C4400";
    context.fillRect(105, 60, 30, 70);

    context.beginPath();
    context.arc(110, 100, 2, 0, 2 * Math.PI);
    context.fillStyle = "#613500";
    context.fill();
    //Här slutar yttedörre

    //Här börjar taket
    context.beginPath();
    context.moveTo(70, 70); 
    context.lineTo(120, 10); 
    context.lineTo(170, 70); 
    context.closePath(); 
    context.fillStyle = "#9F5700";
    context.fill(); 
    //Här slutar taket

    //Här börjar plankan mellan tak och vägg
    context.fillStyle = "#8D4D00";
    context.fillRect(75, 55, 88, 5);

    context.fillStyle = "#8D4D00";
    context.fillRect(90, 40, 58, 5);


    //Här slutar plankan mellan tak och vägg

    //Här börjar vänstra takpanelen
    context.save();
    context.translate(20 + 4, 60 + 40);
    context.rotate(Math.PI / 4);
    context.fillStyle = "#7C4400";
    context.fillRect(4, -150, 10, 120);
    context.restore();
    //Här slutar vänstra takpanelen

    //Här börjar högra takpanelen
    context.save();
    context.translate(20 + 4, 60 + 40);
    context.rotate(Math.PI / -4);
    context.fillStyle = "#7C4400";
    context.fillRect(120, -15, 10, 120);
    context.restore();
    //Här slutar högra takpanelen

    //Här böjrar trädet
    context.fillStyle = "#4F2C00";
    context.fillRect(240, 90, 12.5, 50)

    context.beginPath();
    context.moveTo(275, 110); 
    context.lineTo(220, 110); 
    context.lineTo(245, 10); 
    context.closePath(); 
    context.fillStyle = "#004C11";
    context.fill(); 
    //Här slutar trädet


}

setInterval(drawnSun, 20);



