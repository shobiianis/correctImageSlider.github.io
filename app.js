
var displayImage=document.getElementById("displayImage");

var parentImages=document.getElementById("parentImages");
var allImages=parentImages.getElementsByTagName("img");


indexNumber=0;  
function displayImagehome(){

    displayImage.src=allImages[indexNumber].src;
}

displayImagehome();


function next(){
if(indexNumber==allImages.length-1){
    indexNumber=0;
    displayImage.src=allImages[indexNumber].src;
    displayImagehome();
 }else{
displayImage.src=allImages[indexNumber++].src;
displayImagehome();
}
}

function prev(){
    if(indexNumber==0){
      indexNumber=allImages.length-1;
      displayImage.src=allImages[indexNumber--].src;
      displayImagehome();  
    }
    else{
    displayImage.src=allImages[indexNumber--].src;
    displayImagehome();
    }


}