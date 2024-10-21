$(document).ready(function () {
  $("#mobile-toggle").click(function (event) {
    event.stopPropagation();
    $(".nav-items-wrapper").toggleClass("active");
  });

  $(document).click(function (event) {
    if (
      !$(event.target).closest(".nav-items-wrapper").length &&
      !$(event.target).is("#mobile-toggle")
    ) {
      $(".nav-items-wrapper").removeClass("active");
    }
  });
});
