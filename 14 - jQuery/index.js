// $("h1").css("color", "red");

// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");

// $("h1").addClass("big-title margin-50");
// console.log($("h1").hasClass("margin-50"));

// $("h1").text("Bye-bye")

// $("button").text("don\'t click me");
// $("button").html("<em>Hello</em>")

// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com");

// console.log($("h1").attr("class"));

// $("button")[1].text("hello")

// $("h1").click(function() {
//     $("h1").addClass("big-title");
//     setTimeout(function() {
//         $("h1").removeClass("big-title");
//     }, )
// })

// $("button").click(function() {
//     $("h1").css("color", "purple")
// })

// $("input").keypress(function(event) {
//     console.log(event.key);
// })

// $(document).keypress(function(event) {
//     console.log(event.key);
// })

$("h1").addClass("big-title");

// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "plum")
// })

// $("h1").on("mouseout", function() {
//     $("h1").css("color", "red")
// })

// $("h1").after("<p>there</p>")
// $("input").after("<h1> Bye-bye </h1>")

// $("button").remove()

// $("button").on("click", function() {
//     $("h1").hide();
// })

// $("button").on("click", function() {
//     $("h1").toggle();
// })

// $("button").on("click", function() {
//     $("h1").fadeOut();
// })

// $("button").on("click", function() {
//     $("h1").fadeToggle();
// })

// $("button").on("click", function() {
//     $("h1").slideToggle();
// })

// $("button").on("click", function() {
//     $("h1").animate({opacity:0.5});
// })

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({marginLeft:"30%"}, 5000);
})

