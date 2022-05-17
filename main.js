function setup()
{
    canavs = createCanvas(280 , 280);
    canvas.center();
    background("white");
    canvas.mouseResleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function preload() {
    classifier = ml.imageClassfier('DoodleNet');
}
function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX , pmouseY , mouseX , mouseY);
    }
}

function gotResult(error , results) {
    if (error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'label:' + results[0].label;
    document.getElementById('confidence').innerHTML = 'confidence:' + Math.round(results[0].confidence * 100) + '%'; 
}

function clearCanvas(){
    background("white");
}
