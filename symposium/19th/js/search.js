
// 검색결과에서 리스트 상단 날짜부분, 장소 부분 안나오는 곳이 있음 - 확인 바람 
// 검색단어 입력을 2글자 이상으로 - 현재는 1글자도 됨


Array.prototype.unique = function() {
	var a = {};
	
	for(var i=0; i<this.length; i++)
	{
		if(typeof a[this[i]] == "undefined")
			a[this[i]] = 1;
	}
	
	this.length = 0;
	
	for(var i in a)
		this[this.length] = i;
	
	return this;
}


String.prototype.replaceAddStrong = function(str) {
	var re = new RegExp(str, "ig");
	var tempArray = this.match(re);
	var strReturn = this;
	
	if (tempArray != null) 
	{
		tempArray.unique();
		
		for(i=0;i < tempArray.length;i++)
			strReturn = strReturn.replace(eval("/"+tempArray[i]+"/g"),"<b><font color=red>"+tempArray[i]+"</font></b>");
	}
	
	return strReturn;
}


function send()
{
	$("#content-scroll").html("");
	$("#search_msg").html(
		'<div class="" style="color: #0b63a8;">' +
		'	Any will return papers relevant to any of the search keyword. <br>' +
		'	Search by Session Topic, Paper Title, Author.' +
		'</div>'
	);

	var t = $("#search_txt").val();
	var t2 = t.toLowerCase();

	if (t.length < 2) {
		alert("Please input more than 2 letters.");
		return ;
	}

	var text = "";
	var count = 0;	
	
	if( t.replace(/(^\s*)|(\s*$)/gi, "") )
	{

		var dbList = [DB,PS];

		for (var k=0; k<dbList.length; k++) {
			var ts = false;
			var TS = dbList[k];
	
			var list = new Array();

			//---------- TS -----------------------
			for (var i=0; i<TS.length; i++) {
				var temp0  = TS[i][0];
				var temp1  = TS[i][1];
				var temp2  = TS[i][2];
				var temp3  = TS[i][3];
				var temp4  = TS[i][4];
				var temp5  = TS[i][5];
				var temp6  = TS[i][6];
				var temp7  = TS[i][7].replaceAddStrong(t);
				var temp13  = TS[i][13];

				var index7  = TS[i][7].toLowerCase().indexOf(t2);

				var isExist = (index7 != -1 ) ? true : false;

				var j = i;

				for (j=i; TS[j+1]!=null; j++) {
					var index9  = TS[j][9].toLowerCase().indexOf(t2);
					var index10 = TS[j][10].toLowerCase().indexOf(t2);
					var index11 = TS[j][11].toLowerCase().indexOf(t2);

					if(index7 != -1 || (index9 != -1 || index10 != -1 || index11 != -1)) {

						if (index7 != -1 && i==j) {
							count++;
						} 
						if (index9 != -1) {
							count++;
						}
						if (index10 != -1) {
							count++;
						}
						if (index11 != -1) {
							count++;
						}

						var data = new Array();

						data[8] = TS[j][8];
						data[9]  = TS[j][9].replaceAddStrong(t);
						data[10]  = TS[j][10].replaceAddStrong(t);
						data[11]  = TS[j][11].replaceAddStrong(t);
						data[12] = TS[j][12];

						if (isExist) {
							data[0]  = TS[j][0];
							data[1]  = TS[j][1];
							data[2]  = TS[j][2];
							data[3]  = TS[j][3];
							data[4]  = TS[j][4];
							data[5]  = TS[j][5];
							data[6]  = TS[j][6];
							data[7]  = TS[j][7].replaceAddStrong(t);
							data[13]  = TS[j][13];
						} else {
							isExist = true;
							data[0]  = temp0;
							data[1]  = temp1;
							data[2]  = temp2;
							data[3]  = temp3;
							data[4]  = temp4;
							data[5]  = temp5;
							data[6]  = temp6;
							data[7]  = temp7;
							data[13]  = temp13;
						}

						list.push(data);
						ts = true;
					}

					if (TS[j+1]==null || TS[j+1][1]!='') {
						break;
					}
				}

				i=j;
			}

			if (ts) {
		    	text += writeData(list,true);
			}
		}




			$("#search_msg").html("<font size='4'><font color='blue'>" + count + "</font> items found for '<font color='red'>" + t + "</font>' </font> ");
			
	}
	else 
	{	
		alert("Please input more than 2 letters.");
		$("#search_txt").val('').focus();
		$("#search_msg").html("");
	}	
}

function searchEnter()
{
	if( event.keyCode == 13 )
		send();
}