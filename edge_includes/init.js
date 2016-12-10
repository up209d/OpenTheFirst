yepnope({
    load: "js/jquery.zoomooz.js",
    complete: function() {
    
    }});

yepnope({
    load: "js/data/PlayerInfo.js",
    complete: function(event) {

        //alert(Player_Information.mother.year[0]);
    }});

function loremIpsum(elem,WordCount,LetterCount) {
	var loremIpsumWordBank = new Array("lorem","ipsum","dolor","sit","amet","consectetur","adipisicing","elit","sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore","magna","aliqua","enim","ad","minim","veniam","quis","nostrud","exercitation","ullamco","laboris","nisi","ut","aliquip","ex","ea","commodo","consequat","duis","aute","irure","dolor","in","reprehenderit","in","voluptate","velit","esse","cillum","dolore","eu","fugiat","nulla","pariatur","excepteur","sint","occaecat","cupidatat","non","proident","sunt","in","culpa","qui","officia","deserunt","mollit","anim","id","est","laborum","sed","ut","perspiciatis","unde","omnis","iste","natus","error","sit","voluptatem","accusantium","doloremque","laudantium","totam","rem","aperiam","eaque","ipsa","quae","ab","illo","inventore","veritatis","et","quasi","architecto","beatae","vitae","dicta","sunt","explicabo","nemo","enim","ipsam","voluptatem","quia","voluptas","sit","aspernatur","aut","odit","aut","fugit","sed","quia","consequuntur","magni","dolores","eos","qui","ratione","voluptatem","sequi","nesciunt","neque","porro","quisquam","est","qui","dolorem","ipsum","quia","dolor","sit","amet","consectetur","adipisci","velit","sed","quia","non","numquam","eius","modi","tempora","incidunt","ut","labore","et","dolore","magnam","aliquam","quaerat","voluptatem","ut","enim","ad","minima","veniam","quis","nostrum","exercitationem","ullam","corporis","suscipit","laboriosam","nisi","ut","aliquid","ex","ea","commodi","consequatur?","quis","autem","vel","eum","iure","reprehenderit","qui","in","ea","voluptate","velit","esse","quam","nihil","molestiae","consequatur","vel","illum","qui","dolorem","eum","fugiat","quo","voluptas","nulla","pariatur?","at","vero","eos","et","accusamus","et","iusto","odio","dignissimos","ducimus","qui","blanditiis","praesentium","voluptatum","deleniti","atque","corrupti","quos","dolores","et","quas","molestias","excepturi","sint","obcaecati","cupiditate","non","provident","similique","sunt","in","culpa","qui","officia","deserunt","mollitia","animi","id","est","laborum","et","dolorum","fuga","harum","quidem","rerum","facilis","est","et","expedita","distinctio","Nam","libero","tempore","cum","soluta","nobis","est","eligendi","optio","cumque","nihil","impedit","quo","minus","id","quod","maxime","placeat","facere","possimus","omnis","voluptas","assumenda","est","omnis","dolor","repellendus","temporibus","autem","quibusdam","aut","officiis","debitis","aut","rerum","necessitatibus","saepe","eveniet","ut","et","voluptates","repudiandae","sint","molestiae","non","recusandae","itaque","earum","rerum","hic","tenetur","a","sapiente","delectus","aut","reiciendis","voluptatibus","maiores","alias","consequatur","aut","perferendis","doloribus","asperiores","repellat");

	var ret = ""; var total_ret = "";
    
    if (LetterCount == 'undefined') { LetterCount = 999999 };
         
    for(i = 0; i < WordCount-1; i++) {
        var newTxt = loremIpsumWordBank[Math.floor(Math.random() * (loremIpsumWordBank.length - 1))];
        if (ret.substring(ret.length-1,ret.length) == "." || ret.substring(ret.length-1,ret.length) == "?") {
            newTxt = newTxt.substring(0,1).toUpperCase() + newTxt.substring(1, newTxt.length);
        }
        
        //console.log((ret.length + newTxt.length));
        
        if ((ret.length + newTxt.length)>=LetterCount) { break; }
        
        ret += " " + newTxt;
        
        
    }
    

    first_letter = ret.substring(1,2);
    
    first_letter = first_letter.toUpperCase();

    total_ret = first_letter + ret.substring(2,ret.length);

	elem.html(total_ret);
}

//AdobeEdge.getComposition('OTF-HistoryBackground').getStage().play(0);

// BEGIN SCENE 1 INIT //

// Organizing the number of decade and year

decadesRange = {min: 1968, max: 2015};

decadesStepCount = ((decadesRange.max-(decadesRange.max%10)) - (decadesRange.min-(decadesRange.min%10)))/10;

// The First State of Decade Number show on screen
currentDecadePos = decadesStepCount;//decadesStepCount;
nextDecadePos =    currentDecadePos + 1 > decadesStepCount ? 0 : currentDecadePos + 1;

currentYearMin = (((Math.round(decadesRange.min/10)-1)*10)+(currentDecadePos*10));
if ( currentYearMin <= decadesRange.min ) { currentYearMin = decadesRange.min };
currentYearMax = (Math.round(decadesRange.min/10)*10)+(currentDecadePos*10)-1;
// Hook test if the year max higher than the decades max range value
if ( currentYearMax >= decadesRange.max ) { currentYearMax = decadesRange.max };

// Setup the DecadeShow
// LastDecade is CurrentDecade
// Change the text in an element
currentDecade = ((decadesRange.min-(decadesRange.min%10))+((currentDecadePos)*10))%100;
nextDecade = ((decadesRange.min-(decadesRange.min%10))+((nextDecadePos)*10))%100;

currentDecade = currentDecade == 0 ? "0"+currentDecade : currentDecade;
nextDecade = nextDecade == 0 ? "0"+nextDecade : nextDecade;
//alert (currentYearMin + " - " + currentYearMax);



century = 19;

if ((currentDecade == '00') || (currentDecade == '10')) {

    century = 20;

}

// Composition Position

$("#Stage-HistoryBackground").css({position:"absolute",top:"0px",left:"0px",border:"0px #fff solid"}); 
$("#Stage-YearSelector").css({position:"absolute",top:"360px",left:"-40px",border:"0px #fff solid"});
$("#Stage-HistoryYearInfo").css({position:"absolute",top:"440px",left:"430px",border:"0px #fff solid"}); 
$("#Stage-HistoryActionButton").css({position:"absolute",top:"0px",left:"0px",border:"0px #fff solid"}); 
$("#Stage-HistoryWinner").css({position:"absolute",top:"200px",left:"950px",border:"0px #fff solid",display:'none'});



// Symbol Read More Click
$('#Stage-HistoryActionButton_VenueSymbol').on('click',function(){
    
    $('#HistoryTimeLineMore').show().addClass('animated_custom_1 fadeIn').css("pointer-events", "all");
    
    $("#Stage-HistoryReadMore_Readmore_ReadMore_Left")
        .addClass('animated_custom_1 rotateInUpLeft')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).css({opacity:1}).removeClass('rotateInUpLeft');
            });

    AdobeEdge.getComposition('OTF-HistoryReadMore').getStage().getSymbol("Readmore").getSymbol("ReadMore_Left").getSymbol("ReadMore").play(0);


});


// Symbol Close Read More Click
$('#Stage-HistoryReadMore_Readmore_ReadMore_Left_ReadMore_Close_Button').on('click',function(){

        $('#HistoryTimeLineMore')
        .addClass('animated_custom_1 fadeOut')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated_custom_1 fadeIn fadeOut');
            $(this).css("pointer-events","none");
        });
    
        $("#Stage-HistoryReadMore_Readmore_ReadMore_Left")
            .addClass('animated_custom_1 rotateOutUpLeft')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this)
                        .removeClass('animated_custom_1 rotateInUpLeft rotateOutUpLeft')
                        .css({transform: 'translate(0px,0px)',opacity:0});
                });
    
    
        if ($("#Stage-HistoryReadMore_Readmore_ReadMore_Right").hasClass('animated_custom_1')) {
            
            $("#Stage-HistoryReadMore_Readmore_ReadMore_Right")
                .addClass('animated_custom_1 rollOut')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this)
                            .removeClass('animated_custom_1 rotateInUpRight rotateOutUpRight rollIn rollOut')
                            .css({transform: 'translate(0px,0px)',opacity:0});
                    });
        }
    
        $('#Stage-HistoryActionButton').show();
        AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('ResultSymbol').play(500);
        AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('WinnerSymbol').play(500);
        AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('VenueSymbol').play(500);

});


// Symbol Ranking Click
$('#Stage-HistoryActionButton_ResultSymbol').on('click',function(){
    
    $('#HistoryTimeLineMore').show().addClass('animated_custom_1 fadeIn').css("pointer-events", "all");
    
    $("#Stage-HistoryReadMore_Readmore_ReadMore_Right")
        .addClass('animated_custom_1 rotateInUpRight')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).css({opacity:1}).removeClass('rotateInUpRight');
            });
    
    AdobeEdge.getComposition('OTF-HistoryReadMore').getStage().getSymbol("Readmore").getSymbol("ReadMore_Right").getSymbol("Evenmore").play(0);

});


// Symbol Close Ranking Click
$('#Stage-HistoryReadMore_Readmore_ReadMore_Right_Evenmore_Close_Button').on('click',function(){

        $('#HistoryTimeLineMore')
        .addClass('animated_custom_1 fadeOut')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated_custom_1 fadeIn fadeOut');
            $(this).css("pointer-events","none");
        });
    
        $("#Stage-HistoryReadMore_Readmore_ReadMore_Right")
            .addClass('animated_custom_1 rotateOutUpRight')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this)
                        .removeClass('animated_custom_1 rotateInUpRight rotateOutUpRight')
                        .css({transform: 'translate(0px,0px)',opacity:0});
                });
    
        if ($("#Stage-HistoryReadMore_Readmore_ReadMore_Left").hasClass('animated_custom_1')) {
    
            $("#Stage-HistoryReadMore_Readmore_ReadMore_Left")
            .addClass('animated_custom_1 rotateOutUpLeft')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this)
                        .removeClass('animated_custom_1 rotateInUpLeft rotateOutUpLeft')
                        .css({transform: 'translate(0px,0px)',opacity:0});
                });
            
        }
    
        $('#Stage-HistoryActionButton').show();
        AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('ResultSymbol').play(500);
        AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('WinnerSymbol').play(500);
        AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('VenueSymbol').play(500);

});


