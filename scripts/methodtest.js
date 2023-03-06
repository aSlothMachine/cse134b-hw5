window.addEventListener('DOMContentLoaded', main);  // initiate here.

function main() {

    // user clicks POST button.
    const postBtn = document.getElementById("postBtn");
    postBtn.addEventListener("click", sendData);

    // user clicks GET button.
    const getBtn = document.getElementById("getBtn");
    getBtn.addEventListener("click", sendRequest);

    // user clicks PUT button.
    const putBtn = document.getElementById("putBtn");
    putBtn.addEventListener("click", sendUpdate);

    // user clicks DELETE button.
    const deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.addEventListener("click", sendDelete);
}

function handleResponse(xhr) {

    if (xhr.readyState == 4 && xhr.status == 200) {

        // populate the page with received data.
        document.getElementById("response").innerHTML = xhr.responseText;
    }
}

// POST.
function sendData() {

    // create XHR.
    let xhr = new XMLHttpRequest();

    let recordID = document.getElementById("ID_record").value;
    let articleTitle = document.getElementById("article_name").value;
    let articleBody = document.getElementById("article_body").value;
    let date = document.getElementById("date_record").value;

    let payload = `id=${recordID}&title=${articleTitle}&article_body=${articleBody}&date_record=${date}`;

    if (xhr) {

        xhr.open("POST", "https://httpbin.org/post", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function () { handleResponse(xhr); };
        xhr.send(payload);
    }
}

// GET.
function sendRequest() {

    // create XHR.
    let xhr = new XMLHttpRequest();
    // document.getElementById("myForm").setAttribute("method", "GET"); // need?
    // document.getElementById("myForm").setAttribute("action", "https://httpbin.org/get"); // need?

    let recordID = document.getElementById("ID_record").value;
    let articleTitle = document.getElementById("article_name").value;
    let articleBody = document.getElementById("article_body").value;
    let date = document.getElementById("date_record").value;

    let payload = `id=${recordID}&title=${articleTitle}&article_body=${articleBody}&date_record=${date}`;

    if (xhr) {
        xhr.open("GET", "https://httpbin.org/get" + "?" + payload, true);
        xhr.onload = function () { handleResponse(xhr); };
        xhr.send(null);
    }
}

// PUT.
function sendUpdate() {
    // create XHR.
    let xhr = new XMLHttpRequest();

    let recordID = document.getElementById("ID_record").value;
    let articleTitle = document.getElementById("article_name").value;
    let articleBody = document.getElementById("article_body").value;
    let date = document.getElementById("date_record").value;

    let payload = `id=${recordID}&title=${articleTitle}&article_body=${articleBody}&date_record=${date}`;

    if (xhr) {

        xhr.open("PUT", "https://httpbin.org/put", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function () { handleResponse(xhr); };
        xhr.send(payload);
    }
}

// DELETE.
function sendDelete() {

    // create XHR.
    let xhr = new XMLHttpRequest();

    let recordID = document.getElementById("ID_record").value;
    let articleTitle = document.getElementById("article_name").value;
    let articleBody = document.getElementById("article_body").value;
    let date = document.getElementById("date_record").value;

    let payload = `id=${recordID}&title=${articleTitle}&article_body=${articleBody}&date_record=${date}`;

    if (xhr) {

        xhr.open("DELETE", "https://httpbin.org/delete" + "?" + payload, true);
        xhr.onload = function () { handleResponse(xhr); };
        xhr.send(null);
    }

}