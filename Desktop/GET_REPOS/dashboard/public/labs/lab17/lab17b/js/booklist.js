$(document).ready(function() {
    // --------- jQuery Data Section ---------
  
    var book1 = {
      title: "Seveneves",
  
      author: "Neal Stephenson"
    };
  
    var book2 = {
      title: "How Not to be Wrong",
  
      author: "Jordan Ellenberg"
    };
  
    var book3 = {
      title: "The Vital Question",
  
      author: "Nick Lane"
    };
  
    var book4 = {
      title: "The Power to Compete",
  
      author: "Ryoichi Mikitani and Hiroshi Mikitani"
    };
  
    var book5 = {
      title: "Sapiens: A Brief History of Humankind",
  
      author: "Noah Yaval Harai"
    };
  
    var books = new Array();
  
    books.push(book1);
  
    books.push(book2);
  
    books.push(book3);
  
    books.push(book4);
  
    books.push(book5);
  
    var img_ref = {
      url:
        "http://www.gannett-cdn.com/-mm-/dcc982e8ed28edbe24141c93759ed7448c9e2642/c=58-0-965-682&r=x404&c=534x401/local/-/media/2016/05/20/USATODAY/USATODAY/635993645233133294-EPA-USA-WORLD-BANK-IMF-SPRING-MEETINGS-81292935.JPG",
  
      src: "http://bit.ly/1RiIMVl",
  
      alt: "Bill Gates",
  
      height: 100, // orig 401 by 4:1
  
      width: 133 // orig 534 by 4:1
    };
  
    var reference = {
      url:
        "http://www.usatoday.com/story/money/markets/2016/05/20/bill-gates-read-these-5-books-summer/84675556/",
  
      src: "http://usat.ly/20hirO3",
  
      alt: "Gates Books",
  
      text: "BG:5 Books for Summer 2016"
    };
  
    // --------- jQuery Data Section ---------
  
    // --------- jQuery Code Section ---------
  
    // apply bootstrap panel classes
  
    $("img").attr(img_ref);
  
    $("a").attr(reference);
  
    $("ol").addClass("list-group");
  
    $("li").addClass("list-group-item");
  
    $("li").each(function(i) {
      this.innerText = i + 1 + ". " + "\"" + books[i].title+ "\"" + " by " + books[i].author;
    });
  
    $("li").each(function(i) {
      if (i % 2 != 0) {
        $(this).addClass("even");
      } else {
        $(this).addClass("odd");
      }
    });
    $(".even").css("background", "lightgray");
    $(".odd").css("background", "white");
    // --------- jQuery Code Section ---------
  });
  