// Symbol Read More To View Rank While In Read More Pop Up at the same time
$('#Stage-HistoryReadMore_Readmore_ReadMore_Left_ReadMore_ReadMore_button').on('click',function(){

    $("#Stage-HistoryReadMore_Readmore_ReadMore_Right")
        .addClass('animated_custom_1 rollIn')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        
                    $(this).css({opacity:1}).removeClass('rollIn');
        
            });
    
    AdobeEdge.getComposition('OTF-HistoryReadMore').getStage().getSymbol("Readmore").getSymbol("ReadMore_Right").getSymbol("Evenmore").play(0);
    
    $("#Stage-HistoryReadMore_Readmore_ReadMore_Left").transition({x:-380},1000);

});



function HistoryTimeLineShow() {
    
    if ( current_Scene.attr('id') != 'HistoryTimeLine' ) {
    
        // Organizing the number of decade and year

        decadesRange = {min: 1968, max: 2015};

        decadesStepCount = ((decadesRange.max-(decadesRange.max%10)) - (decadesRange.min-(decadesRange.min%10)))/10;

        // The First State of Decade Number show on screen
        currentDecadePos = decadesStepCount;//decadesStepCount;
        nextDecadePos =    currentDecadePos + 1 > decadesStepCount ? 0 : currentDecadePos + 1;

        currentYearMin = (((Math.round(decadesRange.min/10)-1)*10)+(currentDecadePos*10));
        if ( currentYearMin <= decadesRange.min ) { currentYearMin = decadesRange.min };
        currentYearMax = (Math.round(decadesRange.min/10)*10)+(currentDecadePos*10)-1;
        // Hook test if the year max higher than the decades max range value
        if ( currentYearMax >= decadesRange.max ) { currentYearMax = decadesRange.max };

        // Setup the DecadeShow
        // LastDecade is CurrentDecade
        // Change the text in an element
        currentDecade = ((decadesRange.min-(decadesRange.min%10))+((currentDecadePos)*10))%100;
        nextDecade = ((decadesRange.min-(decadesRange.min%10))+((nextDecadePos)*10))%100;

        currentDecade = currentDecade == 0 ? "0"+currentDecade : currentDecade;
        nextDecade = nextDecade == 0 ? "0"+nextDecade : nextDecade;
        //alert (currentYearMin + " - " + currentYearMax);



        century = 19;

        if ((currentDecade == '00') || (currentDecade == '10')) {

            century = 20;

        }

        // Change Scene
        current_Scene.fadeOut(1000);
        current_Scene = $('#HistoryTimeLine');
        current_Scene.fadeIn(1000);

        bg_PlayPoint = [0,6000];
        AdobeEdge.getComposition('OTF-YearSelector').getStage().play(0);

        $('#Stage-YearSelector_DecadeTitle').find('p span').html(currentDecade);
        $('.YearBulletAll .YearTextOut').find('p span:eq(0)').html(century);
        
        //Lipsum Here
        loremIpsum($('#Stage-HistoryYearInfo_Content p span:eq(0)'),45);
        loremIpsum($('#Stage-HistoryYearInfo_SubTitle p span:eq(0)'),5,22);
        loremIpsum($('#Stage-HistoryReadMore_Readmore_ReadMore_Left_ReadMore_Subtitle p span:eq(0)'),5,22);
        loremIpsum($('#Stage-HistoryReadMore_Readmore_ReadMore_Left_ReadMore_Text p:eq(0) span'),115);
        
        
        

        if (currentBulletIndex != 0) {

            // Reset the First Year Bullet
            // Remove the Current Year Bullet because -> we have "currentBulletIndex" value now
            $(".YearBulletAll:eq("+currentBulletIndex+")").removeClass("activated");
            // Changing Animation
            $(".YearBulletAll:eq("+currentBulletIndex+") .YearCircle").animate({borderColor:"#fff"}, 500, 'swing');
            $(".YearBulletAll:eq("+currentBulletIndex+") .YearText").fadeIn(500);
            $(".YearBulletAll:eq("+currentBulletIndex+") .YearTextOut").fadeIn(500);
            $(".YearBulletAll:eq("+currentBulletIndex+") .BulletArrow").fadeOut(500);

            // Mark the First Year Bullet
            // Active the First Year Bullet Animation
            currentBulletIndex = 0;

            $(".YearBulletAll:eq("+currentBulletIndex+") .YearCircle").animate({borderColor:"#d5fd34"}, 500, 'swing');
            $(".YearBulletAll:eq("+currentBulletIndex+") .YearText").fadeOut(500);
            $(".YearBulletAll:eq("+currentBulletIndex+") .YearTextOut").fadeOut(500);
            $(".YearBulletAll:eq("+currentBulletIndex+") .BulletArrow").fadeIn(500);


        }

        var j=0;
        var k=9;

        for (i=((currentYearMax-(currentYearMax%10))+9);i>=(currentYearMax-(currentYearMax%10));i--) { 
                    if ((i>=currentYearMin) && (i<=currentYearMax)) 
                        {	
                            $('.YearBulletAll .YearText:eq('+j+')').find('p span:eq(0)').html(i%1000);
                            AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol("YearBullets").$(".YearBulletAll:eq("+j+")").fadeIn(1500);
                            j++;
                        } else {AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol("YearBullets").$(".YearBulletAll:eq("+k+")").fadeOut(1000);k--;}
                }





        // This Function also has another command in YearSelector Edge Code, see there for more info

        $("#Stage-HistoryYearInfo_YearTitle p span:eq(0)").html($('.YearBulletAll .YearTextOut:eq(0)').find('p span:eq(0)').html()+$('.YearBulletAll .YearText:eq(0)').find('p span:eq(0)').html());
        $("#Stage-HistoryReadMore_Readmore_ReadMore_Left_ReadMore_Year p span:eq(0)").html($('.YearBulletAll .YearTextOut:eq(0)').find('p span:eq(0)').html()+$('.YearBulletAll .YearText:eq(0)').find('p span:eq(0)').html());


        SceneOneinit();
    }
}



function SceneOneinit() {
        
    
        //Lipsum Here
        loremIpsum($('#Stage-HistoryYearInfo_Content p span:eq(0)'),45);
        loremIpsum($('#Stage-HistoryYearInfo_SubTitle p span:eq(0)'),5,22);
        loremIpsum($('#Stage-HistoryReadMore_Readmore_ReadMore_Left_ReadMore_Subtitle p span:eq(0)'),5,22);
        loremIpsum($('#Stage-HistoryReadMore_Readmore_ReadMore_Left_ReadMore_Text p span:eq(1)'),115);


        $("#Stage-HistoryReadMore_Readmore_ReadMore_Left_ReadMore_Year p span:eq(0)").html($('#Stage-HistoryYearInfo_YearTitle p span:eq(0)').html());

        AdobeEdge.getComposition('OTF-HistoryYearInfo').getStage().play(0);

        $('#Stage-HistoryActionButton').show();

        AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('ResultSymbol').play(0);
        AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('WinnerSymbol').play(0);
        AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('VenueSymbol').play(0);

        randomImage = Math.floor((Math.random() * 10));
        $('#Stage-HistoryBackground_OTF-BG').css({backgroundImage: 'url(images/OTF-BG-0'+randomImage+'.jpg)'});

        randomPlayPoint = Math.floor((Math.random() * bg_PlayPoint.length));
        AdobeEdge.getComposition('OTF-HistoryBackground').getStage().play(bg_PlayPoint[randomPlayPoint]);


        AdobeEdge.getComposition('OTF-HistoryWinner').getStage().getSymbol('FemaleSymbol').stop(0);
        AdobeEdge.getComposition('OTF-HistoryWinner').getStage().getSymbol('MaleSymbol').stop(0);
        $("#Stage-HistoryWinner").hide();
        
    

}



$('#Stage-YearSelector_DecadeTitle').find('p span').html(currentDecade);
$('.YearBulletAll .YearTextOut').find('p span:eq(0)').html(century);

currentBulletIndex = 0;
var j=0;
var k=9;

for (i=((currentYearMax-(currentYearMax%10))+9);i>=(currentYearMax-(currentYearMax%10));i--) { 
			if ((i>=currentYearMin) && (i<=currentYearMax)) 
				{	
					$('.YearBulletAll .YearText:eq('+j+')').find('p span:eq(0)').html(i%1000);
					AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol("YearBullets").$(".YearBulletAll:eq("+j+")").fadeIn(1500);
					j++;
				} else {AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol("YearBullets").$(".YearBulletAll:eq("+k+")").fadeOut(1000);k--;}
		}

currentBulletIndex = 0;

$(".YearBulletAll .BulletArrow").css("display","none");
$(".YearBulletAll:eq("+currentBulletIndex+")").addClass("activated");
$(".YearBulletAll:eq("+currentBulletIndex+") .YearCircle").css("borderColor","#d5fd34");
$(".YearBulletAll:eq("+currentBulletIndex+") .YearText").css("display","none");
$(".YearBulletAll:eq("+currentBulletIndex+") .YearTextOut").css("display","none");
$(".YearBulletAll:eq("+currentBulletIndex+") .BulletArrow").css("display","block");


// This Function also has another command in YearSelector Edge Code, see there for more info
    
