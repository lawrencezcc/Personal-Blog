'use strict';

$(document).ready(function() {
    let sidebar = $('#sidebar'), //siderbar defination
        overlay = $('.overlay'), //overlay defination
        back_to_top_button = $('.back-to-top'), //back to top button defination
        siderbar_trigger = $('#secondNavItem'); //siderbar menu defination

    // display siderbar
    function showSiderBar() {
        overlay.fadeIn();
        sidebar.animate({'right': 0});
    }

    // hide siderbar
    function hideSiderBar() {
        overlay.fadeOut();
        sidebar.animate({
            'right': -(sidebar.width())
        });
    }

    // back to top event
    function backToTop() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    }

    //siderbar click listener
    siderbar_trigger.on('click', showSiderBar);
    //overlay click listener
    overlay.on('click', hideSiderBar);
    //back to top button click listener
    back_to_top_button.on('click', backToTop);

    //window scroll listener
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height())
            back_to_top_button.fadeIn();
        else
            back_to_top_button.fadeOut();
        }
    )

    //window trigger scroll event
    $(window).trigger('scroll');
});

$(document).ready(function() {
    let login = $('#login'),
        closeCornerButton = $('#closeCornerButton'),
        siderbarLoginItem = $('#siderbarLoginItem');

    function showLoginModal() {
        if (typeof login.attr("class") !== "undefined") {
            if (login.attr("class") === "login-animation") {
                login.removeClass("login-animation");
            }
        }
        login.css({"display": "inherit", "z-index": "inherit"});
    }

    function closeLoginModal() {
        login.addClass("login-animation");
        login.delay(1000).queue(function(next) {
            $(this).css({"display": "none", "z-index": -1});
            next();
        });
    }

    siderbarLoginItem.on('click', showLoginModal);
    closeCornerButton.on('click', closeLoginModal);
});
