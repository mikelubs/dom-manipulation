
      $(document).ready(function() {
        $("button#hello").click(function() {
          $("ul#user").prepend("<li>Hello!</li>");
          $("ul#webpage").append("<li>Why hello there!</li>");
          // previous code...
          $('li').css('background-color', 'green');
          $('li').click(function() {
            alert('hi');
          });
        });

        $("button#goodbye").click(function() {
          $("ul#user").prepend("<li>Goodbye!</li>");
          $("ul#webpage").append("<li>Goodbye, dear user!</li>");
          // previous code...
          $('li').css('background-color', 'green');
          $('li').click(function() {
            alert('hi');
          });
        });

        $("button#stop").click(function() {
          $("ul#user").prepend("<li>Stop copying me!</li>");
          $("ul#webpage").append("<li>Pardon me. I meant no offense.</li>");
          // previous code...
          $('li').css('background-color', 'green');
          $('li').click(function() {
            alert('hi');
          });
        });
      });
