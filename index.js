$(document).ready(function () {
  $("#example").DataTable({
    paging: false,
    info: false,
    dom: "Bfrtip",
    buttons: ["copy", "csv", "excel", "pdf", "print"],
  });
});
