console.log('load');

var inputs;
var data;

$.get("https://api.myjson.com/bins/2boq0", function(d, textStatus, jqXHR) {
  data = d;
});

inputs = document.getElementsByTagName('input');
for (var index = 0; index < inputs.length; ++index) {
    if (inputs[index].type === "submit") {
      inputs[index].onclick = function() {
        var dict = {};
        for (var j = 0; j < inputs.length; j++) {
          dict[inputs[j].id] = inputs[j].value;
        }
        data.push(dict);
        $.ajax({
            url:"https://api.myjson.com/bins/2boq0",
            type:"PUT",
            data: JSON.stringify(data),
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: function(data, textStatus, jqXHR){
              
            }
        });     
      };
    }
}