$("#Stage-HistoryYearInfo_YearTitle p span:eq(0)").html($('.YearBulletAll .YearTextOut:eq(0)').find('p span:eq(0)').html()+$('.YearBulletAll .YearText:eq(0)').find('p span:eq(0)').html());



// Beware !!! Click Function of jquery can perfom through the transparent of overlapping element but the click function of Adobe Edge cannot
$(".YearBulletAll").click(function(){

    bulletIndex = $(this).index() - 1;
    AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol('YearBullets').getSymbol('YearBullet-0' + bulletIndex).play(3000);
    
    $(this).parent().transition({ rotate: bulletIndex*30 + 'deg' },500,'cubic-bezier(.37,.01,.55,1)');
    
    
    $(this).addClass("activated");
    $(".YearBulletAll:eq("+currentBulletIndex+")").removeClass("activated");

    // Changing Animation
    $(".YearBulletAll:eq("+currentBulletIndex+") .YearCircle").animate({borderColor:"#fff"}, 500, 'swing');
    $(".YearBulletAll:eq("+currentBulletIndex+") .YearText").fadeIn(500);
    $(".YearBulletAll:eq("+currentBulletIndex+") .YearTextOut").fadeIn(500);
    $(".YearBulletAll:eq("+currentBulletIndex+") .BulletArrow").fadeOut(500);

    $(".YearBulletAll:eq("+bulletIndex+") .YearCircle").animate({borderColor:"#d5fd34"}, 500, 'swing');
    $(".YearBulletAll:eq("+bulletIndex+") .YearText").fadeOut(500);
    $(".YearBulletAll:eq("+bulletIndex+") .YearTextOut").fadeOut(500);
    $(".YearBulletAll:eq("+bulletIndex+") .BulletArrow").fadeIn(500);

    currentBulletIndex = bulletIndex;
    
    $("#Stage-HistoryYearInfo_YearTitle p span").html($(this).find('p span:eq(1)').html()+$(this).find('p span:eq(0)').html());
    
    SceneOneinit();

    
});  

// Increase Decade Button
/*
EC.SVG.accessSVG($('#Stage-YearSelector_IncreaseSymbol_IncreaseButton')).done(function(svgDocument){

    $(svgDocument).find('path').css({fill:"#FFF",cursor:"pointer"});
    $(svgDocument).click(function(){



    });

});
*/
  
$('#Stage-YearSelector_IncreaseSymbol_IncreaseButton').on("click",function(){
    
        AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol('IncreaseSymbol').play(0);
        //alert(currentDecade);
        
        currentDecadePos = nextDecadePos;
        nextDecadePos =    currentDecadePos + 1 > decadesStepCount ? 0 : currentDecadePos + 1;
        

        // Reset the First Year Bullet
        // Remove the Current Year Bullet because -> we have "currentBulletIndex" value now
        $(".YearBulletAll:eq("+currentBulletIndex+")").removeClass("activated");
        // Changing Animation
        $(".YearBulletAll:eq("+currentBulletIndex+") .YearCircle").animate({borderColor:"#fff"}, 500, 'swing');
        $(".YearBulletAll:eq("+currentBulletIndex+") .YearText").fadeIn(500);
        $(".YearBulletAll:eq("+currentBulletIndex+") .YearTextOut").fadeIn(500);
        $(".YearBulletAll:eq("+currentBulletIndex+") .BulletArrow").fadeOut(500);
        
        // Mark the First Year Bullet
        // Active the First Year Bullet Animation
        currentBulletIndex = 0;

        $(".YearBulletAll:eq("+currentBulletIndex+") .YearCircle").animate({borderColor:"#d5fd34"}, 500, 'swing');
        $(".YearBulletAll:eq("+currentBulletIndex+") .YearText").fadeOut(500);
        $(".YearBulletAll:eq("+currentBulletIndex+") .YearTextOut").fadeOut(500);
        $(".YearBulletAll:eq("+currentBulletIndex+") .BulletArrow").fadeIn(500);
        

        // Filter the year
        currentYearMin = (((Math.round(decadesRange.min/10)-1)*10)+(currentDecadePos*10));
        if ( currentYearMin <= decadesRange.min ) { currentYearMin = decadesRange.min };
        currentYearMax = (Math.round(decadesRange.min/10)*10)+(currentDecadePos*10)-1;
        // Hook test if the year max higher than the decades max range value
        if ( currentYearMax >= decadesRange.max ) { currentYearMax = decadesRange.max };

        // Setup the DecadeShow
        // LastDecade is CurrentDecade
        // Change the text in an element
        currentDecade = ((decadesRange.min-(decadesRange.min%10))+(currentDecadePos*10))%100;
        nextDecade = ((decadesRange.min-(decadesRange.min%10))+(nextDecadePos*10))%100;

        currentDecade = currentDecade == 0 ? "0"+currentDecade : currentDecade;
        nextDecade = nextDecade == 0 ? "0"+nextDecade : nextDecade;
        //alert (currentDecade + " - " + nextDecade);
        
        $("#Stage-HistoryYearInfo_YearTitle p span").html(currentYearMax);
        
        $(".YearBulletAll .YearTextOut").find("p span:eq(0)").html((currentYearMin-(currentYearMin%100))/100);
        
        //alert ((currentYearMin-(currentYearMin%100))/100);
        //alert(currentDecade);
        var j=0;
        var k=9;
        
        for (i=((currentYearMax-(currentYearMax%10))+9);i>=(currentYearMax-(currentYearMax%10));i--) { 
                if ((i>=currentYearMin) && (i<=currentYearMax)) 
                    {	
                        AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol("YearBullets").getSymbol("YearBullet-0"+j).$("YearText").find('p span:eq(0)').html(((i%100)<10)? '0'+(i%100) : (i%100));
                        AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol("YearBullets").$(".YearBulletAll:eq("+j+")").fadeIn(1500);
                        j++;
                    } else {AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol("YearBullets").$(".YearBulletAll:eq("+k+")").fadeOut(1000);k--;}
            }

        //$("#Stage-YearSelector_YearBullets").transition({ rotate: 0 + 'deg' },1000,'cubic-bezier(0,.43,0,1.38)');
        //$("#Stage-YearSelector_YearBullets").hide().fadeIn(500);        
        
        $("#Stage-YearSelector_YearBullets").transition({rotate: 0 + 'deg' },1000,'cubic-bezier(0,.51,.61,.99)');
        
        $('#Stage-YearSelector_DecadeTitle').find('p span:eq(0)').css({display:"block", transform: "perspective: '500px',  rotateX: '0deg'", opacity: 0 }).transition({  perspective: '100px',  rotateX: '360deg', opacity: 1 },500).html(currentDecade);
        
        //AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol('YearBullets').play(1000);
        

        SceneOneinit();
    
        });



// Decrease Decade Button
/*
EC.SVG.accessSVG($('#Stage-YearSelector_DecreaseSymbol_DecreaseButton')).done(function(svgDocument){

    $(svgDocument).find('path').css({fill:"#FFF",cursor:"pointer"});
    $(svgDocument).click(function(){



    });

});
*/

$('#Stage-YearSelector_DecreaseSymbol_DecreaseButton').on("click",function(){

    AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol('DecreaseSymbol').play(0);

    nextDecadePos = currentDecadePos;
    currentDecadePos = currentDecadePos - 1 < 0 ? 5 : currentDecadePos - 1;


    // Reset the First Year Bullet
    // Remove the Current Year Bullet because -> we have "currentBulletIndex" value now
    $(".YearBulletAll:eq("+currentBulletIndex+")").removeClass("activated");
    // Changing Animation
    $(".YearBulletAll:eq("+currentBulletIndex+") .YearCircle").animate({borderColor:"#fff"}, 500, 'swing');
    $(".YearBulletAll:eq("+currentBulletIndex+") .YearText").fadeIn(500);
    $(".YearBulletAll:eq("+currentBulletIndex+") .YearTextOut").fadeIn(500);
    $(".YearBulletAll:eq("+currentBulletIndex+") .BulletArrow").fadeOut(500);

    // Mark the First Year Bullet
    // Active the First Year Bullet Animation
    currentBulletIndex = 0;

    $(".YearBulletAll:eq("+currentBulletIndex+") .YearCircle").animate({borderColor:"#d5fd34"}, 500, 'swing');
    $(".YearBulletAll:eq("+currentBulletIndex+") .YearText").fadeOut(500);
    $(".YearBulletAll:eq("+currentBulletIndex+") .YearTextOut").fadeOut(500);
    $(".YearBulletAll:eq("+currentBulletIndex+") .BulletArrow").fadeIn(500);


    // Filter the year
    currentYearMin = (((Math.round(decadesRange.min/10)-1)*10)+(currentDecadePos*10));
    if ( currentYearMin <= decadesRange.min ) { currentYearMin = decadesRange.min };
    currentYearMax = (Math.round(decadesRange.min/10)*10)+(currentDecadePos*10)-1;
    // Hook test if the year max higher than the decades max range value
    if ( currentYearMax >= decadesRange.max ) { currentYearMax = decadesRange.max };

    // Setup the DecadeShow
    // LastDecade is CurrentDecade
    // Change the text in an element
    currentDecade = ((decadesRange.min-(decadesRange.min%10))+(currentDecadePos*10))%100;
    nextDecade = ((decadesRange.min-(decadesRange.min%10))+(nextDecadePos*10))%100;

    currentDecade = currentDecade == 0 ? "0"+currentDecade : currentDecade;
    nextDecade = nextDecade == 0 ? "0"+nextDecade : nextDecade;
    //alert (currentDecade + " - " + nextDecade);

    $("#Stage-HistoryYearInfo_YearTitle p span").html(currentYearMax);

    $(".YearBulletAll .YearTextOut").find("p span:eq(0)").html((currentYearMin-(currentYearMin%100))/100);

    //alert ((currentYearMin-(currentYearMin%100))/100);
    //alert(currentDecade);
    var j=0;
    var k=9;

    for (i=((currentYearMax-(currentYearMax%10))+9);i>=(currentYearMax-(currentYearMax%10));i--) { 
            if ((i>=currentYearMin) && (i<=currentYearMax)) 
                {	
                    AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol("YearBullets").getSymbol("YearBullet-0"+j).$("YearText").find('p span:eq(0)').html(((i%100)<10)? '0'+(i%100) : (i%100));
                    AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol("YearBullets").$(".YearBulletAll:eq("+j+")").fadeIn(1500);
                    j++;
                } else {AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol("YearBullets").$(".YearBulletAll:eq("+k+")").fadeOut(1000);k--;}
        }

    //$("#Stage-YearSelector_YearBullets").transition({ rotate: 0 + 'deg' },1000,'cubic-bezier(0,.43,0,1.38)');
    //$("#Stage-YearSelector_YearBullets").hide().fadeIn(500);        

    $("#Stage-YearSelector_YearBullets").transition({rotate: 0 + 'deg' },1000,'cubic-bezier(0,.51,.61,.99)');

    $('#Stage-YearSelector_DecadeTitle').find('p span:eq(0)').css({display: "block", transform: "perspective: '500px',  rotateX: '0deg'", opacity: 0 }).transition({  perspective: '100px',  rotateX: '-360deg', opacity: 1 },500).html(currentDecade);

    //AdobeEdge.getComposition('OTF-YearSelector').getStage().getSymbol('YearBullets').play(1000);


    SceneOneinit();

});

