document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll("#chessboard td");

    cells.forEach(cell => {
        cell.addEventListener("click", function () {
            if (cell.textContent === "♘") {
                cell.textContent = "";
            } else {
                cell.textContent = "♘";
            }
        });
    });
});
