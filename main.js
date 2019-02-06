! function () {
    var duration = 5
    // $('.actions').on('click', 'button', function (e) {
    //     let $button = $(e.currentTarget) // button
    //     let speed = $button.attr('data-speed')
    //     $button.addClass('active')
    //         .siblings('.active').removeClass('active')
    //     switch (speed) {
    //         case 'slow':
    //             duration = 10
    //             break
    //         case 'normal':
    //             duration = 5
    //             break
    //         case 'fast':
    //             duration = 1
    //             break
    //     }
    // })

    function writeCode(prefix, code, fn) {
        let container = $('#code')[0]
        let styleTag = $('#styleTag')[0]
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
            styleTag.innerHTML = prefix +  code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }
    let code = `
    /*
    * inspired by http://hikari.jiguangst.com/art-19.html 
    * 滑天下之大稽
    */
    .box{width:200px; height:200px; margin:50px;}
    /*先来一个圆圆的脸蛋*/
    .comical{width:200px; height:200px; background:#fd8; border:5px solid #ea5; border-radius:50%; box-shadow:3px 8px 20px 2px rgba(0,0,0,0.3),0 0 20px 10px rgba(238,170,85,0.7) inset, -10px -20px 20px 20px rgba(244,151,58,0.3) inset; position:relative; transform-origin:50% 100%;}
    /*再来一个性感的嘴唇*/
    .mouth{width:160px; height:140px; border-bottom:6px solid #533; border-left:0px solid transparent; border-right:0px solid transparent; border-radius:50%/50%; position:absolute; bottom:25px; left:20px;}
    /*然后画眼眶*/
    .eye{position:absolute; top:-10px; transform:rotate(45deg);}
    .eye_l{left:40px;}
    .eye_r{left:160px;}
    .e1{position:absolute; top:3px; left:3px; width:76px; height:76px; overflow:hidden;}
    .e1::before{content:""; width:300px; height:300px; position:absolute; border:20px solid #fff; border-radius:120px;}
    .e2{position:absolute; top:0; left:0; width:70px; height:70px; overflow:hidden;}
    .e3{position:absolute; top:14px; left:14px; width:65px; height:65px; overflow:hidden;}
    .e2::before, .e3::before{content:""; width:300px; height:300px; position:absolute; border:5px solid #fb7; border-radius:120px;}
    .e4{position:absolute; top:72px; left:9px; width:24px; height:12px; overflow:hidden; transform:rotate(-160deg);}
    .e5{position:absolute; top:15px; left:66px; width:24px; height:12px; overflow:hidden; transform:rotate(70deg);}
    .e4::before, .e5::before{content:""; position:absolute; width:14px; height:14px; border:5px solid #fb7; border-radius:120px;}
    /*注入灵魂*/
    .e6{position:absolute; top:62px; left:17px; width:15px; height:15px; background:#433; border-radius:10px;}
    .eyebrow{width:40px; height:40px; border-top:7px solid #444; border-radius:30px; border-left:0px solid transparent; border-right:0px solid transparent; position:absolute; top:10px;}
    .eyebrow_l{left:20px; transform:rotate(20deg);}
    .eyebrow_r{left:140px; transform:rotate(-20deg);}
    /*加一抹腮红*/
    .flush{width:40px; height:20px; border-radius:50%/50%; box-shadow:0 10px 6px 5px rgba(255,80,150,0.3) inset; position:absolute; top:70px;}
    .flush_l{left:12px;}
    .flush_r{left:148px;}
    /*最后添加一个魔性的动画*/
    @keyframes swing{
        0%{transform:rotate(0deg);}
        25%{transform:rotate(-15deg);}
        50%{transform:rotate(0deg);}
        75%{transform:rotate(15deg);}
        100%{transform:rotate(0deg);}
    }
    .box{animation:swing 2s infinite linear;}
    @keyframes scaling{
        0%{transform:scaleY(1);}
        50%{transform:scaleY(1.1);}
        100%{transform:scaleY(1);}
    }
    .comical{animation:scaling 0.5s infinite linear;}
  `
    writeCode('', code)

}.call()