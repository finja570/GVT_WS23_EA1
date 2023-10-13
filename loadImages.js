/**
 * @author Finja Wegener
 */

var rotation = false; // whether or not the disc is currently in rotation
var transform = 0.0;  // current disc transformation

function pageLoad(){
    loadImage('scheibe.png', 'ScheibeImg');
    loadImage('kitty.png', 'KittyImg');
    addListeners();
}

/**
 * load an image into an html element 
 * @param {string} filename - name of the image to be displayed
 * @param {string} id - id of the html element in which the image is to be placed
 */

function loadImage(filename,id) {
    var imageObj = new Image(); 
    imageObj.onload = function() {
        var img = document.getElementById(id);
        img.setAttribute('src', this.src);
    };
    imageObj.src = "images/" + filename;
}


function addListeners(){
    window.addEventListener('keydown', (evt)=> {
        switch(evt.code){
            case 'KeyA':
                aPressed()
                break;
            case 'KeyL' :
                lPressed();
                break;
            case 'KeyR' :
                rPressed();
                break;        
        }
    })
}


/**
 * start or stop disc rotation
 */
function aPressed(){
    var scheibe = document.getElementById("ScheibeImg");
    if(rotation == false){
        scheibe.setAttribute('class', 'Scheibe_Sprite_Run');
        rotation = true;
    } else{
        scheibe.setAttribute('class', 'Scheibe_Sprite');
        rotation = false;
    }
}

/**
 * rotate the disc 30° to the left
 */
function lPressed(){
    const scheibe = document.getElementById("ScheibeImg");
    
    if (transform > -0.5){
        transform = -91.66;
    } else{
        transform = transform + 8.3333;
    }
        
    scheibe.style.transform = "translateX("+ transform + "%)";
}

/**
 * rotate the disc 30° to the right
 */
function rPressed(){
    const scheibe = document.getElementById("ScheibeImg");
    if (transform < -90){
        transform = 0;
    } else{
        transform = transform - 8.3333;
    }

    scheibe.style.transform = "translateX("+ transform + "%)";
}