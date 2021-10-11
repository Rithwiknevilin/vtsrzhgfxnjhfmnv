prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_qualtity:90
});

camera = document.getElementById("camera")

webcam.attach('#cmera');


function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/>';
    
    });
}
console.log('m15 version:', m15 .version);

classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded( ){
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check(){
    img =document.getElementById('capture_image');
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(results);
        document.getElementById("result_emotion_name").innerHtml = results[0].label;
        document.getElementById("result_emotion_name2").innerHtml = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "happy"){
            
        }
    }

}