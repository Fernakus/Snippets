function AJAXGETExample() {
    var request = $.ajax({
        url: '/AJAX/GetFeeds',
        method: 'GET',
        cache: false,
        dataType: 'json'
    });

    request.done(function (json) {
        // JQuery AJAX Loop Example
        $.each(json.Data, function (index, venue) {

        });
    });

    request.fail(function () {
        alert("");
    });
}

function AJAXPOSTExample(id) {
    var request = $.ajax({
        url: "/AJAX/deleteData",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            listPosition: id
        })
    });

    request.done(function (xhr, status, error) {
        alert(status);
        window.location.href = "Index";
    });

    request.fail(function (xhr, status, error) {
        alert(error);
        window.location.href = "Index";
    });
}

function XHRPOSTExample(logo) {
    var xhr = new XMLHttpRequest();
    var formdata = new FormData();
    var fileInput = document.getElementById('logo');

    formdata.append('logo', fileInput.files[0]);
    formdata.append('logoName', logo.replace("C:\\fakepath\\", ""));
    
    xhr.open('POST', '/AJAX/writeImage');
    xhr.send(formdata);
}