$('.HistoryActionButtons').click(function(){
    AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('ResultSymbol').play(3000);
    AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('WinnerSymbol').play(3000);
    AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('VenueSymbol').play(3000);
    $('#Stage-HistoryActionButton').fadeOut(1000);
});

// END SCENE 1 INIT //





















// BEGIN QUIZ INIT //
var random_angle = [];
var current_angle = [];

function ShowQuizOne() {
    
    $('.RotatingImages').show();
    // Check Scene
    if ( current_Scene.attr('id') != 'QuizOne' ) {
        
        current_Scene.fadeOut(1000);
        current_Scene = $('#QuizOne');
        current_Scene.fadeIn(1000);   
        
    
    
        random_angle = [];
        current_angle = [];


        randomImage = Math.floor((Math.random() * 3));

        $('.RotatingImages').css({

            backgroundImage: "url(images/test/QuizTest-"+randomImage+".jpg)",
            backgroundSize: "2400px 2400px",
            backgroundPosition: "center center"

        });

        $('.RotatingImages:eq(0),.RotatingImages:eq(7)').each(function(){

            $(this)
                .css({transform: 'rotate(0deg)'})
                .transition({rotate: -360 + 'deg'}, 2000);

        })

        $('.RotatingImages:not(:eq(0),:eq(7))').each(function(){


            random_angle[($(this).index())] = 360+Math.floor((Math.random() * 1080));
            current_angle[($(this).index())] = random_angle[($(this).index())];
            //console.log(random_angle);

            ABC =$(this);

            $(this)
                .css({transform: 'rotate(0deg)'})
                .transition({rotate: random_angle[($(this).index())] + 'deg'}, random_angle[($(this).index())]+1000).promise().done(function(){

                    //console.log(($(this).index()));
                    //console.log(random_angle);

                    $(this).propeller({

                        angle: random_angle[($(this).index())],
                        inertia: 0.99, 
                        speed: 0, 
                        step: 1, 
                        stepTransitionTime: 100,
                        onDragStart: function(){$('#'+this.element.id).css({transition: 'all 100ms linear'});},
                        onDragStop: function(){checkAngle();}, 
                        onRotate: function(){current_angle[($('#'+this.element.id).index())] = this.angle;}

                        });


                });


        });
    
    }
    
}



function checkAngle() {
    
    //console.log($('.RotatingImages:eq(0)').css("background-image").split('.')[0]);

	var total_angle =  0;

	for(i=1;i<=6;i++) {

		total_angle += current_angle[i]%360;

	}

	//console.log(total_angle);


	if (total_angle == 0) {
        
        $('.RotatingImages:eq(0)').css({

            backgroundImage: $('.RotatingImages:eq(0)').css("background-image").split('.')[0]+'-Color.jpg)',
            backgroundSize: "2400px 2400px",
            backgroundPosition: "center center"

        });
        
		$('.RotatingImages:not(:eq(0))').each(function(){
        
            $(this).delay($(this).index()*200).fadeOut(500);
        
        });

	}

}


$("#Stage-QuizOne").css({position:"absolute",top:"0px",left:"0px",border:"0px #fff solid"});


// END QUIZ INIT //



// BEGIN QUIZ 2 //

function ShowQuizTwo() {
    
    // Change Scene
    if ( current_Scene.attr('id') != 'QuizTwo' ) {
        
        current_Scene.fadeOut(1000);
        current_Scene = $('#QuizTwo');
        current_Scene.fadeIn(1000);   
        AdobeEdge.getComposition('OTF-QuizTwo').getStage().getSymbol('Quiz_Selection').stop(0);
        AdobeEdge.getComposition('OTF-QuizTwo').getStage().play(0);
        
    }
    
}

// END QUIZ 2 //



// BEGIN HIGHLIGHT //

function ShowHighlight() {
    
    // Change Scene
    if ( current_Scene.attr('id') != 'Highlight' ) {
        
        current_Scene.fadeOut(1000);
        current_Scene = $('#Highlight');
        current_Scene.fadeIn(1000);  
        AdobeEdge.getComposition('OTF-Highlight').getStage().getSymbol('Highlight_All').getSymbol('HighLight_PInfo').stop(0);
        AdobeEdge.getComposition('OTF-Highlight').getStage().getSymbol('Highlight_All').getSymbol('HighLight_PInfo2').stop(0);
        AdobeEdge.getComposition('OTF-Highlight').getStage().play(0);
        
    }
    
}

// END HIGHLIGHT //




// BEGIN VENUE //

function ShowVenueEvent() {
    
    // Change Scene
    if ( current_Scene.attr('id') != 'VenueEvent' ) {
        
        current_Scene.fadeOut(1000);
        current_Scene = $('#VenueEvent');
        current_Scene.fadeIn(1000);  
        AdobeEdge.getComposition('OTF-VenueEvent').getStage().play(0);
        
    }
    
}

// END VENUE //













