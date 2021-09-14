function tamgiac(){
    var canhA = document.getElementById("canha").value * 1;
    var canhB = document.getElementById("canhb").value * 1;
    var canhC = document.getElementById("canhc").value * 1;
    var loaiTamGiac = "";

    if(canhA * canhA + canhB * canhB === canhC * canhC){
        loaiTamGiac = "Tam Giác Vuông";
    }else if(canhA * canhA + canhB * canhB === canhC * canhC && canhA === canhB){
        loaiTamGiac = "Tam Giác Vuông Cân";
    }else if(canhA === canhB && canhB === canhC){
        loaiTamGiac = "Tam Giác Đều";
    }else if (canhA === canhB){
        loaiTamGiac = "Tam Giác Cân"
    }else {
        loaiTamGiac = "Tam Giác Thường"
    }

    document.getElementById("footerCardtamgiac").innerHTML = "là" + loaiTamGiac;
}