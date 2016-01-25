function Place(locationName, landmarkName) {
  this.locationName = locationName;
  this.landmarkName = landmarkName;
  this.dayVisited = [];
}

Place.prototype.fullInfo = function() {
  return this.locationName + ", " + this.landmarkName;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var newPlace = new Place(inputtedLocation, inputtedLandmark);

    $("ul#place").append("<li><span class='place'>" + newPlace.fullInfo() + "</span></li>");

    $("input#new-location").val("");
    $("input#new-landmark").val("");
  });

  $(".place").last().click(function() {
    $("#show-place").show();
    $("#show-place h2").text(newPlace.fullInfo());
    $(".new-location").text(newContact.newLocation);
    $(".new-landmark").text(newContact.newLandmark);
  });
});
