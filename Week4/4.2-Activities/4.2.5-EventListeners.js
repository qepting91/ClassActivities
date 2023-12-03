document.addEventListener("DOMContentLoaded", function() {
  // Event listener for dog picture click
  const dogPicture = document.getElementById("dog-picture");
  dogPicture.addEventListener("click", function() {
    alert("Dog picture clicked!");
  });

  // Event listener for mouseover on class schedule list items
  const classWeekItems = document.querySelectorAll(".class-week");
  classWeekItems.forEach(item => {
    item.addEventListener("mouseover", function() {
      this.style.backgroundColor = "lightgrey";
    });
    item.addEventListener("mouseout", function() {
      this.style.backgroundColor = "";
    });
  });

  // Event listener for keydown on the whole page
  document.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
  });
});
