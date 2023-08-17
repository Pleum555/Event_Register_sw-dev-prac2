function valueIsValid(){
    var companyname = document.getElementById('companyName').value;
    var chairnumber = document.getElementById('chairnumber').value;
    var boothsize = document.getElementById('boothsize').value;
    var contact = document.getElementById('contact').value;
    var phone = document.getElementById('phone').value;
   
    if(companyname == "")alert('ไม่มีชื่อบริษัท');
    else if(boothsize == "")alert('กรุณาเลือกขนาดบูธ');
    else if(chairnumber <= 0 || chairnumber.value >= 11)alert('จำนวนเก้าอี้ต้องอยู่ระหว่าง 1 ถึง 10 เท่านั้น');
    else if(contact == "")alert('ไม่มีชื่อผู้ติดต่อ');
    else if(phone == "")alert('ไม่มีเบอร์ผู้ติดต่อ');
}