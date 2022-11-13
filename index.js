function openNav() {
    document.getElementById("mySidebar").style.width = "auto";
    /* let element = document.getElementById("mySidebar");
    let applied_styles = window.getComputedStyle(element);
    let current_width = applied_styles.width;
    let current_window_width = window.innerWidth;
    let margin_to_set = current_window_width - 246.281; */
    // style_applied.width
    /* document.getElementById("main").style.marginLeft = "0"; */
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }