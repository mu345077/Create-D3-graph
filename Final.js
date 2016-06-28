var fs = require("fs");
var file1 = "India2011.csv";
var file2 = "IndiaSC2011.csv";
var file3 = "IndiaST2011.csv";
var out = "India.json";

var result = [];
function CSV2JSON(file,callback){
fs.readFile(file, function (err, data) {
  if (err) throw err;
  var d = data.toString();
  var lines = d.split("\n");
  var headers = lines[0].split(",");
  var object = {};

   for (var i = 1; i < lines.length; i++) {
       var line1 = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

       var object = {};
       for(var j=0;j<line1.length;j++)
       {
         object[headers[j]]=line1[j];
       }
       result.push(object);
   }
   callback(result);
});
}
function parse(){
CSV2JSON(file1, function (result) {
//  console.log(result);
  fs.writeFile(out, JSON.stringify(result), function (err) {
      if (err) throw err;
      console.log("CSV to JSON completed");
  });
});
CSV2JSON(file2, function (result) {
//  console.log(result);
  fs.writeFile(out, JSON.stringify(result), function (err) {
      if (err) throw err;
      console.log("CSV to JSON completed");
  });
});
CSV2JSON(file3, function (result) {
//  console.log(result);
  fs.writeFile(out, JSON.stringify(result), function (err) {
      if (err) throw err;
      console.log("CSV to JSON completed");
  });
});

}
parse();
