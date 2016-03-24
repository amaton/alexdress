/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    design
 * @package     rwd_default
 * @copyright   Copyright (c) 2006-2015 X.commerce, Inc. (http://www.magento.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

$j(document).ready(function () {

    // ==============================================
    // UI Pattern - Slideshow
    // ==============================================

    $j('.slideshow-container .slideshow')
        .cycle({
            slides: '> li',
            pager: '.slideshow-pager',
            pagerTemplate: '<span class="pager-box"></span>',
            speed: 600,
            pauseOnHover: true,
            swipe: true,
            fx: 'scrollHorz'
        });

	if(document.querySelectorAll('#block-related .related-item').length>3){
        $j('#block-related').cycle({
            slides: '> .related-item',
            fx:'carousel',
			timeout:3000,
			carouselVisible:3,
			carouselFluid:true,
            speed: 600,
            pauseOnHover: true,
            swipe: true,
			prev:$j('#related-prev'),
            next:$j('#related-next')
        });
	}
	else{
		if(document.getElementById('related-container')){
			document.getElementById('related-container').classList.add('noCarousel');
		}
	}
    $j('div.home-widgets-top').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true

    });
    $j('div.home-widgets-btm').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    });
    var img_ht=$j('div.home-widgets-top').height();
    var img_wt=$j('div.home-widgets-top img').width();
    $j('div.home-widgets-top img').height(img_ht);
    var img_hb=$j('div.home-widgets-btm').height();
    var img_wb=$j('div.home-widgets-btm img').width();
    $j('div.home-widgets-btm img').height(img_hb);
    /*$j( window ).resize(function() {
        var img_wtr=$j('div.home-widgets-top img').width();
        $j('div.home-widgets-top img').height(img_ht*img_wtr/img_wt);
        var img_wbr=$j('div.home-widgets-btm img').width();
        $j('div.home-widgets-btm img').height(img_hb*img_wbr/img_wb);
    });*/
    var resize = function(e){
        var img_wtr=$j('div.home-widgets-top img').width();
        $j('div.home-widgets-top img').height(img_ht*img_wtr/img_wt);
        var img_wbr=$j('div.home-widgets-btm img').width();
        $j('div.home-widgets-btm img').height(img_hb*img_wbr/img_wb);
    };
    (function(){
        var time;
        window.onresize = function(e){
            if (time)
            clearTimeout(time);
            time = setTimeout(function(){
                resize(e);
            },100);
        }
    })();





});
