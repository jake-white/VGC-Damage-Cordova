var moveGroup = `
<div class="move-result-subgroup" style="display:inline-block;">
  <div class="result-move-header"><span id="resultHeaderL">Pokemon 1's Moves (select one to show detailed results)</span></div>
  <div><input class="result-move btn-input" type="radio" name="resultMove" id="resultMoveL1" checked="checked" /><label class="custombtn btn-xxxwide btn-top" for="resultMoveL1">Hi Jump Kick</label> <span id="resultDamageL1">??? - ???%</span></div>
  <div><input class="result-move btn-input" type="radio" name="resultMove" id="resultMoveL2" /><label class="custombtn btn-xxxwide btn-mid" for="resultMoveL2">Falcon Punch</label> <span id="resultDamageL2">??? - ???%</span></div>
  <div><input class="result-move btn-input" type="radio" name="resultMove" id="resultMoveL3" /><label class="custombtn btn-xxxwide btn-mid" for="resultMoveL3">Suspicious Odor</label> <span id="resultDamageL3">??? - ???%</span></div>
  <div><input class="result-move btn-input" type="radio" name="resultMove" id="resultMoveL4" /><label class="custombtn btn-xxxwide btn-bottom" for="resultMoveL4">Tombstoner</label> <span id="resultDamageL4">??? - ???%</span></div>
</div>
<div class="move-result-subgroup">
  <div class="result-move-header"><span id="resultHeaderR">Pokemon 2's Moves (select one to show detailed results)</span></div>
  <div><input class="result-move btn-input" type="radio" name="resultMove" id="resultMoveR1" /><label class="custombtn btn-xxxwide btn-top" for="resultMoveR1">Hi Jump Kick</label> <span id="resultDamageR1">??? - ???%</span></div>
  <div><input class="result-move btn-input" type="radio" name="resultMove" id="resultMoveR2" /><label class="custombtn btn-xxxwide btn-mid" for="resultMoveR2">Falcon Punch</label> <span id="resultDamageR2">??? - ???%</span></div>
  <div><input class="result-move btn-input" type="radio" name="resultMove" id="resultMoveR3" /><label class="custombtn btn-xxxwide btn-mid" for="resultMoveR3">Suspicious Odor</label> <span id="resultDamageR3">??? - ???%</span></div>
  <div><input class="result-move btn-input" type="radio" name="resultMove" id="resultMoveR4" /><label class="custombtn btn-xxxwide btn-bottom" for="resultMoveR4">Tombstoner</label> <span id="resultDamageR4">??? - ???%</span></div>
</div>`

var storage = window.localStorage;
var TAB_CONFIG = 1;
var notabs = function() {
  storage.setItem("TAB_CONFIG", TAB_CONFIG);
  $('#moveGroupTop').html(moveGroup);
  $('#moveTab').html("");
  $('.nav-tabs').hide();
  $('#moveTabTop').hide()

  $('#moveTab').removeClass('tab-pane active');
  $('#p1Tab').removeClass('tab-pane fade in active');
  $('#fieldTab').removeClass('tab-pane fade in active');
  $('#p2Tab').removeClass('tab-pane fade in active');

  $('.container').after($('#fieldTab'));

  regenMoves();
  stickyMoves.regenStickyMoves();
}

var standardtabs = function() {
  storage.setItem("TAB_CONFIG", TAB_CONFIG);
  $('#moveGroupTop').html(moveGroup);
  $('#moveTab').html("");
  $('.nav-tabs').show();
  $('#moveTabTop').hide();


  $('#moveTabTop').removeClass("active");
  $('#fieldTabTop').removeClass("active");
  $('#p2TabTop').removeClass("active");
  $('#moveTab').removeClass('tab-pane fade in active');
  $('#fieldTab').removeClass('tab-pane fade in active');
  $('#p2Tab').removeClass('tab-pane fade in active');


  $('#p1TabTop').addClass("active");
  $('#p1Tab').addClass('tab-pane fade in active');
  $('#fieldTab').addClass('tab-pane fade');
  $('#p2Tab').addClass('tab-pane fade');

  $('#p1Tab').after($('#fieldTab'));
  regenMoves();
  stickyMoves.regenStickyMoves();
}

var alltabs = function() {
  storage.setItem("TAB_CONFIG", TAB_CONFIG);
  $('#moveTabTop').addClass("active");
  $('#p1TabTop').removeClass("active");
  $('#fieldTabTop').removeClass("active");
  $('#p2TabTop').removeClass("active");

  $('#moveGroupTop').html("");
  $('#moveTab').html(moveGroup);
  $('.nav-tabs').show();
  $('#moveTabTop').show();

  $('#p1Tab').removeClass('tab-pane fade in active');
  $('#fieldTab').removeClass('tab-pane fade in active');
  $('#p2Tab').removeClass('tab-pane fade in active');

  $('#moveTab').addClass('tab-pane fade in active');
  $('#p1Tab').addClass('tab-pane fade');
  $('#fieldTab').addClass('tab-pane fade');
  $('#p2Tab').addClass('tab-pane fade');

  $('#p1Tab').after($('#fieldTab'));

  regenMoves();
  stickyMoves.regenStickyMoves();
}

var TAB_PROCEDURES = [notabs, standardtabs, alltabs];

$(document).ready(function(){
    $("#settings").click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'fast', function() {
        $("#settings_dialog").dialog();
      });
    });
    $("#credits").click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'fast', function() {
        $("#credits_dialog").dialog();
      });
    });

    $("#notabs").click(function() {
      TAB_CONFIG = 0;
      notabs();
      calculate();
    });

    $("#standardtabs").click(function() {
      TAB_CONFIG = 1;
      standardtabs();
      calculate();
    });

    $("#alltabs").click(function() {
      TAB_CONFIG = 2;
      alltabs();
      calculate();
    });

    TAB_CONFIG = storage.getItem("TAB_CONFIG");
    if(TAB_CONFIG == null) {
      TAB_CONFIG = 1;
    }
    else {
      TAB_PROCEDURES[TAB_CONFIG]();
    }

  });
