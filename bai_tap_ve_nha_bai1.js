/**
 * xuất số nguyên theo thứ tự tăng dần
 */




function xuatsoNguyen(){
    var a = document.getElementById("soNguyen1").value ;
    var b = document.getElementById("soNguyen2").value;
    var c = document.getElementById("soNguyen3").value ;
    var d = 0;

    if (parseInt(a) > parseInt(b)){
        d = a;
        a = b;
        b = d;
        console.log(a);
    }
    if(parseInt(a) > parseInt(c)){
        d = a;
        a = c;
        c = d;
        console.log(a);
    
    }
    //chuyển số bé nhì vào b
    if(parseInt(b) > parseInt(c)){
        d = b;
        b = c;
        c = d;
    }
    document.getElementById("footerCardThuTu").innerHTML = "Xuất số nguyên theo thứ tự " + a + " " + b+" " + c;
}