// ატვირთული სურათის გამოტანა
function viewImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.view__design--img').attr('src', e.target.result);
            $('.design').hide();
            $('.view__design').show();
            console.log(e.target.result)
            addItem(e.target.result);
            // $(".upload__descign--img").show();
            // displayAreas(areas);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// ლაივ საიტის გაშვება
function liveLink() {
    var link = $('.live__link').val()
    if(!link == ' '){

        var url =
            "https://api.apiflash.com/v1/urltoimage?width=375&full_page=true&response_type=image&access_key=e03bf4ed66614e0d901b863393ee8fcf&url=" + link;
    
        var request = new XMLHttpRequest();
    
        request.open("GET", url);
        request.responseType = "arraybuffer";
    
        request.onload = function (e) {
            var arr = new Uint8Array(this.response);
    
            var uintArray = new Uint16Array(arr);
    
            var b64 = arrayBufferToBase64(arr);
            var dataURL = "data:image/jpeg;base64," + b64;
            $(".view__live--img").attr("src", dataURL);

            $('.view__live').show();
            console.log(dataURL)
            cropper();
        };
    
        request.send();

        function arrayBufferToBase64(buffer) {
            var binary = "";
            var bytes = new Uint8Array(buffer);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
        }


        $('.live').hide();
    }
}



// ლაივ საიტის სურათის კროპი
function cropper(){

    $('.view__design--img').selectAreas({
        minSize: [0, 0],
        onChanged: debugQtyAreas,
        width: 375,
        areas: [
            {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            }
        ]
    });

    // გამოძახება
    $('.view__live--img').selectAreas({
        minSize: [0, 0],
        onChanged : debugQtyAreas,
        width: 375,
    });

    output("created")
    $('.actionOff').attr("disabled", "disabled");
    $('.actionOn').removeAttr("disabled")
    // var areas = $('.view__live--img').selectAreas('areas');
    // displayAreas(areas);
    
    $('#btnView').click(function () {
        var areas = $('.view__live--img').selectAreas('areas');
        displayAreas(areas);
    });
    $('#btnViewRel').click(function () {
        var areas = $('.view__live--img').selectAreas('relativeAreas');
        displayAreas(areas);
    });
    $('#btnReset').click(function () {
        output("reset")
        $('.view__live--img').selectAreas('reset');
    });
    $('#btnDestroy').click(function () {
        $('.view__live--img').selectAreas('destroy');
    
        output("destroyed")
        $('.actionOn').attr("disabled", "disabled");
        $('.actionOff').removeAttr("disabled")
    });
    $('#btnCreate').attr("disabled", "disabled").click(function () {
        $('.view__live--img').selectAreas({
            minSize: [0, 0],
            onChanged : debugQtyAreas,
            width: 375,
        });
    
        output("created")
        $('.actionOff').attr("disabled", "disabled");
        $('.actionOn').removeAttr("disabled")
    });
    $('#btnNew').click(function () {
        var areaOptions = {
            x: Math.floor((Math.random() * 200)),
            y: Math.floor((Math.random() * 200)),
            width: Math.floor((Math.random() * 100)) + 50,
            height: Math.floor((Math.random() * 100)) + 20,
        };
        output("Add a new area: " + areaToString(areaOptions))
        $('.view__live--img').selectAreas('add', areaOptions);
    });
    $('#btnNews').click(function () {
        var areaOption1 = {
            x: Math.floor((Math.random() * 200)),
            y: Math.floor((Math.random() * 200)),
            width: Math.floor((Math.random() * 100)) + 50,
            height: Math.floor((Math.random() * 100)) + 20,
        }, areaOption2 = {
            x: areaOption1.x + areaOption1.width + 10,
            y: areaOption1.y + areaOption1.height - 20,
            width: 0,
            height: 0,
        };
        output("Add a new area: " + areaToString(areaOption1) + " and " + areaToString(areaOption2))
        $('.view__live--img').selectAreas('add', [areaOption1, areaOption2]);
    });
    
    
    var selectionExists;
    
    function areaToString (area) {
        return (typeof area.id === "undefined" ? "" : (area.id + ": ")) + area.x + ':' + area.y  + ' ' + area.width + 'x' + area.height + '<br />'
    }
    
    function output (text) {
        $('#output').html(text);
    }
    
    // Log the quantity of selections
    function debugQtyAreas (event, id, areas) {
        console.log(areas);

        for (let i = 0; i < areas.length; i++) {
            const element = areas[i];
            
            console.log(element);
        }
    };
    
    // Display areas coordinates in a div
    function displayAreas (areas) {
        var text = "";
        $.each(areas, function (id, area) {
            text += areaToString(area);
        });
        output(text);
    };
    
}