// BEGIN PLAYER SELECT //

    // Composition Position

    $("#Stage-PlayerList").css({position:"absolute",top:"0px",left:"0px",border:"0px #fff solid"}); 
    $("#Stage-PlayerFilter").css({position:"absolute",top:"0px",left:"0px",border:"0px #fff solid"});
    $("#Stage-PlayerList_PlayerBrief").css({width:0,height:0});

    //clearTimeout(eventTimer);  //clear timeout queue prevent any timeout function still not running excute
    //var eventTimer=window.setTimeout(function(){sym.play();},2000);


    currentIndex = -1;
    PlayerNumber = 3; PLNumber = -1;
    bullet_curentIndex = 0;
    initNumber = PlayerNumber < 3 ? PlayerNumber : 3;
    Button_clickable = true;

    names = ['Federer','Maria','Djokovic','Nadal','Murray','Potro','Serena','Sampras','Agassi','Roddick','Ferrer','Hingis','Graf','Warinka','Tsonga','Nishikori'];
    flags = ['flag','France','Belgum','Austria','Australia','US','Spain','Portuga','UK']



    var hammertime = new Hammer(document.getElementById('PlayerList'));

    hammertime
        .on('swiperight', function(ev) {
        
            if ( Button_clickable == true ) {
                
                PLNumber = currentIndex <= 0 ? 0 : (currentIndex-1);
                
                duration = (Math.abs(currentIndex-PLNumber)*100)+1000;

                //clearTimeout(eventTimer);  //clear timeout
                //var eventTimer=window.setTimeout(function(){sym.play();},2000);// 2 second delay then play


                
                $('#Stage-PlayerList_Button').animate({backgroundColor: '#FFF'});

                if (currentIndex != PLNumber) {

                        $('.PlayerBullets:eq('+bullet_curentIndex+')').css({backgroundColor: "rgba(255,255,255,1.0)"});
                        bullet_curentIndex = 0;
                        $('.PlayerBullets:eq('+bullet_curentIndex+')').css({backgroundColor: "rgba(212,253,51,1.0)"});
                        
                        AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('PlayerBrief').getSymbol('P_Info').stop(0);
                        AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('PlayerBrief').stop(0);
                    
                        clearTimeout(eventTimer);	
                        var eventTimer = window.setTimeout(function(){
                            AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('PlayerBrief').play(0);
                            AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('BGSymbol').play(0);
                            
                            // Image Background Change
                            randomImage = Math.floor((Math.random() * 10));
                            $('#Stage-PlayerList_BGImages_PlayerListBG').css({backgroundImage: 'url(images/OTF-BG-0'+randomImage+'.jpg)'});
                            AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('BGImages').play(0);
                            
                            },duration-500);
                    
                    
                            // Flag Background Change
                            randomImage = Math.floor((Math.random() * flags.length));
                            $('#Stage-PlayerList_PlayerBrief_Flag').css({backgroundImage: 'url(images/test/'+flags[randomImage]+'.jpg)'});

                    
                        $(".PlayerButtons:eq("+PLNumber+")").animate({backgroundColor: "rgba(255,255,255,1.0)"},500,'swing');

                        Button_clickable = false;

                        $("#Stage-PlayerList_ImagesGroup")
                            .transition({
                                x: (700-(700*PLNumber))},
                                duration,
                                'cubic-bezier(.54,0,.38,1.44)',
                                function(){
                                        
                                        Button_clickable = true;
                        
                                    });


                        $(".PlayerImages:eq("+PLNumber+")").toggleClass('Xanimated')
                            .css('transform', 'translate(0px, 0px) translateZ(0px) rotate(0deg)  perspective(10000px) rotateY(0deg) scale(0.75,0.75)')
                            .delay(duration-500).transition({  x: '-=200', perspective: '10000px',  rotateY: '360deg', scale: '1' },1000);

                        if (currentIndex != -1) {

                           $(".PlayerButtons:eq("+currentIndex+")").animate({backgroundColor: "rgba(255,255,255,0.0)"});

                            $(".PlayerImages:eq("+currentIndex+")").toggleClass('Xanimated')
                                .css('transform', 'translate(-200px, 0px) translateZ(0px) rotate(0deg) perspective(10000px) rotateY(360deg) scale(1, 1)')
                                .transition({  x: '+=200', perspective: '10000px',  rotateY: '0deg', scale: '0.75' },500);	

                        }

                        currentIndex = PLNumber;
                }
                
                
            }            
        
            })
    
        .on('swipeleft', function(ev) {
        
             if ( Button_clickable == true ) {
                
                PLNumber = PLNumber >= (PlayerNumber-1) ? (PlayerNumber-1) : (PLNumber+1);
                
                //alert(PLNumber); 
                 
                duration = (Math.abs(currentIndex-PLNumber)*100)+1000;

                //clearTimeout(eventTimer);  //clear timeout
                //var eventTimer=window.setTimeout(function(){sym.play();},2000);// 2 second delay then play


                
                $('#Stage-PlayerList_Button').animate({backgroundColor: '#FFF'});

                if (currentIndex != PLNumber) {
                    
                        $('.PlayerBullets:eq('+bullet_curentIndex+')').css({backgroundColor: "rgba(255,255,255,1.0)"});
                        bullet_curentIndex = 0;
                        $('.PlayerBullets:eq('+bullet_curentIndex+')').css({backgroundColor: "rgba(212,253,51,1.0)"});
                        
                        AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('PlayerBrief').getSymbol('P_Info').stop(0);
                        AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('PlayerBrief').stop(0);
                        clearTimeout(eventTimer);	
                        var eventTimer = window.setTimeout(function(){
                            AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('PlayerBrief').play(0);
                            AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('BGSymbol').play(0);
                            
                            // Image Background Change
                            randomImage = Math.floor((Math.random() * 10));
                            $('#Stage-PlayerList_BGImages_PlayerListBG').css({backgroundImage: 'url(images/OTF-BG-0'+randomImage+'.jpg)'});
                            AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('BGImages').play(0);
                            
                            },duration-500);
                    
                    
                            // Flag Background Change
                            randomImage = Math.floor((Math.random() * flags.length));
                            $('#Stage-PlayerList_PlayerBrief_Flag').css({backgroundImage: 'url(images/test/'+flags[randomImage]+'.jpg)'});
                    
                    
                        $(".PlayerButtons:eq("+PLNumber+")").animate({backgroundColor: "rgba(255,255,255,1.0)"},500,'swing');

                        Button_clickable = false;

                        $("#Stage-PlayerList_ImagesGroup")
                            .transition({
                                x: (700-(700*PLNumber))},
                                duration,
                                'cubic-bezier(.54,0,.38,1.44)',
                                function(){
                                        
                                        Button_clickable = true;
                        
                                    });


                        $(".PlayerImages:eq("+PLNumber+")").toggleClass('Xanimated')
                            .css('transform', 'translate(0px, 0px) translateZ(0px) rotate(0deg)  perspective(10000px) rotateY(0deg) scale(0.75,0.75)')
                            .delay(duration-500).transition({  x: '-=200', perspective: '10000px',  rotateY: '360deg', scale: '1' },1000);

                        if (currentIndex != -1) {

                           $(".PlayerButtons:eq("+currentIndex+")").animate({backgroundColor: "rgba(255,255,255,0.0)"});

                            $(".PlayerImages:eq("+currentIndex+")").toggleClass('Xanimated')
                                .css('transform', 'translate(-200px, 0px) translateZ(0px) rotate(0deg) perspective(10000px) rotateY(360deg) scale(1, 1)')
                                .transition({  x: '+=200', perspective: '10000px',  rotateY: '0deg', scale: '0.75' },500);	

                        }

                        currentIndex = PLNumber;
                }
                
                
            }               
        
            });


    $(".PlayerButtons")
        .on('click',function(){

            if ( Button_clickable == true ) {
                
                PLNumber = $(this).index();

                duration = (Math.abs(currentIndex-PLNumber)*100)+1000;

                //clearTimeout(eventTimer);  //clear timeout
                //var eventTimer=window.setTimeout(function(){sym.play();},2000);// 2 second delay then play

                $('#Stage-PlayerList_Button').animate({backgroundColor: '#FFF'});

                if (currentIndex != PLNumber) {
                    
                        $('.PlayerBullets:eq('+bullet_curentIndex+')').css({backgroundColor: "rgba(255,255,255,1.0)"});
                        bullet_curentIndex = 0;
                        $('.PlayerBullets:eq('+bullet_curentIndex+')').css({backgroundColor: "rgba(212,253,51,1.0)"});
                        
                        AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('PlayerBrief').getSymbol('P_Info').stop(0);
                        AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('PlayerBrief').stop(0);
                        clearTimeout(eventTimer);	
                        var eventTimer = window.setTimeout(function(){
                            AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('PlayerBrief').play(0);
                            AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('BGSymbol').play(0);
                            
                            // Image Background Change
                            randomImage = Math.floor((Math.random() * 10));
                            $('#Stage-PlayerList_BGImages_PlayerListBG').css({backgroundImage: 'url(images/OTF-BG-0'+randomImage+'.jpg)'});
                            AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('BGImages').play(0);
                            
                            },duration-500);
                    
                            // Flag Background Change
                            randomImage = Math.floor((Math.random() * flags.length));
                            $('#Stage-PlayerList_PlayerBrief_Flag').css({backgroundImage: 'url(images/test/'+flags[randomImage]+'.jpg)'});

                    
                        $(this).animate({backgroundColor: "rgba(255,255,255,1.0)"},500,'swing');

                        Button_clickable = false;

                        $("#Stage-PlayerList_ImagesGroup")
                            .transition({
                                x: (700-(700*PLNumber))},
                                duration,
                                'cubic-bezier(.54,0,.38,1.44)',
                                function(){
                                        
                                        Button_clickable = true;
                        
                                    });

                        $(".PlayerImages:eq("+PLNumber+")").toggleClass('Xanimated')
                            .css('transform', 'translate(0px, 0px) translateZ(0px) rotate(0deg)  perspective(10000px) rotateY(0deg) scale(0.75,0.75)')
                            .delay(duration-500).transition({  x: '-=200', perspective: '10000px',  rotateY: '360deg', scale: '1' },1000);

                        if (currentIndex != -1) {

                           $(".PlayerButtons:eq("+currentIndex+")").animate({backgroundColor: "rgba(255,255,255,0.0)"});

                            $(".PlayerImages:eq("+currentIndex+")").toggleClass('Xanimated')
                                .css('transform', 'translate(-200px, 0px) translateZ(0px) rotate(0deg) perspective(10000px) rotateY(360deg) scale(1, 1)')
                                .transition({  x: '+=200', perspective: '10000px',  rotateY: '0deg', scale: '0.75' },500);	

                        }

                        currentIndex = PLNumber;
                }
                
                
            }

        });




    $(".PlayerImages").on("click",function() {
        
        if (!AdobeEdge.getComposition('OTF-PlayerList').getStage().isPlaying()) { 

            if (currentIndex != $(this).index()) {
                
                    // Image Background Change
                    randomImage = Math.floor((Math.random() * 10));
                    $('#Stage-PlayerList_BGImages_PlayerListBG').css({backgroundImage: 'url(images/OTF-BG-0'+randomImage+'.jpg)'});
                    AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('BGImages').play(0);
                    AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('BGSymbol').play(0);
                
                    // Flag Background Change
                    randomImage = Math.floor((Math.random() * flags.length));
                    $('#Stage-PlayerList_PlayerBrief_Flag').css({backgroundImage: 'url(images/test/'+flags[randomImage]+'.jpg)'});

                    $('.PlayerBullets:eq('+bullet_curentIndex+')').css({backgroundColor: "rgba(255,255,255,1.0)"});
                    bullet_curentIndex = 0;
                    $('.PlayerBullets:eq('+bullet_curentIndex+')').css({backgroundColor: "rgba(212,253,51,1.0)"});

                    $(".PlayerButtons:eq("+$(this).index()+")").animate({backgroundColor: "rgba(255,255,255,1.0)"},500,'swing');
                
                    
                    AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('PlayerBrief').getSymbol('P_Info').stop(0);
                    AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('PlayerBrief').play(0);

                    $("#Stage-PlayerList_ImagesGroup").transition({x: (700-(700*$(this).index()))},1100,'cubic-bezier(.21,.59,.44,1.00)');

                    $(this).toggleClass('Xanimated')
                        .css('transform', 'translate(0px, 0px) translateZ(0px) rotate(0deg)  perspective(10000px) rotateY(0deg) scale(0.75,0.75)')
                        .transition({  x: '-=200', perspective: '10000px',  rotateY: '360deg', scale: '1.0' },1000);

                    if (currentIndex != -1) {

                        $(".PlayerImages:eq("+currentIndex+")").toggleClass('Xanimated')
                            .css('transform', 'translate(-200px, 0px) translateZ(0px) rotate(0deg) perspective(10000px) rotateY(360deg) scale(1.0, 1.0)')
                            .transition({  x: '+=200', perspective: '10000px',  rotateY: '0deg', scale: '0.75' },500);	


                           $(".PlayerButtons:eq("+currentIndex+")").animate({backgroundColor: "rgba(255,255,255,0.0)"});

                    }

                    currentIndex = $(this).index();

            }

        }

    });



    $('.PlayerBullets').on('click',function(){

        if (bullet_curentIndex != $(this).index()) {

            $(this).animate({backgroundColor: "rgba(212,253,51,1.0)"},500,'swing');

            $('.PlayerBullets:eq('+bullet_curentIndex+')').animate({backgroundColor: "rgba(255,255,255,1.0)"},500,'swing');

            bullet_curentIndex = $(this).index();
            
            randomImage = Math.floor((Math.random() * names.length));
            
            $(".PlayerImages:eq("+currentIndex+")")
                        .css({transform : 'translate(-200px, 0px) translateZ(0px) rotate(0deg) perspective(10000px) rotateX(0deg) scale(1.0, 1.0)'})
                        .transition({  perspective: '10000px',  rotateX: '360deg' },1000);
             
            clearTimeout(ChangePic);
            var ChangePic = setTimeout(function(){$(".PlayerImages:eq("+currentIndex+")").css({backgroundImage: 'url(images/test/'+names[randomImage]+'.jpg)'});	},500);

        }
    });


