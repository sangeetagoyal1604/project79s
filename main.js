menu_list_array =["chicken tandoori pizza",
"veg supreme pizza",
"paneer tikka pizza",
"deluxe veggie pizza",
"veg extravaganza pizza"];
function getmenu(){
    var htmldata;
    htmldata="<o1 class='menulist'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
       htmldata=htmldata+"<li>"+ menu_list_array[i]+"<li>"
        
    }
    htmldata=htmldata+"<o1>"
    Document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item() {
var htmldata;
var item=document.getElementById("add_item").Value; 
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'>"
for (var i=0; i < menu_list_array.length; i++) {
    htmldata=htmldata+"<div class='card'>"+'<img src="images\pizzaImg.png">'+menu_list_array[i]+"</div>"
    
    
}  
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}