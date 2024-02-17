// 1st - get file extension
// 2nd - replace file extension to other valid extensions


function checkFileConversion() {
    var fileName = document.getElementById("input").file[0];
    let fileExtension = fileName.split('.').pop();
}