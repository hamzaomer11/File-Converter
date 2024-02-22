
document.getElementById('file').addEventListener('change', function(e) {
    for(var i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]) {
        let file = e.target.files[i].name;
        document.getElementById("file-name").innerHTML = file;
      }
    }
});
