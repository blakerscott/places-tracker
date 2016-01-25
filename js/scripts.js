function Place(locationName, landmarkName, timeYearName) {
  this.locationName = locationName;
  this.landmarkName = landmarkName;
  this.timeYearName = timeYearName;
}

Place.prototype.fullInfo = function() {
  return this.locationName + ", " + this.landmarkName + ", " + this.timeYearName;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedtimeYear = $("input#new-timeYear").val();
    var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedtimeYear);

    $("ul#place").append("<li><span class='place'>" + newPlace.fullInfo() + "</span></li>");

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-timeYear").val("");

  $(".place").last().click(function() {
    $("#show-place").show();
    $("#show-place h2").text(newPlace.fullInfo());
    $(".location-name").text(newPlace.locationName);
    $(".landmark-name").text(newPlace.landmarkName);
    $(".timeYear-name").text(newPlace.timeYearName);
  });
  });
});
