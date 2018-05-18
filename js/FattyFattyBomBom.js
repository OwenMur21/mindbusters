//user-interface
$(document).ready(function() {
  $("form#got").submit(function(event) {
    event.preventDefault();
    var ans1 = $("input:radio[name=quote]:checked").val();
    var ans2 = $("input:radio[name=khaleesi]:checked").val();
    var ans3 = $("input:radio[name=wolf]:checked").val();
    var ans4 = $("input:radio[name=bastards]:checked").val();
    var ans5 = $("input:radio[name=hatch]:checked").val();
    var ans6 = $("input:radio[name=say]:checked").val();

    var results = [ans1, ans2, ans3, ans4, ans5, ans6];
    var counts = {};
    for (var i = 0; i < results.length; i++) {
      var value = results[i];
      counts[value] = counts[value] ? counts[value] + 1 : 1;
    }
    if (counts["true"] >= 4) {
      $("#correctAns").toggle();
    } else {
      $("#wrongAns").toggle();
    }
  });

  $("form#football").submit(function(event) {
    event.preventDefault();
    var ans7 = $("input:radio[name=appearances]:checked").val();
    var ans8 = $("input:radio[name=brand]:checked").val();
    var ans9 = $("input:radio[name=win]:checked").val();
    var ans10 = $("input:radio[name=unbeaten]:checked").val();
    var ans11 = $("input:radio[name=live]:checked").val();
    var ans12 = $("input:radio[name=against]:checked").val();

    var secondResults = [ans7, ans8, ans9, ans10, ans11, ans12];
    var secondCounts = {};
    for (var u = 0; u < secondResults.length; u++) {
      var secondValue = secondResults[u];
      secondCounts[secondValue] = secondCounts[secondValue] ? secondCounts[secondValue] + 1 : 1;
    }

    if (secondCounts["true"] >= 3) {
      $("#correctAns2").toggle();
    } else {
      $("#wrongAns2").toggle();
    }
  });
});
