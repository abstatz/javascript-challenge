// from data.js
var tableData = data;

// define table data on website
var tbody = d3.select("tbody")


//make into function
function prime(data){

//reset data
	tbody.html("");


	data.forEach((datapoint) => {

		var rowdata = tbody.append("tr");
		Object.values(datapoint).forEach((value) => {

			var data1 = rowdata.append("td");
			data1.text(value);
		});
	});
}


prime(tableData);


// funciton to filter table data

function filter(){

	var inputdate = d3.select("#datetime").property("value");

	var filtereddata = tableData; 
	if(inputdate){
		filtereddata = filtereddata.filter(date => date.datetime == inputdate);
	}
	

	prime(filtereddata);

}

d3.selectAll("#filter-btn").on("click", filter);