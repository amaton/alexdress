function rgbToHex(rgb){
	var hex=['','',''],nums='0123456789',numOpen=false,cnt=3,i=0,res='#';
	function decToHex(dec){
		var hex=Number(dec).toString(16);
		if(dec<16){
			hex='0'+hex;
		}
		return hex;
	}
	for(var pos=0;(i<rgb.length)&&(pos<cnt);i++){
		if(nums.indexOf(rgb[i])!=-1){
			numOpen=true;
			hex[pos]+=rgb[i];
		}
		else{
			if(numOpen){
				pos++;
				numOpen=false;
			}
		}
	}
	for(i=0;i<cnt;i++){
		res+=decToHex(hex[i]);
	}
	return res;
}

function cmpRgbToHex(clRgb,clHex){
	return rgbToHex(clRgb)==clHex;
}

function activateColorPalette(colorPalette,colorInput,colorControl,colorReset,cssProps){
    var clCustom=window.localStorage['clCustom'],clDefault=colorInput.value;
	if(clCustom){
        applyCl(colorInput.value=clCustom);
	}
	else{
        clCustom=clDefault;
	}
    colorControl.on('click',function(){
       colorPalette.classList.toggle('palette-active');
       this.classList.toggle('fa-paint-brush');
       this.classList.toggle('fa-times');
    });
    colorInput.on('input',function(){
       applyCl(localStorage['clCustom']=this.value);
    });
    colorReset.on('click',function(){
       applyCl(colorInput.value=clDefault);
       window.localStorage['clCustom']='';
    });
    function applyCl(cl){
        for(var i=0;i<document.styleSheets.length;i++){
            if(!document.styleSheets[i].cssRules){
                continue;
            }
            for(var j=0;j<document.styleSheets[i].cssRules.length;j++){
                var rules=document.styleSheets[i].cssRules[j];
                if(rules.media&&rules.cssRules){
                    for(var k=0;k<rules.cssRules.length;k++){
                        setProps(rules.cssRules[k].style);
                    }
                }
				else{
                	setProps(rules.style);
				}
            }
        }
		clCustom=cl;
        function setProps(style){
            for(var i=0;i<cssProps.length;i++){
                setCl(style,cssProps[i]);
            }
        }
        function setCl(style,prop){
            if(style&&style[prop]&&(cmpRgbToHex(style[prop],clCustom)||cmpRgbToHex(style[prop],clDefault))){
                style[prop]=cl;
            }
        }
    }
}

$j(document).ready(function() {
	var colorPalette=document.getElementById('colorPalette');
    if(colorPalette){
       activateColorPalette(colorPalette,document.getElementById('palette-color'),document.getElementById('palette-control'),document.getElementById('palette-reset'),['backgroundColor','borderBottomColor','borderTopColor','borderLeftColor','borderRightColor','color']);
    }
});
