document.getElementById('file').addEventListener('change', function(e) {
    for(var i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]) {
        let file = "File: " + e.target.files[i].name;
        let newFile = file.replace(".pdf", ".docx")
        document.getElementById("file-name").innerHTML = newFile;
      }
    }
});
