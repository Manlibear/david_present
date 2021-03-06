/*Downloaded from https://www.codeseek.co/ovdojoey/css-gift-opening-pgozGX */

var to = 'David';
var gift_url = 'http://www.amazon.com/gp/product/B00X4WHP5E/ref=ods_xs_ae_shurl?tag=googhydr-20&hvadid=74652194316&hvpos=1t1&hvexid=&hvnetw=g&hvrand=7560558939874219351&hvpone=&hvptwo=&hvqmt=b&hvdev=c&ref=pd_sl_2vatdqwe3p_b';
var gift_image_url = 'https://images-na.ssl-images-amazon.com/images/I/51x08SnUBvL.jpg';


var gifts = [
    ["Black Crusade Core Rulebook", "https://hb.imgix.net/3e3b688815901a90c65932ad96168af35bbb0870.png?auto=compress,format&w=180&s=90ee855c936f196774a9140a60f0144b", "https://dl.humble.com/blackcrusadecorerulebook.pdf?gamekey=zhzac8nMVqHkefAH&cd=attachment&ttl=1609013618&t=aeb381d8851a91eef617ee19e6979585"],
    ["Eleventh Hour", "https://hb.imgix.net/efbe8a38eac0fd0acf8c2f791b66248a8fa2a651.png?auto=compress,format&w=180&s=50f0c8089d9f61031011de6a9732897b", "https://dl.humble.com/eleventhhour.pdf?gamekey=zhzac8nMVqHkefAH&cd=attachment&ttl=1609013618&t=2d9c79244348d44da16a4ab9339c2460"],
    ["Broken Chains", "https://hb.imgix.net/77654a55b72ddad6adf33c092cce5b1df0800353.png?auto=compress,format&w=180&s=1e645600c11528c6d8e2d4bc7c46feef", "https://dl.humble.com/brokenchains.zip?gamekey=zhzac8nMVqHkefAH&ttl=1609013618&t=2b5f16f8eef99259a09f316a46351cd0"],
    ["Binding Contracts", "https://hb.imgix.net/19ebc8e17c848e1cb489fc4a6eb6abc5e096e5d8.png?auto=compress,format&w=180&s=fe976a9e01de61d6ebcb1c85a9d96af7", "https://dl.humble.com/bindingcontracts.pdf?gamekey=zhzac8nMVqHkefAH&cd=attachment&ttl=1609013618&t=6405aa299c3d3718ddbc3632e32f8c80"],
]


var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
    for(var i = 0; i < gifts.length; i++){
        var gift_name = gifts[i][0]; 
        var gift_image_url = gifts[i][1]
        var gift_url = gifts[i][2];

        var _giftLink, _giftImg;

        _giftLink = document.createElement("a");
        _giftLink.href = gift_url;
        presentImage.appendChild(_giftLink);
        
        _giftImg = document.createElement("img");
        _giftImg.src = gift_image_url;
        if(_giftLink) {
            _giftLink.appendChild(_giftImg);
        } else {
            presentImage.appendChild(_giftImg);
        }

  
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    presentImage.classList.toggle("open");
    
  }, false);
  
  
  
  nametag.innerText = to;
}

init();