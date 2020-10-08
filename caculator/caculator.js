
function addition(){
    let x = parseInt ( document.getElementById("numberone").value);
    let y = parseInt ( document.getElementById("numbertwo").value);
        document.getElementById("result").innerHTML= (x+y);
    }
function subtraction() {
    let x = parseInt ( document.getElementById("numberone").value);
    let y = parseInt ( document.getElementById("numbertwo").value);
   document.getElementById("result").innerHTML=(x-y); 

}
function multiplication(){
    let x = parseInt ( document.getElementById("numberone").value);
    let y = parseInt ( document.getElementById("numbertwo").value);
    document.getElementById("result").innerHTML=(x*y);

}
function division(){
    let x = parseInt ( document.getElementById("numberone").value);
    let y = parseInt ( document.getElementById("numbertwo").value);
    document.getElementById("result").innerHTML=(x/y);
}