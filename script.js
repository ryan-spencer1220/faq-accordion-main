const buttons = document.querySelectorAll(".plus-icon");

// loop through HTML collection of buttons
buttons.forEach((button) => {
  // add event listener to each button
  button.addEventListener("click", () => {
    // initiate variables representative of data attributes
    const id = button.dataset.accordian;
    const content = document.querySelector(`#content-${id}`);

    if (content.classList.contains("active")) {
      // remove all existing active classes
      content.classList.remove("active");
      button.classList.remove("active");
    } else {
      // set new, specific active classes
      button.classList.add("active");
      content.classList.add("active");
    }
  });
});
