$j(document).ready(function(){
	if(document.getElementById('colorPalette')){
		var propSelectors={
			'color':'a:hover, .footer-nav-title, .block-layered-nav .block-content > dl > dt, .product-view .product-shop .price-info, #configurable_swatch_size li.selected .swatch-link, #block-related .product-lnk:hover, .product-shop-title, .product-view .product-shop .product-name .h1, .product-view .product-img-box .product-name .h1, .breadcrumbs a:hover, .product-collateral .toggle-tabs li.current span, .product-collateral .toggle-tabs li:hover span, .product-view .product-shop #block-related .product-lnk:hover .price-box .regular-price .price, .product-view .product-shop #block-related .product-lnk:hover .price-box .special-price .price, .product-view .product-shop #block-related .product-lnk:hover .price-box .old-price .price, .header-minicart .subtotal .price, .skip-cart',
			'background-color':'#header-nav, #search_mini_form .search-button, .lang-current::before, .home-widget-overlay, .footer-copyright, .footer-extra .block-content .actions .button, .products-item:hover::after, .button, .cart-table .product-cart-actions .button, #co-shipping-method-form .buttons-set .button, .footer .button, #block-related .product-lnk:hover::after',
			'border-color':'.skip-cart .icon, #header-cart',
	        'border-top-color':'.nav-primary li.level0.parent.menu-active::after',
/*        'border-right-color':'',*/
        	'border-bottom-color':'.product-shop-title'
        /*'border-left-color':''*/
		};
		activatePalette(document.getElementById('palette-color'),document.getElementById('palette-control'),document.getElementById('palette-reset'),propSelectors);
	}
});

function activatePalette(colorInput,colorControl,colorReset,propSelectors){
    var clCustom=window.localStorage['clCustom'],clDefault=colorInput.value;
	if(clCustom){
        applyCl(colorInput.value=clCustom,propSelectors);
	}
    colorControl.on('click',function(){
       colorPalette.classList.toggle('palette-active');
       this.classList.toggle('fa-paint-brush');
       this.classList.toggle('fa-times');
    });
    colorInput.on('input',function(){
       applyCl(window.localStorage['clCustom']=this.value,propSelectors);
    });
    colorReset.on('click',function(){
       applyCl(colorInput.value=clDefault,propSelectors);
       window.localStorage['clCustom']='';
    });
	function applyCl(cl,propSelectors){
		var customStylesheet=document.getElementById('customClRules');
		if(customStylesheet){
            customStylesheet.remove();
		}
		var styleStr='<style id="customClRules">';
		for(var prop in propSelectors){
			styleStr+=propSelectors[prop]+'{'+prop+':'+cl+'}';
		}
		document.head.insert(styleStr+'</style>');
	}
}