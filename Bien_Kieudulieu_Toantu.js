function myFunction(){
    L= prompt("Nhập điểm môn Lý:");
    H= prompt("Nhập điểm môn Hóa");
    S = prompt("Nhập điểm môn Sinh");
    let x= parseInt(L);
    let y= parseInt(H);
    let z=parseInt(S);
    alert("Điểm trung bình 3 môn Lý Hóa Sinh là:"+(x+y+z)/3)
  
}
function changeTemp(){
    t= prompt("Nhập nhiệt độ C:");
    let c= parseInt(t);
    alert("Nhiệt độ F là : "+ (5/9)*c+32) ;

}
function circleArea(){
    r=parseInt(prompt("Nhập bán kính của hình tròn:"));
   let Sc= r*r*3.14;
       alert("Diện tích hình tròn:"+ Sc);


}
function circumference(){
    d=parseInt(prompt("Nhập đường kính hình tròn:"));
    let cc= d*3.14;
    document.getElementById("cir").innerHTML= ("Chu vi hình tròn là:"+cc);
}
