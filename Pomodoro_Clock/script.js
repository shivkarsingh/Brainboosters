$(document).ready(function() {

  var breakclock = $('.block').FlipClock({
    clockFace: 'MinuteCounter',
    countdown: true,
    autoStart: false
  });

  var clock = $('.clock').FlipClock({
      clockFace: 'MinuteCounter',
      countdown: true,
      autoStart: false,

    }

  );

  var tick = 300;
  breakclock.setTime(tick);

  var time = 1500;
  clock.setTime(time);

  var event = clock.on(

    $(".stop").click(function() {

      clock.stop(function() {})
    }),

    $(".resume").click(function() {

      clock.start(function() {
        var mack = clock.getTime()

        if (mack == 00) {

          breakclock.start(function() {})
        }

      })
    }),

    $(".subtract").click(function() {

      if (clock.running == false) {
        if (time <= 60) {
          time = 60;
          clock.setTime(time)
          alert("Sorry, counter doesn't go below one minute!")}



        else
          time -= 60
        clock.setTime(time);
      }
    }),

    $(".plus").click(function() {
      if (clock.running == false) {
        time += 60;
        clock.setTime(time);
      }
    }),

    $(".breakplus").click(function() {
      if (breakclock.running == false) {
        tick += 60;
        breakclock.setTime(tick)
      }
    }),

    $(".breaksubtract").click(function() {

      if (breakclock.running == false) {
        if (tick <= 60) {
          tick = 60;
          breakclock.setTime(time)
          alert("Sorry, Break Clock doesn't go below one minute!")

        } else
          tick -= 60
        breakclock.setTime(tick)
      }
    }),

    $(".breakstop").click(function() {

      breakclock.stop(function() {})
    }),

    $(".reset").click(function() {
      clock.stop(function() {})
      breakclock.stop(function() {})
      clock.setTime(1500)
      breakclock.setTime(300)

    })

  )

});
