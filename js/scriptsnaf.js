//user-interface
$(document).ready(function() {
  $("form#riddleeasy").submit(function(event) {
    event.preventDefault();
    var ans1 = $("input:radio[name=ends]:checked").val();
    var ans2 = $("input:radio[name=never]:checked").val();
    var ans3 = $("input:radio[name=clap]:checked").val();
    var ans4 = $("input:radio[name=odd]:checked").val();
    var ans5 = $("input:radio[name=rainbow]:checked").val();

    var results = [ans1, ans2, ans3, ans4, ans5];
    var counts = {};
    for (var i = 0; i < results.length; i++) {
      var value = results[i];
      counts[value] = counts[value] ? counts[value] + 1 : 1;
    }
    if (counts["right"] >= 3) {
      $("#rightans").show();
    } else {
      $("#failedans").show();
    }
  });

  $("form#tougher").submit(function(event) {
    event.preventDefault();
    var ans6 = $("input:radio[name=word]:checked").val();
    var ans7 = $("input:radio[name=bridge]:checked").val();
    var ans8 = $("input:radio[name=list]:checked").val();
    var ans9 = $("input:radio[name=more]:checked").val();
    var ans10 = $("input:radio[name=short]:checked").val();



    var secondresults = [ans6, ans7, ans8, ans9, ans10];
    var secondcounts = {};
    for (var u = 0; u < secondresults.length; u++) {
      var secondvalue = secondresults[u];
      secondcounts[secondvalue] = secondcounts[secondvalue] ? secondcounts[secondvalue] + 1 : 1;
    }

    if (secondcounts["true"] >= 3) {
      $("#rightans2").show();
    } else {
      $("#failedans2").show();


    }

  });
});
