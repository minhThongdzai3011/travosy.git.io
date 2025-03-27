$(document).ready(function(){
    let dem = 0;
    let a = 0;
    let chuot = 1;
    $('.header-dashboard-hero-infomation-hover').hover(function(){
        if (chuot != 0) {
            a++;
            console.log(a);
            if (a % 2 === 0) {
                $(".line3-hero").css('opacity', '0');
            } else {
                $(".line3-hero").css('opacity', '1');
            }
        }
    });

    $('.header-dashboard-hero-infomation-hover').click(function(){
        dem++;
        if (dem % 2 === 0) {
            $(".line3-hero").css('opacity', '0');
            chuot = 1; 
        } else {
            $(".line3-hero").css('opacity', '1');
            chuot = 0; 
        }
    });
});
$(document).ready(function(){
    let dem = 0;
    let a = 0;
    let chuot = 1;
    $('.header-dashboard-listing-infomation-hover').hover(function(){
        if (chuot != 0) {
            a++;
            console.log(a);
            if (a % 2 === 0) {
                $(".line3-listing").css('opacity', '0');
            } else {
                $(".line3-listing").css('opacity', '1');
            }
        }
    });

    $('.header-dashboard-listing-infomation-hover').click(function(){
        dem++;
        if (dem % 2 === 0) {
            $(".line3-listing").css('opacity', '0');
            chuot = 1; 
        } else {
            $(".line3-listing").css('opacity', '1');
            chuot = 0; 
        }
    });
});
$(document).ready(function(){
    let dem = 0;
    let a = 0;
    let chuot = 1;
    $('.header-dashboard-pages-infomation-hover').hover(function(){
        if (chuot != 0) {
            a++;
            console.log(a);
            if (a % 2 === 0) {
                $(".line3-pages").css('opacity', '0');
            } else {
                $(".line3-pages").css('opacity', '1');
            }
        }
    });

    $('.header-dashboard-pages-infomation-hover').click(function(){
        dem++;
        if (dem % 2 === 0) {
            $(".line3-pages").css('opacity', '0');
            chuot = 1; 
        } else {
            $(".line3-pages").css('opacity', '1');
            chuot = 0; 
        }
    });
});
$(document).ready(function(){
    let dem = 0;
    let a = 0;
    let chuot = 1;
    $('.header-dashboard-blog-infomation-hover').hover(function(){
        if (chuot != 0) {
            a++;
            console.log(a);
            if (a % 2 === 0) {
                $(".line3-blog").css('opacity', '0');
            } else {
                $(".line3-blog").css('opacity', '1');
            }
        }
    });

    $('.header-dashboard-blog-infomation-hover').click(function(){
        dem++;
        if (dem % 2 === 0) {
            $(".line3-blog").css('opacity', '0');
            chuot = 1; 
        } else {
            $(".line3-blog").css('opacity', '1');
            chuot = 0; 
        }
    });
});
$(document).ready(function(){
    let dem = 0;
    $('.header-dashboard-all-infomation-click').click(function(){
        dem++;
        if (dem % 2 === 0) {
            $(".line3-input").css('opacity', '0');
        } else {
            $(".line3-input").css('opacity', '1');
        }
    });
});
$(document).ready(function(){
    $('#love_red').click(function(){
        $(this).toggleClass('red1');
    });
});
$(document).ready(function(){
    $('#love_red1').click(function(){
        $(this).toggleClass('red1');
    });
    $('#love_red2').click(function(){
        $(this).toggleClass('red1');
    });
    $('#love_red3').click(function(){
        $(this).toggleClass('red1');
    });
    $('#love_red4').click(function(){
        $(this).toggleClass('red1');
    });
    $('#love_red5').click(function(){
        $(this).toggleClass('red1');
    });
    $('#love_red6').click(function(){
        $(this).toggleClass('red1');
    });
    $('#love_red7').click(function(){
        $(this).toggleClass('red1');
    });
    $('#love_red8').click(function(){
        $(this).toggleClass('red1');
    });
});
 function lienhe(){
    let email = document.getElementById('email').value;
    alert("Chúng tôi sẽ liên hệ với bạn qua email : " + email);
    document.getElementById('email').value = '';
 }
let dem=0, a=0,b=0;
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('change_background').addEventListener('click', function() {
        const time = 2000;
        dem++;
        if (dem % 2 != 0){
            a++;
            if ( a%2!=0){
                this.style.backgroundImage = "url('anh_nen/villa_header_2.jpg')";
            }
            else{
                this.style.backgroundImage = "url('https://img4.thuthuatphanmem.vn/uploads/2020/05/13/anh-nen-bai-bien-4k_062607256.jpg')";
            }
        }
        else {
            b++;
           if ( b%2!=0){
            this.style.backgroundImage = "url('https://2.bp.blogspot.com/-yNFb_4CDX2I/UZCLpmW0_QI/AAAAAAAAIjU/fLDk70peB0c/s1600/hinh-anh-song-bien-1.jpg')";
           }
           else {
            this.style.backgroundImage = "url('anh_nen/villa_nen_10.png')";
           }
        }
        console.log(dem);
    });
});

document.addEventListener('DOMContentLoaded', function() {  
    var dem = 0; // Khai báo biến đếm  
    var bodyElement = document.body; // Di chuyển khai báo biến bodyElement ra phạm vi toàn cục  

    document.getElementById('communication').addEventListener('click', function() {  
        dem++;  
        if (dem % 2 != 0) {  
            bodyElement.classList.remove('body-introduce');  
            bodyElement.classList.add('body-introduce1');  
            console.log("da xoa may bay");
        } else {  
            bodyElement.classList.remove('body-introduce1');  
            bodyElement.classList.add('body-introduce');  
            console.log("da them may bay");
        }  
        console.log(dem);  
    });  
});