//    1st - get file extension
//    2nd - convert file to other files with valid extensions

// function validateFileType() {
//     //var fileName = document.getElementById("file-name").value;
//     //let fileExtension = fileName.split('.').pop().toLowerCase();

    
// }


document.getElementById('file').addEventListener('change', function(e) {
    if (e.target.files[0]) {
      let file = "File Name is:" + e.target.files[0].name;
      document.getElementById("file-name").innerHTML = file;
    }
});
