var storage = window.localStorage;
var key="";
storage.setItem(key, value); // Pass a key name and its value to add or update that key.
storage.removeItem(key); // Pass a key name to remove that key from storage.
var value = storage.getItem(key); // Pass a key name to get its value.
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

var TAB_CONFIG = 2;
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
      if(TAB_CONFIG != 1) {
        TAB_CONFIG = 1;
        $('#moveGroupTop').html(moveGroup);
        $('#moveTab').html("");
        $('.nav-tabs').hide();
        $('#moveTabTop').hide()

        $('#moveTab').removeClass('tab-pane active');
        $('#p1Tab').removeClass('tab-pane fade in active');
        $('#fieldTab').removeClass('tab-pane fade in active');
        $('#p2Tab').removeClass('tab-pane fade in active');

        $('.container').after($('#fieldTab'));
      }
      regenMoves();
      stickyMoves.regenStickyMoves();
    });

    $("#standardtabs").click(function() {
      if(TAB_CONFIG != 2) {
        TAB_CONFIG = 2;
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
      }
      regenMoves();
      stickyMoves.regenStickyMoves();
    });

    $("#alltabs").click(function() {
      if(TAB_CONFIG != 3) {
        TAB_CONFIG = 3;
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
      }
      regenMoves();
      stickyMoves.regenStickyMoves();
    });

  });
