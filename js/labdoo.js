var labdoo = labdoo || {
    'account' : {},
    'info'    : {}
};
$(function(){
    // create a datepicker with default settings
    $('input:jqmData(role="datebox")').mobiscroll().date({ theme: 'android', display: 'bottom'}); // Shorthand for: $("#scroller").mobiscroll({ preset: 'date' });
    // login
    $('.login').click(function(){
        $.mobile.changePage("#main-page",{ transition: "fade" }); 
    });
    // labdoo init
    labdoo.info.status = 'tagged';
    labdoo.info.location = 'shanghai, China';
    labdoo.info.base_information = {
        'labdoo identifier' : '00001150',
        'model': 'model',
        'searial numb': '65N0AG017062'
    };
    //
    $('.lap-detail-image-camera').click(function(){
        navigator.camera.getPicture(_onPhotoDataSuccess, _onFail, { 
        quality: 50, 
        allowEdit : true,
        targetWidth: $('.lap-detail-image-mylaptop-wrapper')[1].offsetWidth, 
        targetHeight: $('.lap-detail-image-mylaptop-wrapper')[1].offsetHeight, 
        correctOrientation: false,
        }); 
    });
    //
    _onPhotoDataSuccess = function(imageData) {
      // 取消註解後可以透過 console 來監看轉成 base64 編碼後的影像資料
      //console.log(imageData);
 
      // 取得影像 DOM
      //
      var smallImage = $('#lap-detail-image-mylaptop')[0];
      // 顯示已拍攝的照片
      // 利用內嵌 CSS 來縮放圖片
      //
      smallImage.style.backgroundImage="url('data:image/jpeg;base64," + imageData + "')";
      //smallImage.src = "data:image/jpeg;base64," + imageData;
    }
    _onFail = function (message) {
      alert('Failed because: ' + message);
    }
    $('#detail-edit-page-1').bind("swipeleft",function(){
        $.mobile.changePage($('#detail-edit-page-2'),{ transition: "slide" }); 
    });
    $('#detail-edit-page-2').bind("swipeleft",function(){
        $.mobile.changePage($('#detail-edit-page-3'),{ transition: "slide" }); 
    });
    $('#detail-edit-page-3').bind("swiperight",function(){
        $.mobile.changePage($('#detail-edit-page-2'),{ transition: "slide" ,reverse: true}); 
    });
    $('#detail-edit-page-2').bind("swiperight",function(){
        $.mobile.changePage($('#detail-edit-page-1'),{ transition: "slide" ,reverse: true}); 
    });
//    $('.pull-down').click(function(){
//        $( "#mypanel" ).panel("open","animate");
//    });
    $(document).delegate('.detail-edit-page', 'pageshow', function () {
        var $page = $(this),
            $target = $(this).find('.fullHeight'),
            t_padding = parseInt($target.css('padding-top'))
                        + parseInt($target.css('padding-bottom')),
            w_height = $(window).height(),     // "-65" is to compensate for url bar. Any better ideas?
            headFootHeight = 0,
            $target = $(this).find('.process-dots-wrapper'),
            d_padding = parseInt($target.css('padding-top'))+parseInt($target.css('padding-bottom'));
    
        // Get total height for all headers and footers on page
        $page.find('[data-role="footer"], [data-role="header"]').each(function() {
            var myTotalHeight = $(this).height()
                                + parseInt( $(this).css('padding-top') )
                                + parseInt( $(this).css('padding-bottom') );
            headFootHeight += myTotalHeight;
        });
        var the_height = (w_height - headFootHeight);
        $page.find('.fullHeight').css('min-height',the_height - t_padding-d_padding);
    });
    $(document).delegate('#list-page', 'pageshow', function () {
        $('.top-tip-toggle').unbind('click');
        $('.top-tip-toggle').removeClass('pull-down').addClass('pull-up').find('span').html('');
        var $page = $(this),
            $target = $(this).find('.top-tip'),
            t_padding = parseInt($target.css('padding-top'))
                        + parseInt($target.css('padding-bottom')),
            w_height = $(window).height(),     // "-65" is to compensate for url bar. Any better ideas?
            headHeight = 0;
    
        // Get total height for all headers and footers on page
        $page.find('[data-role="header"]').each(function() {
            var myTotalHeight = $(this).height()
                                + parseInt( $(this).css('padding-top') )
                                + parseInt( $(this).css('padding-bottom') );
            headHeight += myTotalHeight;
        });
        var the_height = (w_height - headHeight);
        $page.find('.top-tip').css('height',the_height - t_padding).css('top',headHeight);
        $('.top-tip-toggle').bind('click', function(){
            if($(this).hasClass('pull-down')){
                $page.find('.top-tip').animate({ top: headHeight });
                $(this).removeClass('pull-down').addClass('pull-up');
                $(this).find('span').html('');
            }else{
                $page.find('.top-tip').animate({ top:-the_height + headHeight + 23 });
                $(this).removeClass('pull-up').addClass('pull-down');
                $(this).find('span').html('PULL DOWN TO SEARCH...');
            }
        });
        t=setTimeout(function(){
            $('.top-tip-toggle').click();
        },1000);
    }); 
});