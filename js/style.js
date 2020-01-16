function resize_pics(){
    var height = $(window).height()
    $('#home').css("height", height);

    var pro_width = $('.list li>span').width();
    // $('.list li a').width(pro_width);
    $('.list li>span').height(pro_width);
}
resize_pics()

$(window).resize(function () {
    resize_pics();
});

new WOW().init();

var slide_tag = function () {
    $('header a').removeClass('active');
    $(this).addClass('active');
    var tag = $(this).attr('href');
    var top = $(tag).offset().top-50;
    var width = document.body.clientWidth;
    if(width < 992) {
        $('header ul').slideUp();
    }

    $("html,body").animate({scrollTop: top}, 1000);
};
$('header').on('click', 'a', slide_tag);

$(window).scroll(function() {
    var sTop = $(this).scrollTop();
    var height = $(window).height()
    if ( sTop-10 > height){
        $('header').addClass('fixed');
    }else{
        $('header').removeClass('fixed');
    }

    $('header ul li ').each(function () {
        var vm = $(this).find('a');
        var refElement = $(vm.attr("href"));

        if (refElement.position().top <= sTop+100 && refElement.position().top + refElement.height() > sTop+100) {
            $('header ul li a').removeClass("active");
            vm.addClass("active");
        }
        else{
            vm.removeClass("active");
        }
    });

    $('.chart').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

            $('.chart').easyPieChart({
                scaleColor: false,
                lineWidth: 15,
                lineCap: 'round',
                trackColor: '#E1E1E3',
                barColor: '#FB7D79',
                size: 130,
                easing: 'easeOutBounce',
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });
});


var menu = function () {
    $('header ul').slideToggle();
};
$('.menu').on('click', menu);

var protfolio = function () {
    $(this).addClass('active').siblings().removeClass('active')
};
$('#protfolio .list li').on('click mouseover', protfolio);
