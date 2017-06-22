
//builds and returns a String "answer" dependent on Hermes Tracking API responses
exports.buildAnswerSentence = function (responseJson){
  //var pStageDesc - parcel Stage Description
	var pStageDesc = responseJson.stage.description;
	var pPointDesc = responseJson.point.description;
	
	var pTime = new Date(responseJson.dateTime);
	var isToday = false;
	var wasYesterday = false;
	var beforYesterday = false;

	switch(pStageDesc.toLowerCase()){
		case "delivered":
			pStageDesc = "was allready delivered to ";
			break;
		case "out for delivery":
			pStageDesc = "is actually out "; // sample: is actually out + 'with the local courier'
			break;
		case "we have your parcel":
			pStageDesc = "was "
		default:
			pStageDesc = pStageDesc.toLowerCase();
			break;
	}

	switch(pPointDesc.toLowerCase()){
		case "signature from household":
			pPointDesc = "household ";
			break;
		case "delivered to safe place":
			pPointDesc = "safe place ";
			break;
		case "we've collected your parcel":
			pPointDesc = "collected by hermes ";
			break;
		default:
			pPointDesc = pPointDesc.toLowerCase();
			break;
	}

	var answer = "Your Parcel " + pStageDesc + pPointDesc; // sample: Your Parcel + is actually out + with the local courier
	return answer;
};


//rubbish test code :P//
/*
function timeDiff (timeObj){ // sample '2017-06-20T23:49:12.064Z'
	isToday = false;
	wasYesterday = false;
	var beforYesterday = false;

	var timeNow = new Date();
	var timeDiffMill = timeNow.getTime()-timeObj.getTime();
	var timeDiffer = ((timeNow.getFullYear() - timeObj.getFullYear()) + (timeNow.getMonth() - timeObj.getMonth()) + (timeNow.getDate() - timeObj.getDate()));
	if(timeDiffer = 0){
		isToday = true;
	}else if(timeDiffer !=0 && timeDiffMill <= 172799999){
		wasYesterday = true;
	}
}



var isToday = false;
var wasYesterday = false;
var actualTime = new Date();
var timeNow = actualTime;
var timeObj = new Date('2017-06-22T00:07:12.064Z');
var sndTime = timeObj;

var timeDifference = ((timeNow.getFullYear() - timeObj.getFullYear()) + (timeNow.getMonth() - timeObj.getMonth()) + (timeNow.getDate() - timeObj.getDate()));

timeDiff(timeObj);
	console.log(sndTime.getFullYear() + ' ' + sndTime.getMonth() + ' ' + sndTime.getDate() + ' ' + isToday + ' ' + wasYesterday);
	console.log(actualTime);
	console.log(actualTime.getMonth() );
	console.log(actualTime.getDate());
	console.log(timeDifference);

	*/