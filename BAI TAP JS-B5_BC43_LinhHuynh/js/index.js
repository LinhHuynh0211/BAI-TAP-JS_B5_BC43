// console.log('abc')
// bài tập: quản lý tuyển sinh
function xuLyKetQuaTuyenSinh(){
    //input: number
    var diemChuan = document.getElementById('diemChuan').value;
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = document.getElementById('doiTuong').value;
    var diemMonA = document.getElementById('diemMonA').value;
    var diemMonB = document.getElementById('diemMonB').value;
    var diemMonC = document.getElementById('diemMonC').value;
    //output:number
    tongDiemThi = 0;
    ketQua = '';
    //process
    tongDiemThi = Number(khuVuc) + Number(doiTuong) + Number(diemMonA) + Number(diemMonB) + Number(diemMonC);
    if(tongDiemThi > diemChuan && diemMonA >0 && diemMonB >0 && diemMonC > 0){
        document.getElementById('ketQuaTuyenSinh').innerHTML = 'Bạn đã ĐẬU và với số điểm là:' + tongDiemThi +' điểm';
    }
    else{
        document.getElementById('ketQuaTuyenSinh').innerHTML = 'Bạn đã RỚT và chúc bạn may mắn lần sau';
    }
}
// bài tập: tính tiền điện
function tinhTienDien (){
    //input
    var tenNguoiDung = document.getElementById('tenNguoiDung').value;
    var soKw = document.getElementById('soKw').value;
    //output
    tienDien = 0;
    // process
    if(soKw <= 50){
        tienDien = 500 * Number(soKw);
    }
    else if( soKw <= 100){
        tienDien = 500 * 50 + (soKw -50)*650;
    }
    else if( soKw <= 200){
        tienDien = 500 * 50 + (100 -50)*650 + (soKw -100)*850;
    }
     else if(soKw <=350){
        tienDien = 500 * 50 + 50*650 + 100*850 + (soKw - 200)*1100;
    }
    else{
        tienDien = 500 * 50 + 50 * 650 + 100 *850 + 150*1100 + (soKw -350)*1300;
    }
    document.getElementById('tienDien').innerHTML = tenNguoiDung +' - Số tiền điện là: ' + tienDien.toLocaleString() + ' VND';
}
// bài tập: tính tiền thuế
function tinhTienThue (){
    //input
    var tenNguoiDungThue = document.getElementById('tenNguoiDungThue').value;
    var tongThuNhapNam = document.getElementById('tongThuNhapNam').value;
    var soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value;
    //output
    tienThue = 0;
    // process
    if(tongThuNhapNam <= 60000000){
        tienThue = (tongThuNhapNam -4000000 - soNguoiPhuThuoc * 1600000) *0.05 ;
        if(tienThue >0){
            document.getElementById('tienThue').innerHTML = tenNguoiDungThue +' - Số tiền thuế thu nhập cá nhân là: ' + tienThue.toLocaleString() + ' VND';
        }
        else{
            alert('Số tiền nhập không hợp lệ')
        }
    }
    else if(tongThuNhapNam <= 120000000){
        tienThue = (tongThuNhapNam -4000000 - soNguoiPhuThuoc * 1600000) *0.1 ;
        if(tienThue >0){
            document.getElementById('tienThue').innerHTML = tenNguoiDungThue +' - Số tiền thuế thu nhập cá nhân là: ' + tienThue.toLocaleString() + ' VND';
        }
        else{
            alert('Số tiền nhập không hợp lệ')
        }
    }
    else if(tongThuNhapNam <= 210000000){
        tienThue = (tongThuNhapNam -4000000 - soNguoiPhuThuoc * 1600000) *0.15 ;
        if(tienThue >0){
            document.getElementById('tienThue').innerHTML = tenNguoiDungThue +' - Số tiền thuế thu nhập cá nhân là: ' + tienThue.toLocaleString() + ' VND';
        }
        else{
            alert('Số tiền nhập không hợp lệ')
        }
    }
    else if(tongThuNhapNam <= 384000000){
        tienThue = (tongThuNhapNam -4000000 - soNguoiPhuThuoc * 1600000) *0.2 ;
        if(tienThue >0){
            document.getElementById('tienThue').innerHTML = tenNguoiDungThue +' - Số tiền thuế thu nhập cá nhân là: ' + tienThue.toLocaleString() + ' VND';
        }
        else{
            alert('Số tiền nhập không hợp lệ')
        }
    }
    else if(tongThuNhapNam <= 624000000){
        tienThue = (tongThuNhapNam -4000000 - soNguoiPhuThuoc * 1600000) *0.25 ;
        if(tienThue >0){
            document.getElementById('tienThue').innerHTML = tenNguoiDungThue +' - Số tiền thuế thu nhập cá nhân là: ' + tienThue.toLocaleString() + ' VND';
        }
        else{
            alert('Số tiền nhập không hợp lệ')
        }
    }
    else if(tongThuNhapNam <= 960000000){
        tienThue = (tongThuNhapNam -4000000 - soNguoiPhuThuoc * 1600000) *0.3 ;
        if(tienThue >0){
            document.getElementById('tienThue').innerHTML = tenNguoiDungThue +' - Số tiền thuế thu nhập cá nhân là: ' + tienThue.toLocaleString() + ' VND';
        }
        else{
            alert('Số tiền nhập không hợp lệ')
        }
    }
    else {
        tienThue = (tongThuNhapNam -4000000 - soNguoiPhuThuoc * 1600000) *0.3 ;
        if(tienThue >0){
            document.getElementById('tienThue').innerHTML = tenNguoiDungThue +' - Số tiền thuế thu nhập cá nhân là: ' + tienThue.toLocaleString() + ' VND';
        }
        else{
            alert('Số tiền nhập không hợp lệ')
        }
    }  
}
// bài tập: tính tiền cáp
//ẩn hiện số kết nối
{
    document.getElementById('loaiKhachHang').onclick = function(){
        var loaiKhachHang = document.getElementById('loaiKhachHang').value;
        // var divSoKetNoi = document.getElementById('divSoKetNoi').value;
        var nhaDan = document.getElementById('nhaDan').value;
        if(loaiKhachHang == nhaDan){
           document.getElementById('divSoKetNoi').className = 'd-none';
        }
        else {
            document.getElementById('divSoKetNoi').className = 'd-block w-25 mt-2';
        }
    }
    
function tinhTienCap (){
    //input
    var chonLoaiKhachHang = document.getElementById('chonLoaiKhachHang').value;
    var maKhachHang = document.getElementById('maKhachHang').value;
    var loaiKhachHang = document.getElementById('loaiKhachHang').value;
    var soKenhCaoCap = document.getElementById('soKenhCaoCap').value;
    var soKetNoi = document.getElementById('soKetNoi').value;
    
    //output
    tienCap = 0;
    // process
    if(loaiKhachHang == nhaDan){
        tienCap == 4.5 + 20.5 + 7.5*soKenhCaoCap
    }
    else if(loaiKhachHang == chonLoaiKhachHang){
        alert('Vui lòng chọn loại khách hàng')   
    }
    else{
        if(soKetNoi <=10){
            tienCap = 15 + 75 + 50*soKenhCaoCap
        }
        else{
            tienCap = 15 + 75 + 50*soKenhCaoCap + (soKetNoi-10)*5
        }
    }
    document.getElementById('tienCap').innerHTML = 'Mã khách hàng:'+ maKhachHang + '-- Số tiền là: ' + tienCap + ' $';
}


}