function isInt(n) {
   return n % 1 === 0;
}

PlayerListShow_playing = false;

function PlayerListShow(PNumber) { 
    
    // Check Scene
    if ( current_Scene.attr('id') != 'PlayerList' ) {
        
        if(!PlayerListShow_playing) {

            if (!isInt(PNumber)) {PNumber = 3;}

            PlayerListShow_playing = true;

            AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('PlayerBrief').stop(0);
            AdobeEdge.getComposition('OTF-PlayerList').getStage().getSymbol('BGImages').play(0);

            // Change Scene
            if (current_Scene.attr("id") != "PlayerList" ) {

                current_Scene.fadeOut(1000);
                current_Scene = $('#PlayerList');

            }

            // Show the Content
            $('#PlayerList').fadeIn(1000).promise().done(function(){

                PlayerListShow_playing = false;

                });


            // Delete All Clone Before ( Images and Button )
            $(".PlayerImages").each(function(){
                if ($(this).index() != 0) {
                    $(this).remove();   
                } else { $(this)
                            .removeClass('Xanimated')
                            .css('transform', 'translate(0px, 0px) translateZ(0px) rotate(0deg)  perspective(10000px) rotateY(0deg) scale(0.75,0.75)'); }
            });

            $(".PlayerButtons").each(function(){
                if ($(this).index() != 0) {
                    $(this).remove();   
                } else { $(this).css({backgroundColor: "rgba(255,255,255,0.0)"}); }
            });



            // Clone Again with new number of player
            currentIndex = -1;
            PlayerNumber = PNumber;
            bullet_curentIndex = 0;

            $('.PlayerBullets:eq('+bullet_curentIndex+')').css({backgroundColor: "rgba(212,253,51,1.0)"});

            $("#Stage-PlayerList_ButtonsGroup").css({left: ((1920-(40*PlayerNumber))/2)+'px'});


            for (i=1;i<PlayerNumber;i++) {

                randomImage = Math.floor((Math.random() * names.length));

                $("#Stage-PlayerList_PlayerImage-00")
                    .css({
                            backgroundImage: 'url(images/test/'+names[randomImage]+'.jpg)',
                            backgroundPosition: 'center center',
                            backgroundSize: '100% 100%'

                        })
                    .clone(true, true)
                    .attr('id','Stage-PlayerList_PlayerImage-'+(i<10? '0' +i : i))
                    .css({
                            left: (65+(700*i))+'px',
                            backgroundImage: 'url(images/test/'+names[randomImage]+'.jpg)',
                            backgroundPosition: 'center center',
                            backgroundSize: '100% 100%'
                        })
                    .appendTo($("#Stage-PlayerList_ImagesGroup"));

                $("#Stage-PlayerList_Button-00")
                    .clone(true, true)
                    .attr('id','Stage-PlayerList_Button-'+(i<10? '0' +i : i))
                    .css({left: (40*i)+'px'})
                    .appendTo($("#Stage-PlayerList_ButtonsGroup"));

            }

            initNumber = PlayerNumber < 3 ? PlayerNumber : 3;
            Button_clickable = true;


            // Animation of 3 first Player
            $("#Stage-PlayerList_ImagesGroup").css({x: '0'});

            for (i=0;i<initNumber;i++) {

                $('.PlayerImages:eq('+i+')')
                    .css({transform: 'translate(0px, 0px) translateZ(0px) rotate(0deg) perspective(10000px) rotateY(0deg) rotateX(360deg) scale(0.0, 0.0)'})
                    .delay(500*i)
                    .transition({scale:0.75,rotateX:'0deg'},1000);

            }

            // Animation of all buttons
            $(".PlayerButtons")
                .each(function(){

                    $(this)
                        .css({y: '0'})
                        .delay($(this).index()*75)                    
                        .transition({y: '-350'},1000,'cubic-bezier(.54,0,.38,1.44)');

                });
        }

    }

}




// END PLAYER SELECT //










// BEGIN GALLERY //

var Images_Count = 29;
var Images_Stacks = [];
tapped = false;

start_cycle = [2,0,1];

$("#Stage-Gallery_Next").css({zIndex: 999});
$("#Stage-Gallery_Back").css({zIndex: 999});
$("#Stage-Gallery_Menu").css({zIndex: 999});

$("#Stage-Gallery_BG").css({zIndex: -2});

var i=0;
Images_Stacks[i] = [];

$('#Stage-Gallery').append('<div id="Image_Overlay"></div>');
$('#Stage-Gallery').append('<div id="Stage-Gallery_GGroup-'+i+'" class="GalleryGroups"></div>');

for (k=1;k<=Images_Count;k++) {
    
    Images_Stacks[i].push(k<10 ? '00'+k : '0'+k);
    
    $('#Stage-Gallery_GGroup-'+i).append('<img id="GalleryImages-ID-'+ ((k<10) ? ('00'+k) : ('0'+k)) +'" class="GalleryImages" alt="Images" src="images/Gallery/Gallery-'+ ((k<10) ? ('00'+k) : ('0'+k)) +'.jpg" />');
    
    if((k%(Math.ceil(Images_Count/3)))==0) {
        i++;Images_Stacks[i] = [];
        $('#Stage-Gallery').append('<div id="Stage-Gallery_GGroup-'+i+'" class="GalleryGroups"></div>');
    }
    
    
}


$('.GalleryImages').each(function(index){

    $(this).load(function(){

        leftOffset = (15 +Math.floor((Math.random() * 60)));
        topOffset = ((15 + Math.floor((Math.random() * 50))));
        rotateOffset = (Math.floor((Math.random() * 2)) > 0 ? 1 : -1) * Math.floor((Math.random() * 45))*0;
        
        //console.log(this.width);
        
        $(this).replaceWith('<div id="'+$(this).attr('id')+'_div" class="GalleryImages" style="width:'+this.width+'px;height:'+this.height+'px;background:url('+$(this).attr('src')+') no-repeat center center;"></div>');
        
        new_div = $('#'+$(this).attr('id')+'_div');
        
        new_div.append('<p class="Image_Caption">A living legend of the game of tennis. He has won </BR> more major tournaments than any other male player in history.</p>');
        
        new_div.css({top: topOffset+'%' ,left: leftOffset+'%', 'transform': 'scale(0.25,0.25) rotate('+rotateOffset+'deg)',opacity: 0, display:'block',transformOrigin: '0 -2%' });
        new_div.delay(500+((index-1)*50)).transition({ opacity: 1 },1500);
        
        if (index == (Images_Count-1)) {
        
            $('.GalleryGroups:eq(0)').transition({opacity: 0.1},500).css({zIndex:-2});
            $('.GalleryGroups:eq(0)').find('div.GalleryImages').addClass('unactivatedImgs');

            $('.GalleryGroups:eq(1)').transition({opacity: 0.2},500).css({zIndex:-1});
            $('.GalleryGroups:eq(1)').find('div.GalleryImages').addClass('unactivatedImgs');

            $('.GalleryGroups:eq(2)').transition({opacity: 1},500).css({zIndex:'auto'});
            $('.GalleryGroups:eq(2)').find('div.GalleryImages').removeClass('unactivatedImgs');
        
        }

    });

});


