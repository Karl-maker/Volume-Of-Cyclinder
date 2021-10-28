var height, radius;
const PIE = 3.14;

const computeVolumn = () =>{
    height = document.getElementById("height").value;
    radius = document.getElementById("radius").value;
    document.getElementById("height").value = "";
    document.getElementById("radius").value = "";
    radius = parseInt(radius, 10);
    height = parseInt(height, 10);
            
    if(!isNaN(height) && !isNaN(radius)){

        var result;
        //V=πr^2h

        result = PIE * (radius * radius) * height;
        printAnswer(result);
        
    } else {
        document.getElementById("main-display").innerHTML = `Please only enter numbers...`;
        return;
    };
}

const printAnswer = (result) =>{
    document.getElementById("main-display").innerHTML = `for a cylinder of height ${height} and radius ${radius} its volume is ${result} units of volume`;
    height = 0;
    radius = 0;
}