function checkngay(){
    with(frm){
        var thang = eval(month.value);
        switch(thang){
            case 4:case 6:case 9:case 11:
                ketQua.value="tháng "+thang+" có 30 ngày";
                break;
            case 2:
                var y=year.value;
                if((y%4==0 && y%100!=0) || (y%400==0)){
                    ketQua.value= "tháng " + thang + " năm " + y + " có 29 ngày";
                }else{
                    ketQua.value= "tháng " + thang + " năm " + y + " có 28 ngày";

                }
                break;
            default:
                ketQua.value="tháng "+thang+" có 31 ngày";
        }
    }
    return false;
}
