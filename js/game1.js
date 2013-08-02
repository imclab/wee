	var d = new Date();
	var flashTime = d.getTime();
	var flashVars={
	   localConnectionId:flashTime
	};
	swfobject.embedSWF("test.swf", "myContent", "617", "450", "10.0.0", "expressInstall.swf",flashVars);
	var popupDisable = false;
	var imgDir = 'male';
	var dirList = new Array();
	var start = 0;
	var images = new Array("test","test1","test3");
	var fn = new Array();
	
	var propCount = [];
	var counterstart = 0;
	var mPropsInfo = {'hair2':new Array("Hair Name1","Details about Hair 1",true,true),
					 'hair3':new Array("Hair Name2","Details about Hair 2",true,true),
					 'hair4':new Array("Hair Name3","Details about Hair 3",true,true),
					 'hair5':new Array("Hair Name4","Details about Hair 4",true,true),
					 'hair6':new Array("Hair Name5","Details about Hair 5",true,true),
					 'hair7':new Array("Hair Name6","Details about Hair 6",true,true),
					 'hair8':new Array("Hair Name7","Details about Hair 7",true,false),
					 'hair9':new Array("Hair Name8","Details about Hair 8",true,true),
					 'hair10':new Array("Hair Name9","Details about Hair 9",true,true),
					 'hair11':new Array("Hair Name10","Details about Hair 10",true,true),
					 'hair12':new Array("Hair Name11","Details about Hair 11",true,true),
					 'hair13':new Array("Hair Name12","Details about Hair 12",true,true),
					 'hair14':new Array("Hair Name13","Details about Hair 13",true,true),
					 'hair15':new Array("Hair Name14","Details about Hair 14",true,true),
					 'hair16':new Array("Hair Name15","Details about Hair 15",true,true),
					 'hair17':new Array("Hair Name16","Details about Hair 16",true,true),
					 'hair18':new Array("Hair Name17","Details about Hair 17",true,true),
					 'hair19':new Array("Hair Name18","Details about Hair 18",true,true),
					 'hair20':new Array("Hair Name19","Details about Hair 19",true,false),
					 'hair21':new Array("Hair Name20","Details about Hair 20",true,true),					 
					 'hair22':new Array("Hair Name21","Details about Hair 21",true,true),
					 'hair23':new Array("Hair Name22","Details about Hair 22",true,true),
					 'hair24':new Array("Hair Name23","Details about Hair 23",true,true),
					 'hair25':new Array("Hair Name24","Details about Hair 24",true,true),
					 'hair26':new Array("Hair Name25","Details about Hair 25",true,true),					 
					 'facial2':new Array("Facial Hair 1","Details about Facial Hair 1",true,false),
					 'facial3':new Array("Facial Hair 2","Details about Facial Hair 2",true,false),
					 'facial4':new Array("Facial Hair 3","Details about Facial Hair 3",true,false),
					 'facial5':new Array("Facial Hair 4","Details about Facial Hair 4",true,false),
					 'facial6':new Array("Facial Hair 5","Details about Facial Hair 5",true,false),
					 'facial7':new Array("Facial Hair 6","Details about Facial Hair 6",true,false),
					 'facial8':new Array("Facial Hair 7","Details about Facial Hair 7",true,false),
					 'facial9':new Array("Facial Hair 8","Details about Facial Hair 8",true,false),
					 'facial10':new Array("Facial Hair 9","Details about Facial Hair 9",true,false),
					 'facial11':new Array("Facial Hair 10","Details about Facial Hair 10",true,false),
					 'facial12':new Array("Facial Hair 11","Details about Facial Hair 11",true,false),
					 'facial13':new Array("Facial Hair 12","Details about Facial Hair 12",true,false),
					 'facial14':new Array("Facial Hair 13","Details about Facial Hair 13",true,false),
					 'facial15':new Array("Facial Hair 14","Details about Facial Hair 14",true,false),
					 'facial16':new Array("Facial Hair 15","Details about Facial Hair 15",true,false),
					 'facial17':new Array("Facial Hair 16","Details about Facial Hair 16",true,false),
					 'facial18':new Array("Facial Hair 17","Details about Facial Hair 17",true,false),
					 'facial19':new Array("Facial Hair 18","Details about Facial Hair 18",true,false),
					 'facial20':new Array("Facial Hair 19","Details about Facial Hair 19",true,false),
					 'facial21':new Array("Facial Hair 20","Details about Facial Hair 20",true,false),
					 'headwear2':new Array("Head Wear 1","Details about Head Wear 1",true,false),
					 'headwear3':new Array("Head Wear 2","Details about Head Wear 2",true,true),
					 'headwear4':new Array("Head Wear 3","Details about Head Wear 3",true,false),
					 'headwear5':new Array("Head Wear 4","Details about Head Wear 4",true,true),
					 'headwear6':new Array("Head Wear 5","Details about Head Wear 5",true,true),
					 'headwear7':new Array("Head Wear 6","Details about Head Wear 6",true,true),
					 'headwear8':new Array("Head Wear 7","Details about Head Wear 7",true,true),
					 'headwear9':new Array("Head Wear 8","Details about Head Wear 8",true,true),
					 'headwear10':new Array("Head Wear 9","Details about Head Wear 9",true,true),
					 'headwear11':new Array("Head Wear 10","Details about Head Wear 10",true,true),
					 'headwear12':new Array("Head Wear 11","Details about Head Wear 11",true,true),
					 'headwear13':new Array("Head Wear 12","Details about Head Wear 12",true,true),
					 'headwear14':new Array("Head Wear 13","Details about Head Wear 13",true,false),
					 'headwear15':new Array("Head Wear 14","Details about Head Wear 14",true,true),
					 'headwear16':new Array("Head Wear 15","Details about Head Wear 15",true,true),
					 'top2':new Array("Top 1","Details about Top 1",true,true),
					 'top3':new Array("Top 2","Details about Top 2",true,true),
					 'top4':new Array("Top 3","Details about Top 3",true,false),
					 'top5':new Array("Top 4","Details about Top 4",true,false),
					 'top6':new Array("Top 5","Details about Top 5",true,false),
					 'top7':new Array("Top 6","Details about Top 6",true,true),
					 'top8':new Array("Top 7","Details about Top 7",true,false),
					 'top9':new Array("Top 8","Details about Top 8",true,false),
					 'top10':new Array("Top 9","Details about Top 9",true,false),
					 'top11':new Array("Top 10","Details about Top 10",true,true),
					 'top12':new Array("Top 11","Details about Top 11",true,true),
					 'bottom2':new Array("Bottom 1","Details about Bottom 1",true,false),
					 'bottom3':new Array("Bottom 2","Details about Bottom 2",true,false),
					 'bottom4':new Array("Bottom 3","Details about Bottom 3",true,true),
					 'bottom5':new Array("Bottom 4","Details about Bottom 4",true,false),
					 'bottom6':new Array("Bottom 5","Details about Bottom 5",true,true),
					 'bottom7':new Array("Bottom 6","Details about Bottom 6",true,true),
					 'outfit2':new Array("Short Sleeve 2 piece","Details about Outfit 1",true,true),
					 'outfit3':new Array("Long Sleeve 2 piece","Details about Outfit 2",true,true),
					 'outfit4':new Array("Agbada","Details about Outfit 3",true,true),
					 'outfit5':new Array("Ijaw Style","Details about Outfit 4",true,true),
					 'outfit6':new Array("Warri Style","Details about Outfit 5",true,true),
					 'outfit7':new Array("Edo Style","Details about Outfit 6",true,true),
					 'outfit8':new Array("Tiv Style","Details about Outfit 7",true,true),
					 'outfit9':new Array("Igbo Style","Details about Outfit 8",true,true),
					 'outfit10':new Array("Ijaw formal","Details about Outfit 9",true,true),
					 'outfit11':new Array("Hausa","Details about Outfit 10",true,true),					 
					 'footwear2':new Array("Foot Wear 1","Details about Foot Wear 1",true,false),
					 'footwear3':new Array("Foot Wear 2","Details about Foot Wear 2",true,false),
					 'footwear4':new Array("Foot Wear 3","Details about Foot Wear 3",true,false),
					 'footwear5':new Array("Foot Wear 4","Details about Foot Wear 4",false,false),
					 'footwear6':new Array("Foot Wear 5","Details about Foot Wear 5",true,false),
					 'footwear7':new Array("Foot Wear 6","Details about Foot Wear 6",false,false),
					 'footwear8':new Array("Foot Wear 7","Details about Foot Wear 7",true,false),
					 'footwear9':new Array("Foot Wear 8","Details about Foot Wear 8",true,false),
					 'footwear10':new Array("Foot Wear 9","Details about Foot Wear 9",true,false),
					 'footwear11':new Array("Foot Wear 10","Details about Foot Wear 10",false,false),
					 'footwear12':new Array("Foot Wear 11","Details about Foot Wear 11",true,false),
					 'footwear13':new Array("Foot Wear 12","Details about Foot Wear 12",true,false),
					 'maccessories2':new Array("Accessories 1","Details about Accessories 1",true,false),
					 'maccessories3':new Array("Accessories 2","Details about Accessories 2",true,true),
					 'maccessories4':new Array("Accessories 3","Details about Accessories 3",true,true),
					 'maccessories5':new Array("Accessories 4","Details about Accessories 4",true,false),
					 'maccessories6':new Array("Accessories 5","Details about Accessories 5",false,false),
					 'maccessories7':new Array("Accessories 6","Details about Accessories 6",false,false),
					 'maccessories8':new Array("Accessories 7","Details about Accessories 7",false,false),
					 'maccessories9':new Array("Accessories 8","Details about Accessories 8",true,false),
					 'maccessories10':new Array("Accessories 9","Details about Accessories 9",true,false),
					 'maccessories11':new Array("Accessories 10","Details about Accessories 10",true,false),
					 'maccessories12':new Array("Accessories 11","Details about Accessories 11",true,true),
					 'maccessories13':new Array("Accessories 12","Details about Accessories 12",true,false),
					 'interest11':new Array("Mp3 Player","Details about Mp3 Player",true,false),
					 'interest12':new Array("Console","Details about Console",true,false),
					 'interest6':new Array("DJ table with speakers / turntable","Details about DJ Table",true,true)
					 };
	
	var fPropsInfo = {'fhair2':new Array("fHair Name1","Details about fHair 1",true,true),
					 'fhair3':new Array("fHair Name2","Details about fHair 2",true,true),
					 'fhair4':new Array("fHair Name3","Details about fHair 3",true,true),
					 'fhair5':new Array("fHair Name4","Details about fHair 4",true,true),
					 'fhair6':new Array("fHair Name5","Details about fHair 5",true,true),
					 'fhair7':new Array("fHair Name6","Details about fHair 6",true,true),
					 'fhair8':new Array("fHair Name7","Details about fHair 7",true,true),
					 'fhair9':new Array("fHair Name8","Details about fHair 8",true,true),
					 'fhair10':new Array("fHair Name9","Details about fHair 9",true,true),
					 'fhair11':new Array("fHair Name10","Details about fHair 10",true,true),
					 'fhair12':new Array("fHair Name11","Details about fHair 11",true,true),
					 'fhair13':new Array("fHair Name12","Details about fHair 12",true,true),
					 'fhair14':new Array("fHair Name13","Details about fHair 13",true,true),
					 'fhair15':new Array("fHair Name14","Details about fHair 14",true,true),
					 'fhair16':new Array("fHair Name15","Details about fHair 15",true,true),
					 'fhair17':new Array("fHair Name16","Details about fHair 16",true,true),
					 'fhair18':new Array("fHair Name17","Details about fHair 17",true,true),
					 'fhair19':new Array("fHair Name18","Details about fHair 18",true,true),
					 'fhair20':new Array("fHair Name19","Details about fHair 19",true,true),
					 'fhair21':new Array("fHair Name20","Details about fHair 20",true,true),
					 'fhair22':new Array("fHair Name21","Details about fHair 21",true,true),
					 'fhair23':new Array("fHair Name22","Details about fHair 22",true,true),
					 'fhair24':new Array("fHair Name23","Details about fHair 23",true,true),
					 'fhair25':new Array("fHair Name24","Details about fHair 24",true,true),					 
					 'fhair26':new Array("fHair Name25","Details about fHair 25",true,true),
					 'fbottom2':new Array("fBottom Name1","Details about fBottom 1",true,true),
					 'fbottom3':new Array("fBottom Name2","Details about fBottom 2",true,true),
					 'fbottom4':new Array("fBottom Name3","Details about fBottom 3",true,true),
					 'fbottom5':new Array("fBottom Name4","Details about fBottom 4",true,true),
					 'fbottom6':new Array("fBottom Name5","Details about fBottom 5",true,true),
					 'fbottom7':new Array("fBottom Name6","Details about fBottom 6",true,true),
					 'fbottom8':new Array("fBottom Name7","Details about fBottom 7",true,true),
					 'fbottom9':new Array("fBottom Name8","Details about fBottom 8",true,true),
					 'fbottom10':new Array("fBottom Name9","Details about fBottom 9",true,true),
					 'fbottom11':new Array("fBottom Name10","Details about fBottom 10",true,true),
					 'fbottom12':new Array("fBottom Name11","Details about fBottom 11",true,true),
					 'fbottom13':new Array("fBottom Name12","Details about fBottom 12",true,true),
					 'fbottom14':new Array("fBottom Name13","Details about fBottom 13",true,true),
					 'fbottom15':new Array("fBottom Name14","Details about fBottom 14",true,true),
					 'ftop2':new Array("fTop Name1","Details about fTop 1",true,false),
					 'ftop3':new Array("fTop Name2","Details about fTop 2",true,false),
					 'ftop4':new Array("fTop Name3","Details about fTop 3",true,false),
					 'ftop5':new Array("fTop Name4","Details about fTop 4",true,false),
					 'ftop6':new Array("fTop Name5","Details about fTop 5",true,false),
					 'ftop7':new Array("fTop Name6","Details about fTop 6",true,false),
					 'ftop8':new Array("fTop Name7","Details about fTop 7",true,true),
					 'ftop9':new Array("fTop Name8","Details about fTop 8",true,false),
					 'ftop10':new Array("fTop Name9","Details about fTop 9",true,false),
					 'ftop11':new Array("fTop Name10","Details about fTop 10",true,true),
					 'ftop12':new Array("fTop Name11","Details about fTop 11",true,true),
					 'ftop13':new Array("fTop Name12","Details about fTop 12",false,false),
					 'ftop14':new Array("fTop Name13","Details about fTop 13",true,true),
					 'ftop15':new Array("fTop Name14","Details about fTop 14",true,true),
					 'ftop16':new Array("fTop Name15","Details about fTop 15",true,false),
					 'fheadwear2':new Array("Head Wear 1","Details about Head Wear 1",true,false),
					 'fheadwear3':new Array("Head Wear 2","Details about Head Wear 2",true,false),
					 'fheadwear4':new Array("Head Wear 3","Details about Head Wear 3",true,false),
					 'fheadwear5':new Array("Head Wear 4","Details about Head Wear 4",true,true),
					 'fheadwear6':new Array("Head Wear 5","Details about Head Wear 5",true,false),
					 'fheadwear7':new Array("Head Wear 6","Details about Head Wear 6",false,false),
					 'fheadwear8':new Array("Head Wear 7","Details about Head Wear 7",false,false),
					 'fheadwear9':new Array("Head Wear 8","Details about Head Wear 8",true,true),
					 'fheadwear10':new Array("Head Wear 9","Details about Head Wear 9",false,false),
					 'fheadwear11':new Array("Head Wear 10","Details about Head Wear 10",false,false),
					 'ffootwear2':new Array("Foot Wear 1","Details about Foot Wear 1",true,true),
					 'ffootwear3':new Array("Foot Wear 2","Details about Foot Wear 2",true,false),
					 'ffootwear4':new Array("Foot Wear 3","Details about Foot Wear 3",true,true),
					 'ffootwear5':new Array("Foot Wear 4","Details about Foot Wear 4",true,true),
					 'ffootwear6':new Array("Foot Wear 5","Details about Foot Wear 5",true,true),
					 'ffootwear7':new Array("Foot Wear 6","Details about Foot Wear 6",true,true),					 
					 'ffootwear8':new Array("Foot Wear 7","Details about Foot Wear 7",true,true),
					 'ffootwear9':new Array("Foot Wear 8","Details about Foot Wear 8",true,false),
					 'ffootwear10':new Array("Foot Wear 9","Details about Foot Wear 9",true,true),
					 'ffootwear11':new Array("Foot Wear 10","Details about Foot Wear 10",true,true),
					 'ffootwear12':new Array("Foot Wear 11","Details about Foot Wear 11",true,false),
					 'ffootwear13':new Array("Foot Wear 12","Details about Foot Wear 12",true,true),
					 'faccessories2':new Array("Accessories 1","Details about Accessories 1",true,false),
					 'faccessories3':new Array("Accessories 2","Details about Accessories 2",true,true),
					 'faccessories4':new Array("Accessories 3","Details about Accessories 3",true,true),
					 'faccessories5':new Array("Accessories 4","Details about Accessories 4",true,true),
					 'faccessories6':new Array("Accessories 5","Details about Accessories 5",true,false),
					 'faccessories7':new Array("Accessories 6","Details about Accessories 6",true,true),
					 'faccessories8':new Array("Accessories 7","Details about Accessories 7",false,false),
					 'faccessories9':new Array("Accessories 8","Details about Accessories 8",false,false),
					 'faccessories10':new Array("Accessories 9","Details about Accessories 9",false,false),
					 'faccessories11':new Array("Accessories 10","Details about Accessories 10",false,false),
					 'faccessories12':new Array("Accessories 11","Details about Accessories 11",true,false),
					 'faccessories13':new Array("Accessories 12","Details about Accessories 12",true,true),
					 'faccessories14':new Array("Accessories 13","Details about Accessories 13",true,false),
					 'faccessories15':new Array("Accessories 14","Details about Accessories 14",false,false),
					 'faccessories16':new Array("Accessories 15","Details about Accessories 15",true,false),
					 'foutfit2':new Array("Outfit 1","Details about Outfit 1",true,false),
					 'foutfit3':new Array("Outfit 2","Details about Outfit 2",true,true),
					 'foutfit4':new Array("Outfit 3","Details about Outfit 3",true,true),
					 'foutfit5':new Array("Outfit 4","Details about Outfit 4",true,true),
					 'foutfit6':new Array("Outfit 5","Details about Outfit 5",true,true),
					 'foutfit7':new Array("Outfit 6","Details about Outfit 6",true,true),
					 'foutfit8':new Array("Outfit 7","Details about Outfit 7",true,true),
					 'interest11':new Array("Mp3 Player","Details about Mp3 Player",true,false),
					 'interest12':new Array("Console","Details about Console",true,false),
					 'interest6':new Array("DJ table with speakers / turntable","Details about DJ Table",true,true)
					 };
	
	var colors = new Array('#ffffff','#bebfc9','#696f74','#bfe94f','#8eb31e','#3f4b18',
						'#92e2f3','#4199e0','#003366','#ffacff','#802b80','#723f63',
						'#d1016f','#ffed98','#ffe41d','#f1ad1c','#d48105','#e63f06',
						'#ba3412','#7c0202','#a57708','#633407','#4c1a00','#333333');
	
	if (!String.prototype.format) {
	  String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) { 
			  return typeof args[number] != 'undefined' ? args[number]	: match;
		});
	  };
	}
	
	var jsReady = false;
	var swfReady = false;
	var timerSet = false;
	var myTimer;
	var curPropCount = new Array();
	var curSwfCount = new Array();
	var curEyeColor;
	
	var mCurProps = {"maccessories":0,
					"bottom":0,
					"eyewear":0,
					"facial":0,
					"expression":0,
					"fooddrink":0,
					"footwear":0,
					"outfit":0,
					"hair":0,
					"headwear":0,
					"top":0,
					"background":0,
					"foodndrink":0,
					"interest":0
					}
	var fCurProps = {"faccessories":0,
					"fbottom":0,
					"fexpression":0,
					"eyewear":0,
					"facial":0,										
					"ffootwear":0,
					"foutfit":0,
					"fhair":0,
					"headwear":0,
					"ftop":0,
					"background":0,
					"foodndrink":0,
					"tribal":0,
					"interest":0
					}
	var curColors = {"Accessories":new Array("#ffffff","#333333"),
					"Backgrounds":new Array("null","null"),
					"Bottoms":new Array("#ffffff","#333333"),
					"Expressions":new Array("null","null"),
					"Eyewear":new Array("null","null"),
					"FacialHair":new Array("#ffffff","#333333"),
					"Features":new Array("#ffffff","#333333"),
					"Foodndrink":new Array("null","null"),
					"Footwear":new Array("#ffffff","#333333"),
					"FullOutfit":new Array("#ffffff","#333333"),
					"HairStyles":new Array("#ffffff","#333333"),
					"Headwear":new Array("#ffffff","#333333"),
					"Tops":new Array("#ffffff","#333333"),
					"TribalMarks":new Array("null","null"),
					"Interests":new Array("null","null")
					};
	
	$(document).ready(function(){
		$('#menu').show();
		$('#propmenu').hide();
		$('#colorPopupbox').hide();
		$("#selh1").html("Create your Avatar");
		
		if(swfReady){
			SetupAvatarLinks();
		}
		else
		{
			myTimer = setInterval(function(){
				timerSet = true;
				if(swfReady)				
					SetupAvatarLinks();
			},1000);
		}
		$(document).mousedown(function (e)
		{
			var container = $("#colorPopupbox");

			if (container.has(e.target).length === 0)
			{
				$('#colorbtn1').removeClass('colorbtnsel1');
				$('#colorbtn2').removeClass('colorbtnsel2');
				$('#colorbtn1').removeClass('colorbtn1');
				$('#colorbtn2').removeClass('colorbtn2');
				
				$('#colorbtn1').addClass('colorbtndisable1');
				$('#colorbtn2').addClass('colorbtndisable2');
				$(container).hide(100);
			}
		});		
	});
	
	function isReady()
	{
		return jsReady;
	}
	function pageInit()
	{
		jsReady = true;
	}
	function setSWFIsReady()
	{
		swfReady = true;
	}
	
	function SwfCounter(name)
	{
		curSwfCount.push(name);
	}
		
	function SetupAvatarLinks(){		
		$('[name="gender"]').removeAttr('disabled');
		$('[name="head"]').removeAttr('disabled');
		$('[name="eye"]').removeAttr('disabled');
		$('[name="skin"]').removeAttr('disabled');
		$("#btn_selector").removeAttr('disabled');
		
		if(timerSet)
			clearInterval(myTimer);
	}
	function PropSelect(name)
	{		
		if(name.split(/\d+/g)[0] == "top" || name.split(/\d+/g)[0] == "bottom")
		{
			if (mCurProps['outfit'] != 0) {				
				PropDeselect('outfit'+ mCurProps['outfit']);
				myContent.RemoveCustomProp("FullOutfit");
			}
		}
		if(name.split(/\d+/g)[0] == "ftop" || name.split(/\d+/g)[0] == "fbottom")
		{			
			if (fCurProps['foutfit'] != 0) {			
				PropDeselect('foutfit'+ fCurProps['foutfit']);
				myContent.RemoveCustomProp("FullOutfit");
			}
		}
		if(name.split(/\d+/g)[0] == "outfit")
		{
			if (mCurProps['top'] != 0){
				PropDeselect('top'+ mCurProps['top']);
				myContent.RemoveCustomProp("Tops");
			}
			if (mCurProps['bottom'] != 0) {
				PropDeselect('bottom'+ mCurProps['bottom']);
				myContent.RemoveCustomProp("Bottoms");
			}
		}
		if(name.split(/\d+/g)[0] == "foutfit")
		{
			if (fCurProps['ftop'] != 0){
				PropDeselect('ftop'+ fCurProps['ftop']);
				myContent.RemoveCustomProp("Tops");
			}
			if (fCurProps['fbottom'] != 0) {
				PropDeselect('fbottom'+ fCurProps['fbottom']);
				myContent.RemoveCustomProp("Bottoms");
			}
		}
		
		(imgDir == "male") ? mCurProps[name.split(/\d+/g)[0]] = name.match(/\d+/g) : fCurProps[name.split(/\d+/g)[0]] = name.match(/\d+/g);
				
		var id = findId(name);		
		if($('#colorPopupbox').is(':visible'))	ClosePopup();				
		ToggleSelection($(id).attr('id'));
		PropsInfo(name,$(id).attr('id'));
		HandlePopup($(id).attr('id'));
	}
	function PropsInfo(name,obj)
	{
		if(imgDir == "male")
		{
			$("#propname").html(mPropsInfo[name][0]);
			$("#propdesc").html(mPropsInfo[name][1]);
			PopulateColorSelectors();
			
			var isColor1 = mPropsInfo[name][2];
			var isColor2 = mPropsInfo[name][3];
		}
		else if(imgDir == "female")
		{
			$("#propname").html(fPropsInfo[name][0]);
			$("#propdesc").html(fPropsInfo[name][1]);
			PopulateColorSelectors();
			
			var isColor1 = fPropsInfo[name][2];
			var isColor2 = fPropsInfo[name][3];
		}
		
		if(isColor1 == true && isColor2 == true)
		{
			$("#colorbtn1").removeClass('colorbtndisable1');
			$("#colorbtn1").addClass('colorbtnsel1');
			$("#colorbtn1").removeClass('colorbtndisable2');
			$("#colorbtn2").addClass('colorbtn2')
			$("#colorbtn2").removeAttr("disabled");
			
			$("#colorbtn1").unbind();
			$("#colorbtn1").click([obj],function(event){
				$("#colorbtn1").removeClass();
				$("#colorbtn1").addClass('colorbtnsel1')
				$("#colorbtn1").attr("disabled","disabled");
				$("#colorbtn2").removeClass('colorbtnsel2');
				$("#colorbtn2").addClass('colorbtn2')
				$("#colorbtn2").removeAttr("disabled");
				PopulateColors(obj,1);
			});
			
			$("#colorbtn2").unbind();
			$("#colorbtn2").click([obj],function(event){
				$("#colorbtn1").removeClass();
				$("#colorbtn1").addClass('colorbtn1');
				$("#colorbtn1").removeAttr("disabled");
				$("#colorbtn2").removeClass();
				$("#colorbtn2").addClass('colorbtnsel2');
				$("#colorbtn2").attr("disabled","disabled");
				PopulateColors(obj,2);
			});
			
			PopulateColors(obj,1);
			$("#colorbtn1").attr("disabled","disabled");			
		}
		else if(isColor1 == true)
		{
			$("#colorbtn1").unbind();
			$("#colorbtn2").unbind();
			
			$("#colorbtn1").removeClass();
			$("#colorbtn1").addClass('colorbtnsel1');
			PopulateColors(obj,1);
		}
		else if(isColor2 == true)
		{
			$("#colorbtn1").unbind();
			$("#colorbtn2").unbind();
			
			$("#colorbtn2").removeClass();
			$("#colorbtn2").addClass('colorbtnsel2');
			PopulateColors(obj,2);
		}
	}
	function PropDeselect(name)
	{
		RemoveSelection(findId(name));
		(imgDir == "male") ? mCurProps[name.split(/\d+/g)[0]] = 0 : fCurProps[name.split(/\d+/g)[0]] = 0 ;
		ClosePopup();
	}
	function ClosePopup(){		
		$('#colorbtn1').removeClass('colorbtnsel1');
		$('#colorbtn2').removeClass('colorbtnsel2');
		$('#colorbtn1').removeClass('colorbtn1');
		$('#colorbtn2').removeClass('colorbtn2');
		
		$('#colorbtn1').addClass('colorbtndisable1');
		$('#colorbtn2').addClass('colorbtndisable2');
		
		$('#colorPopupbox').hide(100);
	}
	function HandlePopup(_id)
	{
		var lastDigit;
		_id.length == 4 ? lastDigit = _id[_id.length-1]:lastDigit = _id.substr(3);
			
		if(lastDigit >= 0 && lastDigit <= 7) {
			if($("#triangle").hasClass("triangle-bottom"))	$("#triangle").removeClass("triangle-bottom");			
			if($("#triangle1").hasClass("triangle-bottom1")) $("#triangle1").removeClass("triangle-bottom1");			
			$("#triangle").addClass("triangle-top");$("#triangle1").addClass("triangle-top1");
			if(lastDigit >= 0 && lastDigit <= 3) $('#colorPopupbox').css({'top':'131px'});
			else if(lastDigit >= 4 && lastDigit <= 7) $('#colorPopupbox').css({'top':'215px'});
		}
		else if(lastDigit >= 8 && lastDigit <= 15) {
			if($("#triangle").hasClass("triangle-top"))	$("#triangle").removeClass("triangle-top");			
			if($("#triangle1").hasClass("triangle-top1")) $("#triangle1").removeClass("triangle-top1");
			$("#triangle").addClass("triangle-bottom");$("#triangle1").addClass("triangle-bottom1");
			if(lastDigit >= 8 && lastDigit <= 11) { $('#colorPopupbox').css({'top':'59px'});}
			else if(lastDigit >= 12 && lastDigit <= 15) { $('#colorPopupbox').css({'top':'131px'});}		
		}
		if(lastDigit%4 == 0){	$("#triangle").css('left','21.5px'); $("#triangle1").css('left','20.5px');	}
		else if(lastDigit%4 == 1){	$("#triangle").css('left','103.5px'); $("#triangle1").css('left','102.5px');	}
		else if(lastDigit%4 == 2){	$("#triangle").css('left','185.5px');$("#triangle1").css('left','184.5px');		}
		else if(lastDigit%4 == 3){	$("#triangle").css('left','267.5px');$("#triangle1").css('left','266.5px');		}
		
		if(!popupDisable)
			$('#colorPopupbox').show(100);
	}
	function findId(_name)
	{
		if($("#menugrid").find('object[data]').val() == '')
			return $("#menugrid").find('object[data*="'+_name+'.swf"]');		
		else
			return $("#menugrid").find('object').children('param[value*="'+_name+'.swf"]').parent();
	}
	function findCategory(_id)
	{
		var selector = 'object[id="'+_id+'"]';
		
		if($("#menugrid").find(selector).attr("data"))
			return $("#menugrid").find(selector).attr("data").split('/')[1].replace(/[\x26\s]/g, "");
		else
			return $("#menugrid").find(selector).children('param[name="movie"]').attr("value").split('/')[1].replace(/[\x26\s]/g, "");
	}
	function ToggleSelection(_id)
	{
		var count = 0;
		var cat = findCategory(_id);
		
		for(i=start;(i<images.length && count <16);i++,count++)
		{
			var div = "div"+(count);
			if(div !=_id && ($('#'+div).hasClass('assetCur') || $('#'+div).hasClass('assetSel')))
			{
				if(findCategory(div) == cat)
				{
					if($('#'+div).hasClass('assetCur')) { $('#'+div).removeClass('assetCur');}
					if($('#'+div).hasClass('assetSel')) { $('#'+div).removeClass('assetSel');}
					$('#'+div).addClass('asset');
				}
				else
				{
					$('#'+div).removeClass('assetCur');
					$('#'+div).addClass('assetSel');
				}
				eval(div).SecondClick();
			}
		}
		$('#'+_id).removeClass().addClass("assetCur");
	}
	function RemoveSelection(_id)
	{
		$(_id).addClass("asset");
		$(_id).removeClass("assetCur");
	}
	function PopulateColorSelectors()
	{
		$('#colorselPanel').html('');
		var colHtml = '';
		for (var i=0;i<3;i++)
		{
			colHtml += '<div class="colline">';
			for(var j=0;j<8;j++)		
				colHtml += '<div id="colsel'+i+j+'" class="colsel"></div>';			
			colHtml += '</div>';
		}
		
		$('#colorselPanel').append(colHtml);
	}
	function PopulateColors(_obj,type)
	{
		for (i=0;i<3;i++)
		{
			for(j=0;j<8;j++)
			{ 
				$("#colsel"+i+j).css('background-color',colors[i*8+j]);
				$("#colsel"+i+j).css('cursor','pointer');
				$("#colsel"+i+j).unbind();
				if(colors[i*8+j] == curColors[findCategory(_obj)][type-1])
				{
					var preSelected = $("#colsel"+i+j).parent().parent().find("div[class ='colselected']");
					if(preSelected.length > 0)
					{
						$(preSelected).removeClass('colselected');
						$(preSelected).addClass('colsel');
					}
					$("#colsel"+i+j).addClass('colselected');
					$("#colsel"+i+j).removeClass('colsel');
				}
				
				$("#colsel"+i+j).click([_obj,colors[i*8+j],type],function(event){
					ApplyPropwithColor(event.data[0],event.data[1],type);					
					var preSelected = $(this).parent().parent().find("div[class ='colselected']");
					if(preSelected.length > 0)
					{
						$(preSelected).removeClass('colselected');
						$(preSelected).addClass('colsel');
					}
					$(this).removeClass('colsel');
					$(this).addClass('colselected');
				});
			}
		}
	}
	function ApplyPropwithColor(_obj,_color,_type)
	{
		curColors[findCategory(_obj)][_type - 1] = _color;
		if(_type == 1){
			eval(_obj).setColor(_color,'null');
			eval(_obj).ApplyProp();
			ChangeColorOfProps(fn);
		}
		else if(_type == 2){
			eval(_obj).setColor('null',_color);
			eval(_obj).ApplyProp();
			ChangeColorOfProps(fn);
		}
	}
	function PropSelector()
	{
		$('#menu').hide();		
		$("#menugrid").css("height","329px");
		$('#propmenu').show();
		$("#proph1").show();
		$("#proph2").show();
		popupDisable = false;
		curColors["Expressions"][0] = curEyeColor;		
		myContent.AddEditButton();
				
		if($('button[class="btn5"]'))
			$('button[class="btn5"]').remove();
		
		ImageListing(0,'all');
		$("#selh1").html("Create your Avatar");	
		$("#selh1").css("padding","9px 0 7px 16px");
		$("#selh1").css('background-color','#000000');
		$("#selh1").css('color','#ffffff');
		$("#selector").css('background-color','#e8f1f6');
		
		dirList = [];
		$.post("start.php",{dir:imgDir,dirList:'true'},function(data,status){
			if(status == "success")
			{
				var obj = JSON.parse(data) || $.parseJSON(data);				
				$('#sel').html('<option value="all">All items</option>');				
				for(j=0;j<obj.length;j++)
				{
					var dire = imgDir + "/" + obj[j];					
					$('#sel').append("<option value='"+dire+"'>"+obj[j]+"</option>");
				}				
				$('.styled').html('All items');
			}
			else
			{
				alert("Directory Listing: " + status);
			}
		});
	}
	function PropsCount()
	{
		var propsCount = {'Accessories': 0,
						  'Bottoms':0,
						  'Eyewear':0,
						  'Facial Hair': 0,
						  'Features':0,
						  'Full Outfit':0,
						  'Hair Styles':0,
						  'Headwear':0,
						  'Tops':0,
						  'Tribal Marks':0,
						  'Expressions':0,
						  'Footwear':0,
						  'Backgrounds':0,
						  'Food n drink':0,
						  'Interests':0
						  };
				
		for(var i=0;i<images.length;i++)
			propsCount[images[i].split('/')[1]] += 1;
		
		for(key in propsCount)				
			$('#sel').find('option[value*="'+key+'"]').html(key + ' ('+propsCount[key]+') ');			
	}
	function ImageListing(index,dire)
	{
		if(index != 0)
		{
			$.post("start.php",{dir:dire,dirList:'false'},function(data,status){
				if(status == "success")
				{
					var obj = JSON.parse(data) || $.parseJSON(data);					
					if(images.length > 0)
						{
							var total = images.length;							
							for(i=0;i<total;i++)
								images.pop();
						}
					for(var i =0;i<obj.length;i++)
					{						
						images.push(dire+"/"+obj[i]);
					}
					images = shuffle(images);
					setStart(0);
				}
				else
				{
					alert("Files from a directory Listing: " + status);
				}
			});
		}
		else if(index == 0)
		{
			$.post("start.php",{dir:imgDir,dirList:'all'},function(data,status){			
				if(status == "success")
				{
					var obj = JSON.parse(data) || $.parseJSON(data);		
					$.post("start.php",{dir:imgDir,dirList:'true'},function(data1,status1){
						if(status1 == "success")
						{
							if(images.length > 0)
							{								
								var total = images.length;								
								for(i=0;i<total;i++)
									images.pop();
							}							
							var obj1 = JSON.parse(data1) || $.parseJSON(data1);							
							for(j=0;j<obj1.length;j++)
							{								
								for(k=0;k<obj[obj1[j].toString()].length;k++)
								{									
									images.push(obj[obj1[j].toString()][k]);									
								}
								dirList.push(obj[obj1[j].toString()][0]);								
							}							
							images = shuffle(images);
							PropsCount();
							setStart(0);
						}
						else
							alert("Folders name from directory: " + status1);
					});
				}
				else
					alert("All Files from root directory Listing: " + status);				
			});			
		}
		$('.styled').html($('#sel option:selected').html());
	}
	function shuffle(o){ //v1.0
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
	function showImages()
	{
		$('#menugrid').html('');
		if($('#colorPopupbox').is(':visible'))	ClosePopup();
		if(images.length == 0)
		{
			$('#menugrid').append('<div id="emptymenugrid">No Items</div>');
		}
		var imagesgrid = '<div class="menugridline">';
		var count = 1;
		fn = new Array();
		var param = new Array();
		for(i=start;(i<images.length && count <=16);i++)
		{
			var div = "div"+(count-1);
			imagesgrid += '<div class="menugridcol"><div id="'+div+'" ></div></div>';
			if(count%4 == 0 && count != 16)
				imagesgrid  += '</div><div class="menugridline">';
			count++;				
		}
		imagesgrid  += '</div>';
		$('#menugrid').append(imagesgrid);
		count = 1;
		curPropCount = [];
		
		for(i=start;(i<images.length && count <=16);i++,count++)
		{
			div = "div"+(count-1);
			
			swfobject.embedSWF(images[i],div , "60", "60", "9.0.0", "expressInstall.swf",flashVars,{"wmode":"opaque"});			
			fn.push(images[i].split('/')[1].replace(/[\x26\s]/g, ""));
			
			var fparam = images[i].split('/')[2].split('.')[0];						
			param.push(fparam.match(/\d+/g));			
			var divcal = '#'+div;
			if (imgDir == "male")
			{
				if(Number(mCurProps[fparam.split(/\d+/g)[0]]) == fparam.match(/\d+/g)) { $(divcal).addClass('assetSel');}
				else { $(divcal).addClass('asset');}
			}
			else
			{
				if(Number(fCurProps[fparam.split(/\d+/g)[0]]) == fparam.match(/\d+/g)) { $(divcal).addClass('assetSel');}
				else { $(divcal).addClass('asset');}
			}
			curPropCount.push(fparam);			
		}
		
		var myTimer1 = setInterval(function(){				
				if(array_diff(curPropCount,curSwfCount).length == 0)
				{					
					SWFsCallData(fn,param);	
					ChangeColorOfProps(fn);
					clearInterval(myTimer1);
				}
			}, 100);
	}
	function ChangeColorOfProps(_fn)
	{
		var count = 1;	
		
		for(i=start;(i<images.length && count <=16);i++,count++)
		{
			div = "div"+(count-1);
			//$('<div id="'+div+'"></div>').filter('#div').get(0).setColor(curColors[_fn[count-1]][0],curColors[_fn[count-1]][1]);
			//$('html').find("#div").setColor(curColors[_fn[count-1]][0],curColors[_fn[count-1]][1]);
			eval(div).setColor(curColors[_fn[count-1]][0],curColors[_fn[count-1]][1]);
		}
	}
	function array_diff (arr1) {
	  // http://kevin.vanzonneveld.net
	  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // +   improved by: Sanjoy Roy
	  // +    revised by: Brett Zamir (http://brett-zamir.me)
	  // *     example 1: array_diff(['Kevin', 'van', 'Zonneveld'], ['van', 'Zonneveld']);
	  // *     returns 1: {0:'Kevin'}
	  var retArr = [],
		argl = arguments.length,
		k1 = '',
		i = 1,
		k = '',
		arr = {};

	  arr1keys: for (k1 in arr1) {
		for (i = 1; i < argl; i++) {
		  arr = arguments[i];
		  for (k in arr) {
			if (arr[k] === arr1[k1]) {
			  // If it reaches here, it was found in at least one array, so try next value
			  continue arr1keys;
			}
		  }
		  retArr[k1] = arr1[k1];
		}
	  }

	  return retArr;
	}
	function SWFsCallData(fn,param)
	{
		var count = 1;
		for(i=start;(i<images.length && count <=16);i++,count++)
		{					
			div = "div"+(count-1);			
			eval(div).GetCallData(fn[count-1],param[count-1]);
		}
		curswfCount = [];
		curPropCount = [];
	} 
	function setStart(_start)
	{
		if(_start == 0)
		{
			start = _start;
			ToggleBehaviour("#prev","off");
			images.length < 17 ? ToggleBehaviour("#next","off") : ToggleBehaviour("#next","on");			
		}
		else
		{
			start += _start;
			if(start + 16 >= images.length)
				ToggleBehaviour("#next","off");
			if(start == 0 )
				ToggleBehaviour("#prev","off");
			
			_start > 0 ? ToggleBehaviour("#prev","on"): ToggleBehaviour("#next","on");
		}		
		showCounter();
		showImages();
	}
	function showCounter()
	{
		$('#counter').html('');
		(images.length%16 == 0) ? pages = (images.length/16) : pages = parseInt(images.length/16)+1;
		
		if(start/16 > (2*counterstart + 6)/2)
			counterstart = (2*counterstart + 6)/2;		
		if(start/16 < counterstart)
			counterstart -= 3;			
		if(start/16 > 9)
			$("#proph2 #prev").css("margin","0 10px 0 10px");
		else if(start/16 >= 5 && start/16 <= 9)
			$("#proph2 #prev").css("margin","0 22px 0 10px");
		else
			$("#proph2 #prev").css("margin","0 32px 0 10px");
		
		for(var i=counterstart;i < counterstart + 6 && i < pages;i++)
		{			
			$('#counter').append('<div class="page">'+ (i+1)+'</div>');
			if(start/16 == i)
			{
				$('#counter').find('div:last').removeClass('page');			
				$('#counter').find('div:last').addClass('pageSel');
			}
			$('#counter').find('div:last').css("cursor","pointer");
			$('#counter').find('div:last').click([$('#counter').find('div:last').html()],function(event)
			{
				GotoPage(parseInt(event.data[0]));
			});
		}	
		
	}
	function GotoPage(val)
	{
		start = (val-1)*16;
		(images.length%16 == 0) ? pages = (images.length/16) : pages = parseInt(images.length/16)+1;
		
		if(val == 1)
		{
			ToggleBehaviour("#prev","off");
			images.length < 17 ? ToggleBehaviour("#next","off") : ToggleBehaviour("#next","on");
		}
		else if(val >1 && val < pages)
		{
			ToggleBehaviour("#prev","on");
			ToggleBehaviour("#next","on");
		}
		else if(val == pages)
		{
			ToggleBehaviour("#prev","on");
			ToggleBehaviour("#next","off");
		}
		showCounter();
		showImages();
	}
	function ToggleBehaviour()
	{
		for(i=0;i<arguments.length - 1;i++)
		{
			if(arguments[arguments.length - 1] == 'off')
			{
				$(arguments[i]).unbind();
				$(arguments[i]).css('cursor','default');
				$(arguments[i]).css('color','#797979');
			}
			else if(arguments[arguments.length - 1] == 'on')
			{
				$(arguments[i]).unbind();
				$(arguments[i]).bind('click',EventHandler);
				$(arguments[i]).css('cursor','pointer');				
				$(arguments[i]).css('color','#ffffff');
			}
		}		
	}
	function EventHandler(e)
	{
		(e.target.id == 'prev') ? setStart(-16) : setStart(16);
	}
	function ReEdit()
	{	
		$("#selh1").html('<button onclick="EditOutfit();" id="btnoutfit" class="btnoutfit">Edit outfit</button>');
		$("#selh1").append('<button onclick="EditFeatures();" id="btnfeatures" class="btnfeatures">Edit features</button>');
		$("#selh1").append('<div id="ReEditText">Edit your outfit or change basic features</div>');
		$("#selh1").css("padding","0px");
		$("#selh1").css('background-color','#ffffff');				
		$("#proph1").hide();
		$("#menugrid").css("height","362px");
		EditOutfit();
		popupDisable = true;
	}	
	function EditOutfit()
	{
		$("#btnfeatures").removeAttr("disabled");
		$("#btnoutfit").attr("disabled","disabled");
		
		$("#btnoutfit").removeClass().addClass("btnoutfitSel");
		$("#btnfeatures").removeClass().addClass("btnfeatures");
		
		$("#menu").hide();
		
		var count = 0,i=0;
		images = [],start=0;
		
		if(imgDir == "male")
		{
			for(key in mCurProps)
			{
				if(mCurProps[key] != 0){
					for(index = 0;index <dirList.length;index++)					
						if(dirList[index].indexOf(key) > -1)
						{
							var dir = dirList[index].split('/');
							images[i++] = dir[0]+"/"+dir[1]+"/"+key+mCurProps[key]+".swf";					
						}
				}
				count++;
			}
		}
		else
		{
			for(key in fCurProps)
			{
				if(fCurProps[key] != 0){
					for(index = 0;index <dirList.length;index++)					
						if(dirList[index].indexOf(key) > -1)
						{
							var dir = dirList[index].split('/');
							images[i++] = dir[0]+"/"+dir[1]+"/"+key+fCurProps[key]+".swf";					
						}
				}
				count++;
			}
		}
				
		showImages();
		
		if($("#propmenu").find('button[class="btn5"]').length == 0)
			$("#propmenu").append('<button onclick="PropSelector();" class="btn5">OK</button>');
		
		$("#proph1").hide();
		$("#proph2").hide();
		$("#propmenu").show();
	}
	function EditFeatures()
	{
		$("input[name='gender']").attr("disabled","disabled");
		$("#btnoutfit").removeAttr("disabled");
		$("#btnfeatures").attr("disabled","disabled");
		$("#btnoutfit").addClass("btnoutfit");
		$("#btnfeatures").addClass("btnfeatures");
		$('#menu').show();
		$("button[class='btn3']").hide();
		if($("button[class='btn6']").length == 0)
		{
			$("#menu").append('<button onclick="PropSelector();" class="btn6">OK</button>');
		}
		$("#propmenu").hide();
	}	
	function EyeColorChange(val)
	{
		curEyeColor = val;
		myContent.Eye(val);
	}