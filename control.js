function hackAccount() {
  var url = $("#yourinput").val();
  console.log("test:" + url);
  $.ajax({
    url: "https://textsummarizer.omoeba.repl.co/check?url=" + url,
    success: function(result) {
      console.log(result);
      $("#result_label").html(result);
    },
      error: function(result) {
          console.log("error");
      }
  });
}