$('body').on("click",function(evt){

    evt.stopPropagation();
    $(this).zoomTo({targetsize:1,scalemode:'width'});
    $('.GalleryImages').removeClass('clicked');
    $('#Image_Overlay').css({ opacity: 0 });
    $('.GalleryImages').find('p').hide();

});  
    
    
interact('.GalleryImages')
      .draggable({
    
            // enable inertial throwing
            inertia: true,

            // keep the element within the area of it's parent
            restrict: {
              restriction: "parent",
              endOnly: true,
              elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },

            // enable autoScroll
            autoScroll: false,

            // call this when drag start
            onstart: function(evt){
                //console.log('Drag Started');
            },

            // call this function on every dragmove event
            onmove: function(evt){
                //dragMoveListener;
            },

            // call this function on every dragend event
            onend: function (event) {
                //console.log('Drag Finished');
            }
    
    
      })
        .on('dragmove', function(event){dragMoveListener(event);})
        .on('tap', function(evt) {
    
             evt.stopPropagation();

             if($(evt.target).hasClass('clicked')) {

                 $('body').zoomTo({targetsize:1,scalemode:'width'});
                 $('.GalleryImages').removeClass('clicked');
                 $('#Image_Overlay').css({ opacity: 0 });
                 $(evt.target).find('p').hide();

             } else {

                $(evt.target).zoomTo({
                    targetsize:0.65,
                    scalemode:'both',
                    duration: 1000,
                    easing: [0.18,0.72,0.34,1.18],
                    animationendcallback: 
                    function() {
                        //console.log(evt.target);
                    }});

                $('.GalleryImages').removeClass('clicked').removeClass('GAnimated'); 
                $(evt.target).addClass('clicked').addClass('GAnimated');
                $('#Image_Overlay').transition({ opacity: 0.7 });

                $(evt.target).find('p').show().addClass('animated_custom flipInX');
                // Callback Function
                $(evt.target).find('p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){/*Do something here*/});
 
                }
    
        }).on('doubletap', function(evt) {

    
             evt.stopPropagation();
    
             if($(evt.target).hasClass('clicked')) {

                 $('body').zoomTo({targetsize:1,scalemode:'width'});
                 $('.GalleryImages').removeClass('clicked');
                 $('#Image_Overlay').css({ opacity: 0 });
                 $(evt.target).find('p').hide();

             } else {
                 
                $(evt.target).zoomTo({
                    targetsize:0.65,
                    scalemode:'both',
                    duration: 1000,
                    easing: [0.18,0.72,0.34,1.18],
                    animationendcallback: 
                    function() {
                        //console.log(evt.target);
                    }});

                $('.GalleryImages').removeClass('clicked').removeClass('GAnimated'); 
                $(evt.target).addClass('clicked').addClass('GAnimated');
                $('#Image_Overlay').transition({ opacity: 0.7 });
                 
                $(evt.target).find('p').show().addClass('animated_custom flipInX');
                // Callback Function
                $(evt.target).find('p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){/*Do something here*/});
                    
                }
    
        });
        


function dragMoveListener (event) {
    var target = event.target;
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    
    //console.log(event.dx);

    // translate the element
    target.style.webkitTransform =  target.style.transform =  'scale(0.25, 0.25) rotate(0deg) translate(' + x*4 + 'px, ' + y*4 + 'px)';
    //$('.GalleryGroups:eq('+ start_cycle[1] +')').css({transform: 'translate(' + x*0.01 + 'px, ' + y*0.01 + 'px)' });
    //$('.GalleryGroups:eq('+ start_cycle[2] +')').css({transform: 'translate(' + x*0.05 + 'px, ' + y*0.05 + 'px)' });

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

}




$("#Stage-Gallery_Next").on("click",function(){

    start_cycle.unshift(start_cycle.pop());
    //console.log(start_cycle);
    
    $('.GalleryGroups:eq('+ start_cycle[1] +')').transition({opacity: 0.1},500).css({zIndex:-2});
    $('.GalleryGroups:eq('+ start_cycle[1] +')').find('div').addClass('unactivatedImgs');
    
    $('.GalleryGroups:eq('+ start_cycle[2] +')').transition({opacity: 0.2},500).css({zIndex:-1});

    
    $('.GalleryGroups:eq('+ start_cycle[0] +')').transition({opacity: 1},500).css({zIndex:'auto'});
    $('.GalleryGroups:eq('+ start_cycle[0] +')').find('div').removeClass('unactivatedImgs');
    

});

$("#Stage-Gallery_Back").on("click",function(){

    start_cycle.push(start_cycle.shift());
    //console.log(start_cycle);
    
    $('.GalleryGroups:eq('+ start_cycle[1] +')').transition({opacity: 0.1},500).css({zIndex:-2});
    $('.GalleryGroups:eq('+ start_cycle[1] +')').find('div').addClass('unactivatedImgs');
    
    $('.GalleryGroups:eq('+ start_cycle[2] +')').transition({opacity: 0.2},500).css({zIndex:-1});

    
    $('.GalleryGroups:eq('+ start_cycle[0] +')').transition({opacity: 1},500).css({zIndex:'auto'});
    $('.GalleryGroups:eq('+ start_cycle[0] +')').find('div').removeClass('unactivatedImgs');
    

});


function Gallery_Show() {
    
    
    // Change Scene
    if ( current_Scene.attr('id') != 'Gallery' ) {
    
        AdobeEdge.getComposition('OTF-Gallery').getStage().play(0);

        // Change Scene
        current_Scene.fadeOut(1000);
        current_Scene = $('#Gallery');
        current_Scene.fadeIn(1000);

        $('.GalleryGroups:eq(0)').transition({opacity: 0.1},500).css({zIndex:-2});
        $('.GalleryGroups:eq(0)').find('div').addClass('unactivatedImgs');

        $('.GalleryGroups:eq(1)').transition({opacity: 0.2},500).css({zIndex:-1});
        $('.GalleryGroups:eq(1)').find('div').addClass('unactivatedImgs');

        $('.GalleryGroups:eq(2)').transition({opacity: 1},500).css({zIndex:'auto'});
        $('.GalleryGroups:eq(2)').find('div').removeClass('unactivatedImgs');


        $('.GalleryImages').each(function(){

            leftOffset = (15 +Math.floor((Math.random() * 60)));
            topOffset = ((15 + Math.floor((Math.random() * 50))));
            rotateOffset = (Math.floor((Math.random() * 2)) > 0 ? 1 : -1) * Math.floor((Math.random() * 45))*0;
            $(this).css({top: topOffset+'%' ,left: leftOffset+'%', 'transform': 'scale(0.25,0.25) rotate('+rotateOffset+'deg)',opacity: 0, display:'block',transformOrigin: '0 0' })
                .delay(500+$(this).index()*100)
                .transition({ opacity: 1 });


        });
        
    }

}  


// END GALLERY //












// BEGIN PLAYER INFORMATION //

$('#Stage-PlayerInformation_PlayerInfo_PlayerInfo_Close_Button1, #Stage-PlayerInformation_PlayerInfo_CarrerHiglight_Close_Button2').click(ClosePlayerInformation);

function ShowPlayerInformation() {
    
    $('#PlayerInformation').show().addClass('animated_custom_1 fadeIn').css("pointer-events", "all");
    
    
    AdobeEdge.getComposition('OTF-PlayerInformation').getStage().play(0);

    $('#Stage-PlayerInformation_PlayerInfo_PlayerInfo')
        .addClass('animated_custom_1 rollIn')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).css({opacity: 1}).removeClass('rollIn');
        });
    $('#Stage-PlayerInformation_PlayerInfo_CarrerHiglight')
        .addClass('animated_custom_2 rollIn')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).css({opacity: 1}).removeClass('rollIn');
        });

}


function ShowPlayerInformation_RightOnly() {

    $('#PlayerInformation').show().addClass('animated_custom_1 fadeIn').css("pointer-events", "all");

    AdobeEdge.getComposition('OTF-PlayerInformation').getStage().play(0);
    
    $('#Stage-PlayerInformation_PlayerInfo_PlayerInfo').css({opacity:0});

    $('#Stage-PlayerInformation_PlayerInfo_CarrerHiglight')
        .addClass('animated_custom_1 rollIn')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).css({opacity: 1}).removeClass('animated_custom_1 rollIn');
        });

}

function ClosePlayerInformation() {
    
    $('#PlayerInformation')
        .addClass('animated_custom_1 fadeOut')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('fadeIn fadeOut');
            $(this).css("pointer-events","none");
        });
    
    if ($('#Stage-PlayerInformation_PlayerInfo_PlayerInfo').hasClass('animated_custom_1')) {

        $('#Stage-PlayerInformation_PlayerInfo_PlayerInfo')
            .addClass('animated_custom_1 rollOut')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass('animated_custom_1 rollIn rollOut');
            });
    
        }
    
    $('#Stage-PlayerInformation_PlayerInfo_CarrerHiglight')
        .addClass('animated_custom_2 rollOut')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated_custom_1 animated_custom_2 rollIn rollOut');
        });
    
}

// END PLAYER INFORMATION //

// BEGIN SIDEBAR MENU //

currentSideBarMenu = "";


// ASSIGN CLICK & TAP FUNCTION CLICK WORK WHILE DRAGGING BUT TAP WORK WHILE NOT DRAGGING //

// AO
interact('#Stage-SideBarMenu_burger_AO_AustralianOpen').on('tap',function(){

    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('AO').play(0);

    //console.log(currentMenu);

    if ((currentSideBarMenu != '') && (currentSideBarMenu != 'AO')) {
        if(currentSideBarMenu != 'Player_') {
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol(currentSideBarMenu).playReverse(1000);
        } else {

            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BG").playReverse(1250);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_AustralianPlayer").playReverse(999);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_InternationalPlayer").playReverse(999);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BGPlay").playReverse(1000);

        }

    }

    currentSideBarMenu = 'AO';

});

$('#Stage-SideBarMenu_burger_AO_AustralianOpen').on('click',function(){

    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('AO').play(0);

    //console.log(currentMenu);

    if ((currentSideBarMenu != '') && (currentSideBarMenu != 'AO')) {
        if(currentSideBarMenu != 'Player_') {
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol(currentSideBarMenu).playReverse(1000);
        } else {

            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BG").playReverse(1250);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_AustralianPlayer").playReverse(999);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_InternationalPlayer").playReverse(999);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BGPlay").playReverse(1000);

        }

    }

    currentSideBarMenu = 'AO';

});

// AO Menu Click & Tap

interact('#Stage-SideBarMenu_burger_AO_VENUE')
    .on('tap',function(){
        CloseSideBarMenu();
        ShowVenueEvent();
    });

$('#Stage-SideBarMenu_burger_AO_VENUE')
    .on('click',function(){
        CloseSideBarMenu();
        ShowVenueEvent();
    });


interact('#Stage-SideBarMenu_burger_AO_yearByYears')
    .on('tap',function(){
        CloseSideBarMenu();
        HistoryTimeLineShow();
    });

$('#Stage-SideBarMenu_burger_AO_yearByYears')
    .on('click',function(){
        CloseSideBarMenu();
        HistoryTimeLineShow();
    });


interact('#Stage-SideBarMenu_burger_AO_HIGHLIGHTS')
    .on('tap',function(){
        CloseSideBarMenu();
        ShowHighlight();
    });

$('#Stage-SideBarMenu_burger_AO_HIGHLIGHTS')
    .on('click',function(){
        CloseSideBarMenu();
        ShowHighlight();
    });





