var activeMenuItem = 'Home';

function setActiveDialog(idSelector) {
    if (activeMenuItem === idSelector) {
        return;
    }

    clearDialog();
    easeInDialog(idSelector);
    setHighlightedMenuItem(idSelector);
    activeMenuItem = idSelector;
}

function setHighlightedMenuItem(idSelector) {
    unHighlightMenuItem('#' + activeMenuItem + '-menu');    
    highlightMenuItem('#' + idSelector + '-menu');
}

function clearDialog() {
    $('#' + activeMenuItem).velocity(
        {
            left: '-3000px'
        },
        {
            duration: 75,
            easing: "easeOutSine"
        }
    );
}

function easeInDialog(idSelector) {
    var leftPos = isMobile() ? '0' : '275px';
    $('#' + idSelector).velocity(
        {
            left: leftPos
        },
        {
            duration: 150,
            easing: "easeInSine"
        }
    );
}

function highlightMenuItem(cssSelector) {
    $(cssSelector).css("color", "#FFFFFF");
}

function unHighlightMenuItem(cssSelector) {
    $(cssSelector).css("color", "#E5D8CE");
}

function setDesktop() {
    $('.dialog').addClass('vh_height60 vw_width60 vh_top21')
        .removeClass('mobile-dialog');
    $('.sign-img').each(function(index, element) {
        element.style.top = '';
    });
    
    $('.sign').each(function(index, element) {
        element.style.top = '';
    });
}

function setMobile() {
    $('.dialog').removeClass('vh_height60 vw_width60 vh_top21')
        .addClass('mobile-dialog');
    $('.sign-img').each(function(index, element) {
        element.style.top = (300 + index * 70).toString() + 'px';
    });
    
    $('.sign').each(function(index, element) {
        element.style.top = (305 + index * 70).toString() + 'px';
    });
}

$(document).ready(function() {
    mobile = false;
    setInterval(function() {
        if(isMobile() && !mobile) {
            setMobile();
            mobile = true;
        } else if(!isMobile() && mobile) {
            setDesktop();
            mobile = false;
        }
    }, 50);
});

function isMobile() {
    return $(window).width() < 720;
}
