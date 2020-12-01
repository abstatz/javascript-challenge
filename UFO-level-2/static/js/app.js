// from data.js
var tableData = data;

// define table data on website
var tbody = d3.select("tbody");

var dataentry = {};


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

//scan for 

function dataentryupdate(){
	var inputElement = d3.select(this).select("input");	
	var inputValue = inputElement.property("value");
	var inputid = inputElement.attr("id");
	if(inputValue){
		dataentry[inputid] = inputValue;
	} 
	else{
		delete dataentry[inputid]
	}
	console.log(dataentry);
	filter();

}

// funciton to filter table data
function filter(){

//	var inputdate = d3.select("#datetime").property("value");

	var filtereddata = tableData; 
	//if(inputdate){
		//filtereddata = filtereddata.filter(date => date.datetime == inputdate);
		Object.entries(dataentry).forEach(([key, value]) => {
		
		filtereddata = filtereddata.filter(data => data[key] == value);
	});
	
	prime(filtereddata);

}

d3.selectAll(".filter").on("change", dataentryupdate);

//d3.selectAll("#filter-btn").on("click", dataentry);
prime(tableData);