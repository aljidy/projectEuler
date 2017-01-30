var curFibN = 1;
var lastFibN = 1;
var evenNo = 0;
currNStage = 1;
var holdingFib;

function fibbo(n){
	while(currNStage != n){		
		holdingFib = curFibN
		curFibN = curFibN + lastFibN;
		lastFibN = holdingFib;
		
		if(currNStage%2 == 0){
			evenNo = evenNo + curFibN;
		}

		currNStage++;

	}

	return evenNo;
}


function fibboMax(max){
	while(curFibN <= max){		
		if(currNStage==2){	
			evenNo = evenNo + curFibN;
			var countdownN = 3;
		} else if(countdownN == 0){
			evenNo = evenNo + curFibN;
			countdownN = 3;
		}


		holdingFib = curFibN
		curFibN = curFibN + lastFibN;
		lastFibN = holdingFib;
		
		countdownN--;
		currNStage++;

	}

	return evenNo;
}

console.log(fibboMax(4000000));