$(function () {

    $("a").click(function (e) {
        e.preventDefault();
    })

    $("#button_start").click(function (e) {

        $(".event_contents").addClass("animation");

    });

    $("#button_save").on("click", function () {
        
        console.log("test");
        
        $(".event_contents").removeClass("animation").addClass("action");
        // 캡쳐 라이브러리를 통해서 canvas 오브젝트를 받고 이미지 파일로 리턴한다.
        html2canvas(document.querySelector("#capture")).then(canvas => {
            saveAs(canvas.toDataURL('image/png'), "stest.png");
        });
    });

    function saveAs(uri, filename) {
        // 캡쳐된 파일을 이미지 파일로 내보낸다.
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
    }




});
