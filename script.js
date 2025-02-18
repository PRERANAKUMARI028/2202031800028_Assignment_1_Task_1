function toggleNav() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("w-0")) {
        sidebar.classList.remove("w-0", "hidden");
        sidebar.classList.add("w-64");
    } else {
        sidebar.classList.remove("w-64");
        sidebar.classList.add("w-0", "hidden");
    }
}