// Player
interact('#Stage-SideBarMenu_burger_Player__BGPlay_Player').on('tap',function(){

    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Player_').play(0);

    if ((currentSideBarMenu != '') && (currentSideBarMenu != 'Player_')) {

        AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol(currentSideBarMenu).playReverse(1000);

    }


    currentSideBarMenu = 'Player_';


});

$('#Stage-SideBarMenu_burger_Player__BGPlay_Player').on('click',function(){

    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Player_').play(0);

    if ((currentSideBarMenu != '') && (currentSideBarMenu != 'Player_')) {

        AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol(currentSideBarMenu).playReverse(1000);

    }


    currentSideBarMenu = 'Player_';


});

// Player Click & Tap

interact('#Stage-SideBarMenu_burger_Player__btn_AustralianPlayer_Australian_Winner')
    .on('tap',function(){
        AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Player_').getSymbol('btn_AustralianPlayer').play(1250);
        AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Player_').getSymbol('btn_InternationalPlayer').playReverse(999); 
    });


$('#Stage-SideBarMenu_burger_Player__btn_AustralianPlayer_Australian_Winner')
    .on('click',function(){
        AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Player_').getSymbol('btn_AustralianPlayer').play(1250);
        AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Player_').getSymbol('btn_InternationalPlayer').playReverse(999); 
    });


interact('#Stage-SideBarMenu_burger_Player__btn_InternationalPlayer_International')
    .on('tap',function(){
        AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Player_').getSymbol('btn_InternationalPlayer').play(1250);
        AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Player_').getSymbol('btn_AustralianPlayer').playReverse(999); 
    });


$('#Stage-SideBarMenu_burger_Player__btn_InternationalPlayer_International')
    .on('click',function(){
        AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Player_').getSymbol('btn_InternationalPlayer').play(1250);
        AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Player_').getSymbol('btn_AustralianPlayer').playReverse(999); 
    });


interact('#Stage-SideBarMenu_burger_Player__btn_AustralianPlayer_GrandSlam')
    .on('tap',function(){
        CloseSideBarMenu();
        PlayerListShow(9);
    });

$('#Stage-SideBarMenu_burger_Player__btn_AustralianPlayer_GrandSlam')
    .on('click',function(){
        CloseSideBarMenu();
        PlayerListShow(9);
    });



interact('#Stage-SideBarMenu_burger_Player__btn_AustralianPlayer_HallOfFrame')
    .on('tap',function(){
        CloseSideBarMenu();
        PlayerListShow(9);
    });

$('#Stage-SideBarMenu_burger_Player__btn_AustralianPlayer_HallOfFrame')
    .on('click',function(){
        CloseSideBarMenu();
        PlayerListShow(9);
    });


interact('#Stage-SideBarMenu_burger_Player__btn_AustralianPlayer_FormGuide')
    .on('tap',function(){
        CloseSideBarMenu();
        PlayerListShow(9);
    });

$('#Stage-SideBarMenu_burger_Player__btn_AustralianPlayer_FormGuide')
    .on('click',function(){
        CloseSideBarMenu();
        PlayerListShow(9);
    });

interact('#Stage-SideBarMenu_burger_Player__btn_InternationalPlayer_TOP10')
    .on('tap',function(){
        CloseSideBarMenu();
        PlayerListShow(9);
    });

$('#Stage-SideBarMenu_burger_Player__btn_InternationalPlayer_TOP10')
    .on('click',function(){
        CloseSideBarMenu();
        PlayerListShow(9);
    });

interact('#Stage-SideBarMenu_burger_Player__btn_InternationalPlayer_RisingTalent')
    .on('tap',function(){
        CloseSideBarMenu();
        PlayerListShow(9);
    });

$('#Stage-SideBarMenu_burger_Player__btn_InternationalPlayer_RisingTalent')
    .on('click',function(){
        CloseSideBarMenu();
        PlayerListShow(9);
    });

interact('#Stage-SideBarMenu_burger_Player__btn_InternationalPlayer_H2H')
    .on('tap',function(){
        CloseSideBarMenu();
        PlayerListShow(9);
    });

$('#Stage-SideBarMenu_burger_Player__btn_InternationalPlayer_H2H')
    .on('click',function(){
        CloseSideBarMenu();
        PlayerListShow(9);
    });




// Gallery
interact('#Stage-SideBarMenu_burger_Gallery__Highlights').on('tap',function(){

    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Gallery_').play(0);

    if ((currentSideBarMenu != '') && (currentSideBarMenu != 'Gallery_')) {
        if(currentSideBarMenu != 'Player_') {
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol(currentSideBarMenu).playReverse(1000);
        } else {

            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BG").playReverse(1250);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_AustralianPlayer").playReverse(999);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_InternationalPlayer").playReverse(999);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BGPlay").playReverse(1000);

        }

    }
    
    currentSideBarMenu = 'Gallery_';
    //console.log(currentSideBarMenu);
});


$('#Stage-SideBarMenu_burger_Gallery__Highlights').on('click',function(){

    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Gallery_').play(0);

    if ((currentSideBarMenu != '') && (currentSideBarMenu != 'Gallery_')) {
        if(currentSideBarMenu != 'Player_') {
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol(currentSideBarMenu).playReverse(1000);
        } else {

            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BG").playReverse(1250);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_AustralianPlayer").playReverse(999);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_InternationalPlayer").playReverse(999);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BGPlay").playReverse(1000);

        }

    }
    
    currentSideBarMenu = 'Gallery_';
    //console.log(currentSideBarMenu);
});

// Gallery Menu Click & Tap
interact('#Stage-SideBarMenu_burger_Gallery__Text').on('tap',function(){ CloseSideBarMenu();Gallery_Show();});
$('#Stage-SideBarMenu_burger_Gallery__Text').on('click',function(){ CloseSideBarMenu();Gallery_Show();});

// Quiz
interact('#Stage-SideBarMenu_burger_Quiz__Quiz').on('tap',function(){

    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Quiz_').play(0);

    if ((currentSideBarMenu != '') && (currentSideBarMenu != 'Quiz_')) {
        if(currentSideBarMenu != 'Player_') {
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol(currentSideBarMenu).playReverse(1000);
        } else {

            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BG").playReverse(1250);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_AustralianPlayer").playReverse(999);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_InternationalPlayer").playReverse(999);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BGPlay").playReverse(1000);

        }

    }

    currentSideBarMenu = 'Quiz_';

});

// Quiz Menu Click & Tap
interact('#Stage-SideBarMenu_burger_Quiz__QUIZ_1').on('tap',function(){ CloseSideBarMenu();ShowQuizOne();});
$('#Stage-SideBarMenu_burger_Quiz__QUIZ_1').on('click',function(){ CloseSideBarMenu();ShowQuizOne();});

interact('#Stage-SideBarMenu_burger_Quiz__QUIZ_2').on('tap',function(){ CloseSideBarMenu();ShowQuizTwo();});
$('#Stage-SideBarMenu_burger_Quiz__QUIZ_2').on('click',function(){ CloseSideBarMenu();ShowQuizTwo();});


$('#Stage-SideBarMenu_burger_Quiz__Quiz').on('click',function(){

    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Quiz_').play(0);

    if ((currentSideBarMenu != '') && (currentSideBarMenu != 'Quiz_')) {
        if(currentSideBarMenu != 'Player_') {
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol(currentSideBarMenu).playReverse(1000);
        } else {

            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BG").playReverse(1250);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_AustralianPlayer").playReverse(999);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_InternationalPlayer").playReverse(999);
            AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BGPlay").playReverse(1000);

        }

    }

    currentSideBarMenu = 'Quiz_';

});

// ASSIGN CLICK & TAP FUNCTION CLICK WORK WHILE DRAGGING BUT TAP WORK WHILE NOT DRAGGING //

interact('#Stage-SideBarMenu_burger_ScrollBlock')
        .draggable({
    
            // enable inertial throwing
            inertia: true,

            // keep the element within the area of it's parent
            restrict: {
              restriction: "parent",
              endOnly: true,
              elementRect: { top: 0.5, left: 0, bottom: -0.1, right: 0 }
            },

            // enable autoScroll
            autoScroll: true,

            // call this when drag start
            onstart: function(evt){
                //console.log('Drag Started');
            },

            // call this function on every dragmove event
            onmove: function(evt){
                SideBarDragMoveListener(evt);
            },

            // call this function on every dragend event
            onend: function (event) {
                //console.log('Drag Finished');
            }
      });


function SideBarDragMoveListener(event) {
    
    var target = event.target;
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =  target.style.transform =  'translate(' + 0 + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

}

function ShowSideBarMenu() {
    
    $('#SideBarMenu').transition({opacity: 1}).css({pointerEvents: 'all'});
    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').play(0);

}

function CloseSideBarMenu() {
    
    $('#SideBarMenu').transition({opacity: 0}).css({pointerEvents: 'none'});
    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').stop(0);
    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('AO').stop(0);
    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Player_').stop(0);
    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Gallery_').stop(0);
    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol('burger').getSymbol('Quiz_').stop(0);
    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BG").stop(0);
    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_AustralianPlayer").stop(0);
    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_InternationalPlayer").stop(0);
    AdobeEdge.getComposition('OTF-SideBarMenu').getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BGPlay").stop(0);
    currentSideBarMenu = "";

}

// END SIDEBAR MENU //

// INTRO //


function ShowIntro() {

    // Change Scene
    if ( current_Scene.attr('id') != 'MainMenu' ) {
        
        current_Scene.fadeOut(1000);
        current_Scene = $('#MainMenu');
        current_Scene.fadeIn(1000);  
        AdobeEdge.getComposition('OTF-Intro').getStage().play(0);
        
    }
    

}

// INTRO //

// START TOUCH SCREEN

current_Scene = $('#None');
ShowIntro();

//setTimeout(function(){PlayerListShow();},10000);

//setTimeout(function(){HistoryTimeLineShow();},20000);

//setTimeout(function(){Gallery_Show();},30000);