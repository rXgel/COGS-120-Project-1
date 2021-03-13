/* gets user input and creates new project with the input name */
$(document).ready(function(){
    // Get value on button click and show alert
    $("#createProj").click(function(){
    	var projName = "";
    	var topic = "";

        var projName = $("#inputProjName").val();

        var date = new Date($('#dateinput').val());
        var day = date.getDate();
  		var month = date.getMonth() + 1;
  		var year = date.getFullYear();
  		var deadline = [month, day, year].join('/');

  		var topic = $("input[name='topic']:checked").val();
        
  		var subtasks = [];

        console.log(projName);
        console.log(deadline);
        console.log(topic);

        if(projName == "" || deadline == "NaN/NaN/NaN" || topic == "") {
        	alert("You must fill in all fields.");
        	return;
        }

        const data = {projName, deadline, topic, subtasks};
        const options = {
        	method: 'POST',
        	headers: {
        		'Content-Type': 'application/json'
        	},
        	body: JSON.stringify(data)
        };

        fetch('/api', options);
        alert("Successfully created new project!");
        window.location.href = "projects";
    });
});