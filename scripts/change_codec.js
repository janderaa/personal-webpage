function codec_change_color(color_base,color_comp){

    var block_elements = document.getElementsByClassName("text-color-base");
    var other_block_elements = document.getElementsByClassName("text-color-complement");

    for (let index = 0; index < block_elements.length; index++) {
        block_elements[index].style.color=color_base;
    }

    for (let index = 0; index < other_block_elements.length; index++) {
        other_block_elements[index].style.color=color_comp;
    }
}

function change_background(BG){
    console.log(BG)
    document.getElementsByTagName('body')[0].style.backgroundImage = "url('res/snow-bg.jpg')";
    document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat)";
    document.getElementsByTagName('body')[0].style.backgroundAttachment = "fixed";
    document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
}

function set_default(){

    var block_elements = document.getElementsByClassName("text-color-base");
    var other_block_elements = document.getElementsByClassName("text-color-complement");

    for (let index = 0; index < block_elements.length; index++) {
        block_elements[index].style = "";
    }

    for (let index = 0; index < other_block_elements.length; index++) {
        other_block_elements[index].style = "";
    }

    
    document.getElementsByTagName("body")[0].style = "";

}

function serial_management(){
    let input = document.getElementsByTagName("input")[1].value;

    switch (input) {
        case "colorblue":
            codec_change_color("rgb(78, 110, 255)","rgb(135, 182, 253)");
            break;
        case "lonely":
            change_background("snow-bg.jpg");
            break;
        default:
            set_default();
            break;
    }
}