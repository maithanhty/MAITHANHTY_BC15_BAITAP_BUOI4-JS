function chaoHoi(){
   var aiSuDung = document.getElementById("aidangsd").value ;
   var ai = "";
   switch (aiSuDung){
       case "B":
           ai = "xin chào bố";
           break;
        case "M":
            ai = "xin chào mẹ";
            break;
        case "A":
            ai = "xin chào anh trai";
            break;
        case "E":
            ai = "xin chào em gái"
            break;
        default:
           alert("Xin nhập kí tự B M A E tương ứng");
   }

   document.getElementById("footerCardChaoHoi").innerHTML = ai;
   
}