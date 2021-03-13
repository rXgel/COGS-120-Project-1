getData();

async function getData() {
  const response = await fetch('/api');
  const data2 = await response.json();
  console.log(data2);

  for (item of data2) {
    const name = document.createElement('a');
    name.setAttribute('id', 'projName');
    name.setAttribute('onClick', 'getName(this.textContent)');

    name.textContent = item.projName;
    $(".dropdown-content").append(name);
  }
}

async function getName(text) {
  $("#changeName").html(text);

  const response = await fetch('/api');
  const data2 = await response.json();
  for (item of data2) {
    if (item.projName == text) {
      //console.log(item.projName);
      console.log(item.projName == text);

      const deadline = document.createElement('p');
      deadline.textContent = item.deadline;
      $("#Deadline").append(deadline);

      const topic = document.createElement('p');
      topic.textContent = item.topic;
      $("#Topic").append(topic);

      const subtasks = document.createElement('p');
      subtasks.textContent = item.subtasks;
      $("#Subtasks").append(subtasks);
    }
  } 
};

// $(document).ready(function(){
//     // Get value on button click and show alert
//     $("#projName").click(function(){
//       console.log(name);
//     });
// });