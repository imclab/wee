<!DOCTYPE html>
<html>
<head>
<title>NaijaMee</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta charset="UTF-8">
<!--<link rel="stylesheet" type="text/css" href="css/bootstrap.css"></link>-->
<link rel="stylesheet" type="text/css" href="css/style.css"></link>
</head>
<body onload="pageInit();">
	<div id="content">
		<div>
			<span id="headerleft">
				<img src="./assets/logo.png" alt=""/>
			</span>
			<span id="headerright">
				<button class="btn3">Login<img src="./assets/arrow.png" alt=""/></button>
			</span>
		</div>
		<div id="spacer">
		</div>
		<div style="font-size:0px;">
			<div id="selector">		
					<div id="selh1"></div>
					<div id="menu">
						<ol>
							<div id="gender">
								<li>Choose your Gender<br>
									<input type="radio" id="gender-1" name="gender" checked ="true" onchange="imgDir = 'male'; myContent.Gender('male');" disabled ="disabled" /><label for="gender-1"></label><span>male</span>
									<input type="radio" id="gender-2" name="gender" onchange="imgDir = 'female'; myContent.Gender('female');" disabled ="disabled" /><label for="gender-2"></label><span>female</span>
								</li>
							</div>
							<div id="head">
								<li>Head shape</li>
								<input type="radio" id="head-1" name="head" checked ="true" onChange="myContent.Head('oval');" disabled ="disabled"/><label for="head-1"></label><span>Oval</span>
								<input type="radio" id="head-2" name="head" onChange="myContent.Head('round');"  disabled ="disabled"/><label for="head-2"></label><span>Round</span>
								<input type="radio" id="head-3" name="head" onChange="myContent.Head('square');" disabled ="disabled"/><label for="head-3"></label><span>Square</span>
							</div>
							<div id="skin">
								<li>Skin color</li>
								<input type="radio" id="skin-1" name="skin" onChange="myContent.Skin('#ffe1c4');" disabled ="disabled"></input><label for="skin-1"></label><span></span>
								<input type="radio" id="skin-2" name="skin" onChange="myContent.Skin('#e0b774');" disabled ="disabled"></input><label for="skin-2"></label><span></span>
								<input type="radio" id="skin-3" name="skin" checked ="true" onChange="myContent.Skin('#ce9c6f');" disabled ="disabled"></input><label for="skin-3"></label><span></span>
								<input type="radio" id="skin-4" name="skin" onChange="myContent.Skin('#b0845c');" disabled ="disabled"></input><label for="skin-4"></label><span></span>
								<input type="radio" id="skin-5" name="skin" onChange="myContent.Skin('#674a3c');" disabled ="disabled"></input><label for="skin-5"></label>
							</div>
							<div id="eye">
								<li>Eye color</li>
								<input type="radio" id="eye-1" name="eye" onChange="EyeColorChange('#acbac4');" disabled ="disabled"></input><label for="eye-1"></label><span></span>
								<input type="radio" id="eye-2" name="eye" onChange="EyeColorChange('#92b01b');" disabled ="disabled"></input><label for="eye-2"></label><span></span>
								<input type="radio" id="eye-3" name="eye" onChange="EyeColorChange('#c89704');" disabled ="disabled"></input><label for="eye-3"></label><span></span>
								<input type="radio" id="eye-4" name="eye" onChange="EyeColorChange('#33a1cc');" disabled ="disabled"></input><label for="eye-4"></label><span></span>
								<input type="radio" id="eye-5" name="eye" checked ="true" onChange="EyeColorChange('#743600');" disabled ="disabled"></input><label for="eye-5"></label>
							</div>
						</ol>
						<div align="center">
							<button class="btn3" onclick="PropSelector()" id="btn_selector" disabled ="disabled">Get Dressed</button>
						</div>
					</div>
					
					<div id="propmenu">						
						<div id="proph1" class="proph1">							
							<div id="item">Item</div>
							<div class="styled"></div>
							<select id="sel" onChange="ImageListing(this.selectedIndex,this.options[this.selectedIndex].value);">
							</select>							
						</div>
												
						<div id="colorPopupbox">
								<span id="triangle1"></span>
								<span id="triangle"></span>								
								<span id="close" onclick="javascript:ClosePopup();">&#215;</span>
								<span id="propname">HairStyle Name:</span>
								<div id="propdesc">Hairstyle description. if there is any sssjs about that particular hairstyle  shsh te ehs dhhdhd fhfksnjsdl</div>
								<div id="colorinnerbox">
									<div id="colorbuttons">
										<button id="colorbtn1" class="colorbtndisable1">Color 1</button>
										<button id="colorbtn2" class="colorbtndisable2">Color 2</button>
									</div>
									<div id="colorselPanel">								
									</div>		
								</div>	
						</div>						
						<div id="menugrid"></div>
						<div id="proph2">
							<span id="prev"><img src="./assets/arrow.png" alt="">PREV</span>
							<span id="counter">								
							</span>
							<span id="next">NEXT<img src="./assets/arrow.png" alt=""></span>
						</div>
					</div>
			</div>
			<div id="avatar">
				<div id="myContent">
					<h1>Alternative content</h1>
					<p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a></p>
				</div>
			</div>
			<div style="padding-top:20px;" >
				<div id="message1">
					<img src="./assets/avatarimage1.png" alt="">
				</div>
				<div id="message2">	
					<img src="./assets/avatarimage2.png" alt="">
				</div>
			</div>
		</div>
	</div>	
	<script type="text/javascript" src="js/swfobject.js"></script>	
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/game.js"></script>
</body>
</html>