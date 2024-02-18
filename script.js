// 1st - get file extension
// 2nd - convert file to other files with valid extensions

function validateFileType(fileName) {
    var fileName = document.getElementById("file-name").value;
    let fileExtension = fileName.split('.').pop().toLowerCase();

}

