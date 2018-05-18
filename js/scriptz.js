//user-interface
$(document).ready(function() {
  $("#vilz").click(function() {
    $("#villain").show();
    $(".tru-self").hide();
    $("#spiritanimal").hide();
    $("#powers").val("");
    $("input:radio[name=enemy]:checked").val("");
    $("input:radio[name=rogue]:checked").val("");
    $("#minions").val("");
    $("input:radio[name=hobby]:checked").val("");
    $(".ur-voldermort").hide();
    $(".ur-penny").hide();
    $(".ur-scar").hide();
    $(".ur-aku").hide();
    $(".ur-voldermort").hide();
    $(".ur-messed-up").hide();
  });
  $("#spirit").click(function() {
    $("#spiritanimal").show();
    $(".tru-self").hide();
    $("#villain").hide();
    $("#relax").val("");
    $("input:radio[name=drama]:checked").val("");
    $("input:radio[name=mad]:checked").val("");
    $("#drinks").val("");
    $("input:radio[name=tv]:checked").val("");
    $(".ur-riri").hide();
    $(".ur-klaus").hide();
    $(".ur-scar").hide();
    $(".ur-aku").hide();
    $(".ur-voldermort").hide();
    $(".ur-messed-up").hide();
  });
  $("form#innerv").submit(function(event) {
    event.preventDefault();
    $("#innerv").hide();
    var ans1 = $("#powers").val();
    var ans2 = $("input:radio[name=enemy]:checked").val();
    var ans3 = $("input:radio[name=rogue]:checked").val();
    var ans4 = $("#minions").val();
    var ans5 = $("input:radio[name=hobby]:checked").val();
    var results = [ans1, ans2, ans3, ans4, ans5];
    var counts = {};
    for (var i = 0; i < results.length; i++) {
      var value = results[i];
      counts[value] = counts[value] ? counts[value] + 1 : 1;
    }
    if (counts["joker"] >= 3) {
      $(".ur-joker").show();
    } else if (counts["voldermort"] >= 3) {
      $(".ur-voldermort").show();
    } else if (counts["penny"] >= 3) {
      $(".ur-penny").show();
    } else if (counts["scar"] >= 3) {
      $(".ur-scar").show();
    } else if (counts["aku"] >= 3) {
      $(".ur-aku").show();
    } else {
      $(".ur-messed-up").show();
    }
  });
  $("form#spanimal").submit(function(event) {
    event.preventDefault();
    $("#spanimal").hide();
    var jib1 = $("#relax").val();
    var jib2 = $("input:radio[name=drama]:checked").val();
    var jib3 = $("input:radio[name=mad]:checked").val();
    var jib4 = $("#drinks").val();
    var jib5 = $("input:radio[name=tv]:checked").val();
    var results = [jib1, jib2, jib3, jib4, jib5];
    var counts = {};
    for (var i = 0; i < results.length; i++) {
      var value = results[i];
      counts[value] = counts[value] ? counts[value] + 1 : 1;
    }
    if (counts["riri"] >= 3) {
      $(".ur-riri").show();
    } else if (counts["klaus"] >= 3) {
      $(".ur-klaus").show();
    } else if (counts["fatamy"] >= 3) {
      $(".ur-fatamy").show();
    } else if (counts["bravo"] >= 3) {
      $(".ur-jonnybravo").show();
    } else if (counts["tyson"] >= 3) {
      $(".ur-miketyson").show();
    } else {
      $(".ur-enigma").show();
    }
  });


});
