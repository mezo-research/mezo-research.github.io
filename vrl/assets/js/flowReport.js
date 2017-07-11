function assignOptions(textArray, selector) {
  while (selector.options.length > 0) {
      selector.remove(0);
  }
  for (var i = 0; i < textArray.length;  i++) {
    var currentOption = document.createElement("option");
    currentOption.text = textArray[i];
    selector.appendChild(currentOption);
  }
}

function getFilteredArray(target, base_array, filter_array){
  var returnArray = []
  var pass = 0;
  for (var i = 0; i < target.length; i++) {
    pass = 0;
    for (var j = 0; j < base_array.length; j++) {
      if (base_array[j][i] == filter_array[j]) {
        pass += 1;
      }
    }
    if (pass == base_array.length) {
       returnArray.push(target[i]);
    }
  }
  return returnArray
}

function stackColor(index){
  var colorArray = ["DarkSlateBlue", "DeepSkyBlue", "DarkSlateGray", "DarkCyan", "RoyalBlue", "CadetBlue", "SandyBrown", "Sienna", "LightGray", "SteelBlue"]
  return colorArray[index]
}

function lineColor(index){
  var colorArray = ["DarkSlateBlue", "DeepSkyBlue", "Maroon", "DarkCyan", "RoyalBlue", "Crimson", "SandyBrown", "Sienna", "LightGray", "SteelBlue"];
  return colorArray[index]
}

function lineStyle(index){
  var styleArray = ["solid", "dash", "dot", "dashdot", "solid", "dash", "dot", "dashdot", "solid", "dash"]
  return styleArray[index]
}

function lineTraceStyle(x, y, name, i) {
  var modeArray = ["lines", "lines+markers", "lines", "lines+markers", "lines", "lines+markers", "lines", "lines+markers", "lines", "lines+markers"];
  var colorArray = ["DarkSlateBlue", "RoyalBlue", "Maroon", "DarkCyan", "DeepSkyBlue", "Crimson", "SandyBrown", "Sienna", "LightGray", "SteelBlue"];
  var styleArray = ["solid", "dash", "dashdot", "dot", "solid", "dash", "dashdot", "dot", "solid", "dash"];
  return {
    type: "scatter",
    mode: modeArray[i],
    name: name,
    x: x,
    y: y,
    line:{
      color: colorArray[i],
      dash: styleArray[i],
      width: 3
    }
  }
}

function getBoxData(bins, counts){
  var return_array = [];
  for (var i = 0; i < bins.length;  i++) {
    for (var j = 0; j < counts[i];  j++) {
      return_array.push(bins[i])
    }
  }
  return return_array
}

function getAvg(inputArray) {
  return inputArray.reduce(function (p, c) {
    return p + c;
  }) / inputArray.length;
}

function filterFloat(value) {
  if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
    .test(value))
    return Number(value);
  return NaN;
}

addEventListener('resize', function() {
  location.reload();
});
