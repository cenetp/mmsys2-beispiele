$("#square").animate({
  height: "200px",
  width: "200px"
}, 2000, function() {
  $(this).animate({
    height: "150px",
    width: "150px"
  }, 3000);
});
