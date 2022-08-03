function load2D_bg(){
    var background = document.getElementById("background");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
    function(_ref) {
        var x = _ref.x,
        y = _ref.y;
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(function() {
            var yValue = calcValue(y, window.innerHeight);
            var xValue = calcValue(x, window.innerWidth);
            
                    
            background.style.backgroundPositionX = xValue * 1 -200+ "px ";
            background.style.backgroundPositionY =  (-yValue * 0.75-50 ) + "px";
        })
    },false);

}

function load2D_bg2(){
    var background = document.getElementById("background2");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
    function(_ref) {
        var x = _ref.x,
        y = _ref.y;
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(function() {
            var yValue = calcValue(y, window.innerHeight);
            var xValue = calcValue(x, window.innerWidth);
            
            background.style.backgroundPositionX = xValue *1 -200+ "px ";
            background.style.backgroundPositionY =  (-yValue * 0.75-50 ) + "px";
        })
    },false);

}

function load2D_bg2_2(){
    var background = document.getElementById("background2");
    document.onmousemove=function(){
        console.log(window.outerHeight);
        background.style.opacity=1-(getMousePos()/window.outerHeight*2.5);
    }
}

function getMousePos(event) {
    var e = event || window.event;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var y = e.pageY || e.clientY + scrollY;
    return y;
}

function load2D_lihui(){
    var background = document.getElementById("lihui");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
    function(_ref) {
        var x = _ref.x,
        y = _ref.y;
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(function() {
            var xValue = calcValue(x, window.innerWidth);

            background.style.left = xValue * 0.7-100 + "px";
            
        })
    },false);

}


var i=0;

function aboutMe(){
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    if(i==0){
        var str1 = '代码';
        var res1=str1.link('https://github.com/woziji2200/ProfilePage');
        var str2 = 'github';
        var res2=str2.link('https://github.com/Yuhan0524');
        i=1;
        slogan.style.height="100px";
        slogan2.innerHTML="这里是大PPP，NTU mathematical sciences 2025er~ 在@自古幸运哥 @Yuwei @StevenDONG 的支持下，白嫖了他人的"+res1+"，生成了MLGB酱！如果有问题可以通过"+res2+"上的方式联系我( ꈍᴗꈍ)";
    } else {
        i=0;
        slogan.style.height="50px";
        slogan2.innerHTML="可爱的MLGB酱(ㆁωㆁ)！为NTU 2026届本科生解决各种问题，啾咪~";
    }
    
}

function sources(){
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    if(i==0){
        var str1 = '资料合集';
        var res1=str1.link('https://pan.baidu.com/s/1-vEsQQQBLGYdRNRLSesOoA');
        var str2 = '地图';
        var res2=str2.link('https://maps.ntu.edu.sg/#/ntu/venues');
        var str3 = 'LDAP';
        var res3=str3.link('https://wish.wis.ntu.edu.sg/pls/webexe/ldap_login.login?w_url=https://wish.wis.ntu.edu.sg/pls/webexe/aus_stars_planner.main');
        var str4 = 'IStudentLink';
        var res4=str4.link('https://www3.ntu.edu.sg/cits2/iNTU.html');
        var str5 = '交换';
        var res5=str5.link('https://ntu-sa.terradotta.com/index.cfm?FuseAction=Programs.ProgramDiscovery');
        var str6 = 'ICA官网';
        var res6=str6.link('https://eservices.ica.gov.sg/solar/index.xhtml');
        var str7 = 'STP预约';
        var res7=str7.link('https://eservices.ica.gov.sg/ibook/index.do');
        var str8 = '体检';
        var res8=str8.link('https://www.ntu.edu.sg/admissions/undergraduate/freshmen/health-screening');
        var str9 = '入学资料合集';
        var res9=str9.link('https://pan.baidu.com/s/1kRaJI4aPOaOOg2V0O6aIVA');
        i=1;
        slogan.style.height="250px";
        slogan2.innerHTML="- "+res1+"（包括签证申请/STP/QET/宿舍等众多重要信息）<br>提取码：nnk3<br>\
        - NTU"+res2+"<br>\
        - 换课加课系统"+res3+"<br>\
        - "+res4+"<br>\
        - NTU"+res5+"项目<br>\
        - "+res6+"（IPA办理）<br>\
        - "+res7+"<br>\
        - "+res8+"<br>\
        - @Yuwei学姐整理的"+res9+"提取码：xlss";
    } else {
        i=0;
        slogan.style.height="50px";
        slogan2.innerHTML="可爱的MLGB酱(ㆁωㆁ)！为NTU 2026届本科生解决各种问题，啾咪~";
    }
    
}

