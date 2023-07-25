currentRotation = 0;
aui = document.getElementById("MyAudio")

quick_data_draw_set = ['Heart', 'Star', 'Flower', 'Smiley face', 'Sun', 'Cloud', 'Tree', 'House', 'Cat', 'Dog',
  'Butterfly', 'Fish', 'Bird', 'Car', 'Bicycle', 'Cupcake', 'Ice cream cone', 'Pizza slice', 'Banana',
  'Apple', 'Book', 'Music note', 'Moon', 'Rocket', 'T-shirt', 'Umbrella', 'Boat', 'Soccer ball', 'Football',
  'Basketball', 'Tennis racket', 'Sunglasses', 'Hat', 'Watch', 'Camera', 'Guitar', 'Key', 'Lock', 'Lightbulb',
  'Clock', 'Mountain', 'Beach ball', 'Palm tree', 'Sailboat', 'Hot air balloon', 'Rainbow', 'Snowflake',
  'Tornado', 'Umbrella', 'Sunflower', 'Coffee cup', 'Donut', 'Penguin', 'Elephant', 'Giraffe', 'Turtle',
  'Dolphin', 'Rocketship', 'Alien', 'Helicopter', 'Plane', 'Truck', 'Train', 'Castle', 'Robot', 'Ghost',
  'Spider', 'Bat', 'Spiderweb', 'Lightning bolt', 'Speech bubble', 'Arrow', 'Spiral', 'Infinity symbol',
  'Peace sign', 'Wi-Fi symbol', 'WiFi waves', 'Battery icon', 'Shopping cart', 'Dollar sign', 'Question mark',
  'Exclamation mark', 'Music symbol', 'WiFi signal bars', 'Magnifying glass', 'Heart with an arrow',
  'Music player icon', 'Email symbol', 'Puzzle piece', 'Chess piece (e.g., pawn)', 'Paint palette', 'Pencil',
  'Paintbrush', 'Scissors', 'Sun with sunglasses', 'Lightning bolt with eyes', 'Moon with a hat', 'Smiling cloud',
  'Cup of coffee with a smile', 'Dancing stick figure'];
random_number = Math.floor((Math.random()*quick_data_draw_set.length)+1);
console.log(quick_data_draw_set[random_number]);
sketch = quick_data_draw_set[random_number];
document.getElementById("tbd").innerHTML="Sketch To be drawn:"+sketch;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
}


function setup(){
    canvas = createCanvas(250,150)
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function draw() {
        strokeWeight(7);
        stroke(0);
    

        if (mouseIsPressed) {
          line(pmouseX, pmouseY, mouseX, mouseY);
        }

        check_sketch()

    if (drawn_sketch === sketch) {
      answer_holder = "set";
      score++;
      document.getElementById("score").innerHTML = "Score: " + score;
    }
  };

  function classifyCanvas() {
    classifier.classify(canvas, gotResult);


  }

function gotResult(error, results) {
    if (error) {
      console.error(error);
    }
    else{
        console.log(results);

        drawn_sketch = results[0].label;
        document.getElementById("label").innerHTML = "Your Sketch: " + drawn_sketch;
    

         confidenceValue = Math.floor(results[0].confidence * 100);
         console.log(confidenceValue)
         document.getElementById("confidence").innerHTML = "Confidence: " + confidenceValue.toFixed(2) + "%";
    }
}
function  check_sketch() {
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer: " + timer_counter;
    console.log(timer_counter);

    if (timer_counter > 400) {
      timer_counter = 0;
      timer_check = "completed";
    }

    if (timer_check == "completed" ||  answer_holder == "set") {
      timer_check = "";
      answer_holder = "";
      updateCanvas();
    }
  }

function updateCanvas(){
 background('white');
 random_number = Math.floor((Math.random()*quick_data_draw_set.length)+1);
  console.log(quick_data_draw_set[random_number]);
  sketch = quick_data_draw_set[random_number];
  document.getElementById("tbd").innerHTML="Sketch To be drawn:"+sketch;
}

function Balllin(){
    var bodyElement = document.body;
    currentRotation += 15;
    bodyElement.style.transform = 'rotate(' + currentRotation + 'deg)';
}    

function fort(){
    aui.play();
    setInterval(Balllin, 400);
}

function clearCanvas(){
    background("white");
}