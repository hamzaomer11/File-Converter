
document.getElementById('file').addEventListener('change', function(e) {
    if (e.target.files[0]) {
      let file = "File Name is:" + e.target.files[0].name;
      document.getElementById("file-name").innerHTML = file;
    }
});
