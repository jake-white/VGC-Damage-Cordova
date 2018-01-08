//I fucking hate my life and this project structure

function plusMinusButtons() {
  //p1 hp
  $('#p1 .hp .plus').on('click', function() {
    increaseStat("hp", $("#p1"));
  });
  $('#p1 .hp .minus').on('click', function() {
    decreaseStat("hp", $("#p1"));
  });

  //p1 atk
  $('#p1 .at .plus').on('click', function() {
    increaseStat("at", $("#p1"));
  });
  $('#p1 .at .minus').on('click', function() {
    decreaseStat("at", $("#p1"));
  });

  //p1 def
  $('#p1 .df .plus').on('click', function() {
    increaseStat("df", $("#p1"));
  });
  $('#p1 .df .minus').on('click', function() {
    decreaseStat("df", $("#p1"));
  });

  //p1 spatk
  $('#p1 .sa .plus').on('click', function() {
    increaseStat("sa", $("#p1"));
  });
  $('#p1 .sa .minus').on('click', function() {
    decreaseStat("sa", $("#p1"));
  });

  //p1 spdef
  $('#p1 .sd .plus').on('click', function() {
    increaseStat("sd", $("#p1"));
  });
  $('#p1 .sd .minus').on('click', function() {
    decreaseStat("sd", $("#p1"));
  });

  //p1 speed
  $('#p1 .sp .plus').on('click', function() {
    increaseStat("sp", $("#p1"));
  });
  $('#p1 .sp .minus').on('click', function() {
    decreaseStat("sp", $("#p1"));
  });








  //p2 hp
  $('#p2 .hp .plus').on('click', function() {
    increaseStat("hp", $("#p2"));
  });
  $('#p2 .hp .minus').on('click', function() {
    decreaseStat("hp", $("#p2"));
  });

  //p2 atk
  $('#p2 .at .plus').on('click', function() {
    increaseStat("at", $("#p2"));
  });
  $('#p2 .at .minus').on('click', function() {
    decreaseStat("at", $("#p2"));
  });

  //p2 def
  $('#p2 .df .plus').on('click', function() {
    increaseStat("df", $("#p2"));
  });
  $('#p2 .df .minus').on('click', function() {
    decreaseStat("df", $("#p2"));
  });

  //p2 spatk
  $('#p2 .sa .plus').on('click', function() {
    increaseStat("sa", $("#p2"));
  });
  $('#p2 .sa .minus').on('click', function() {
    decreaseStat("sa", $("#p2"));
  });

  //p2 spdef
  $('#p2 .sd .plus').on('click', function() {
    increaseStat("sd", $("#p2"));
  });
  $('#p2 .sd .minus').on('click', function() {
    decreaseStat("sd", $("#p2"));
  });

  //p2 speed
  $('#p2 .sp .plus').on('click', function() {
    increaseStat("sp", $("#p2"));
  });
  $('#p2 .sp .minus').on('click', function() {
    decreaseStat("sp", $("#p2"));
  });
}
