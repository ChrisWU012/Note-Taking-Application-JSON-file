//prevent redirect page
$("button").on("click", (e) => {
  e.preventDefault();
  console.log("e :");
});
// handling frontend functions
$(() => {
  console.log("Main.js funtion");
  // add function
  $("#add").on("click", (e) => {
    e.preventDefault();
    const note = $("#add-note").val();
    console.log(note);
    if (note === "") return;
    $("#add-note").val("");
    axios.post("note", { note }).then(() => reloadNotes());

    // axio.post("/note");
  });
  // post function
  // put function
  // delete function
});
//display notes
function reloadNotes() {
  console.log("Reload");
}
