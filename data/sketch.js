let year = 2019
let jso = {};
let arr = [];
let ct = 0;
let nameFind = {}

function preload() {
	table = loadTable('IdtoName.csv', 'csv', 'header');
	for(let i = 1920; i<2020; i++)
		arr[i-1920] = loadJSON("BattingData/" + i +".json");
}

function test(year)
{
	let obj = arr[year-1920];
	let str = "ID,First,Last,GS,PA,BA,SLG,BB,SO,HR,RBI,1st,2nd,3rd,4th,5th,6th,7th,8th,9th\r"
	for(temp in obj){
		let gameS = sum(obj[temp].order)
		if(gameS>35)
		{
			let gameS = sum(obj[temp].order)
			let ba = parseFloat((obj[temp].H/obj[temp].AB)).toFixed(3)
			let tb = obj[temp].H + obj[temp]["2B"] + (2*obj[temp]["3B"]) + (3*obj[temp].HR)
			let slg = parseFloat((tb/obj[temp].AB)).toFixed(3)

			let cur = ""
			cur = cur + temp + ","
			cur = cur + nameFind[temp].first + ","
			cur = cur + nameFind[temp].last + ","
			cur = cur + gameS + ","
			cur = cur + obj[temp].PA + ","
			cur = cur + ba + ","
			cur = cur + slg + ","
			cur = cur + obj[temp].BB + ","
			cur = cur + obj[temp].SO + ","
			cur = cur + obj[temp].HR + ","
			cur = cur + obj[temp].RBI + ","
			cur = cur + obj[temp].order[0] + ","
			cur = cur + obj[temp].order[1] + ","
			cur = cur + obj[temp].order[2] + ","
			cur = cur + obj[temp].order[3] + ","
			cur = cur + obj[temp].order[4] + ","
			cur = cur + obj[temp].order[5] + ","
			cur = cur + obj[temp].order[6] + ","
			cur = cur + obj[temp].order[7] + ","
			cur = cur + obj[temp].order[8] + "\r"

			str = str + cur
		}
	}
	console.log(str)
	return str
}
function setup() {
	/*for(let x = 1920; x<2020; x++)
	{
		testd(x);
	}*/
	//console.log(JSON.stringify(jso))
	let tb = table.getArray()
	for(i in tb)
	{
		let id = tb[i][0]
		nameFind[tb[i][0]] = {}
		nameFind[tb[i][0]].first = tb[i][2]
		nameFind[tb[i][0]].last = tb[i][1]
	}
	test(2019)
	//console.log(JSON.stringify(nameFind))
}

function sum(array)
{
	let tot = 0;
	for(i in array)
		tot+=array[i];
	return tot;
}

function testd(year)
{
	let obj = arr[year-1920];

	for(temp in obj){
		if(obj[temp].PA>=350){
			ct++;
			let gameS = sum(obj[temp].order)
			for(let i =0; i<9; i++)
			{
				obj[temp].order[i]=(obj[temp].order[i])/gameS;
			}
			let name = temp+""+year
			let tb = obj[temp].H + obj[temp]["2B"] + (2*obj[temp]["3B"]) + (3*obj[temp].HR)

			jso[name] = {}
			jso[name].order = obj[temp].order;
			jso[name].PA = obj[temp].PA;
			jso[name].GS = gameS;

			jso[name].BA = obj[temp].H/obj[temp].AB;
			jso[name].SLG = tb/obj[temp].AB;
			jso[name].BB = obj[temp].BB/obj[temp].PA;
			jso[name].SO = obj[temp].SO/obj[temp].PA;
			jso[name].HR = obj[temp].HR/obj[temp].PA;
			jso[name].RBI = obj[temp].RBI/obj[temp].PA;



		}
	}
	console.log(ct)
}
