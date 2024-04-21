// JavaScript Document

// @ author : Sungmo.Kim
// @ contact : nemo891124@gmail.com
// @ date : 2018.11.13

var count=0;

function writeData(list) {
	var text = '';

		for (var i=0; i<list.length; i++) {
			var j=i;

			if (list[i][0]!='') {
				text += 
					'<div class="section mb-20">' +
					'  <h5 class="">'+list[i][4]+' / '+list[i][5]+'</h5>' +
					'  <table border="0" cellspacing="2" cellpadding="4" class="tb-session '+list[i][1]+'">' +
					'    <thead>' +
					'      <tr>' +
					'        <th width="120"><div class="code-session">Session '+list[i][2]+' : </div></th>' +
					'        <th><div class="title-session ">'+list[i][7]+'</div></th>' +
					'      </tr>' +
					'    </thead>' +
					'    <tbody>' +
					'      <tr>' +
					'        <td colspan="2"><div class="title-chair pt-10">'+list[i][6]+'</div></td>' +
					'        </tr>' +
					'    </tbody>' +
					'  </table>' +
					'  <table border="0" cellspacing="2" cellpadding="2" class="tb-paper">' +
					'    <tbody>' +
					'      <tr>' +
					'        <td scope="col" class="th-paper ">No.</td>' +
					'        <td scope="col" class="th-paper tal pl-50"><span class="ml-50 pl-50">Title / Author(s) </span></td>' +
					'        <td scope="col" class="th-paper tac video-paper">Video</td>' +
					'      </tr>';
			}

			for (j=i; true; j++) {

				text +=
					'      <tr class="line-paper">' +
					'        <td valign="top" class="code-paper"><div>'+list[j][8]+'</div></td>' +
					'        <td class="paper">';


					if (list[j][12]!="") {
						text +=
							'          <div class="fwb"><a href="'+list[j][12]+'" target="_blank">'+list[j][9]+'</a></div>' +
							'          <div class="belong "><span class="author">'+list[j][10]+'</span></div></td>' +
							'        <td class="video-paper"><a href="'+list[j][12]+'" target="_blank"><img src="../cover/'+list[j][11]+'" width=100></a></td>' +
							'      </tr>';
					} else {
						text +=
							'          <div class="fwb">'+list[j][9]+'</div>' +
							'          <div class="belong "><span class="author">'+list[j][10]+'</span>'+list[j][11]+'</div></td>' +
							'        <td class="video-paper"></td>' +
							'      </tr>';

					}

				if (list[j+1]==null||list[j+1][0]!='') break;
			}

			if (list[i][0]!='') {
				text +=
					'    </tbody>' +
					'  </table>' +
					'  <a name="'+list[i][13]+'"></a>' +
					'</div>	' +
					'<div class="page-nav">' +
					'  <a href="papers.html" target="_self"><img src="../img/btn_home.gif" align="absmiddle"> HOME </a> &nbsp; ' +
					'  <a href="javascript:history.back();"><img src="../img/btn_back.gif" align="absmiddle"> BACK </a> &nbsp; ' +
					'  <a href="#top"><img src="../img/btn_top.gif" align="absmiddle"> TOP </a>' +
					'</div>';
			}

			i = j;
		}
		

	$("#content-scroll").append(text);
	return text;
}


