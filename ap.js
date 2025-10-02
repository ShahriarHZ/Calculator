const display=document.getElementById("display");
function appemftodisplay(input){
    display.value+=input;

}
function appemftoClear(){
    display.value="";
}
function calculate(){
    try{
display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
    
    
}