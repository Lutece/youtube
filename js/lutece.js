$(function() {
    var searchVideoBtn = $('.searchVideo');
    var videoSearchBar = $('#video-search-nav');
    var videoSearchBarI = $('#video-search-nav .material-icons');
    var videoSearchBarCloseBtn = $('.closeBtn');
    var videoSerachBarInput = $('#video-search-nav input');
    var videoContents = $('#videoContents');

    videoContents.modal();

    searchVideoBtn.click(function() {
        videoSearchBar.show(300);
        videoSearchBarI.show(300);
    });

    videoSearchBarCloseBtn.click(function() {
        videoSearchBar.hide(300);openResultModal
    });
});

function openResultModal(inputObj) {
    var progress = $('.progress');
    var searchInput = $(inputObj);
    var searchYoutubeUrl = 'http://lutece.kr/ytb/search';

    $.ajax({
        url: searchYoutubeUrl,
        data: 'searchVal='+searchInput.val(),
        dataType: 'json',
        method: 'post',
        beforeSend: function() {
            progress.show();
        },
        success: function(jdata) {
            console.log(jdata);
        },
        error: function() {
             //toast error
        },
        complete: function() {
             $('#video-search-nav').hide(300);
             progress.hide(300);
             searchInput.val('');
        }
    });
}