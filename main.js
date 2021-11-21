array_1=['pen','paper','book','bottle'];
random_number = Math.floor((Math.random()*array_1.length)+1);
console.log("random number: " + random_number);
document.getElementById("sketch").innerHTML = "Sketch to be drawn" + sketch;
timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
sc0re = 0;

function updateCanvas(){
    canvas.background("rgb(255, 255, 255)")
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    background("rgb(255, 255, 255)");
}

sketch = quick_draw_data_set[random_number].label;
random_number = Math.floor(Math.random()*quick_draw_data_set);
console.log(sketch);

function draw(){
    check_sketch();

    if(drawn_sketch == sketch){
        answer_holder = "set";
        score = score + 1;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}

function check_sketch(){
    timer_counter = timer_counter + 1;
    document.getElementById("timer").innerHTML = "Time: " + timer_counter + " seconds";
    console.log("Timer: " + timer_counter);
    if(timer_counter == 400){
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed"){
        timer_check = "";
        updateCanvas();
    }
    if(answer_holder == "set"){
        answer_holder = "";
        updateCanvas();
    }
}