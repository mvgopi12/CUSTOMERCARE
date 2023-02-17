export default {
	myVar1: [],
	myVar2: {},
	DR_RNR :()=>{
		let count = 0;
		for(let i = (L_GET_LOGS.data.length-1); i>=0;i--){
			if(L_GET_LOGS.data[i].REMARKS == "RNR"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_CALLBACK :()=>{
		let count = 0;
		for(let i = (L_GET_LOGS.data.length-1); i>=0;i--){
			if(L_GET_LOGS.data[i].REMARKS == "CALL BACK"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_INTERESTED :()=>{
		let count = 0;
		for(let i = (L_GET_LOGS.data.length-1); i>=0;i--){
			if(L_GET_LOGS.data[i].REMARKS == "INTERESTED"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_DEMO :()=>{
		let count = 0;
		for(let i = (L_GET_LOGS.data.length-1); i>=0;i--){
			if(L_GET_LOGS.data[i].REMARKS == "DEMO REQUESTE"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_NOTINTERESTED :()=>{
		let count = 0;
		for(let i = (L_GET_LOGS.data.length-1); i>=0;i--){
			if(L_GET_LOGS.data[i].REMARKS == "NOT INTERESTED"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_SRN :()=>{
		let count = 0;
		for(let i = (L_GET_LOGS.data.length-1); i>=0;i--){
			if(L_GET_LOGS.data[i].REMARKS == "SWITCH OFF/NOT REACHBLE"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_CUSTD :()=>{
		let count = 0;
		for(let i = (L_GET_LOGS.data.length-1); i>=0;i--){
			if(L_GET_LOGS.data[i].REMARKS == "CUSTOMER DISCONNECTING"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_WRONG:()=>{
		let count = 0;
		for(let i = (L_GET_LOGS.data.length-1); i>=0;i--){
			if(L_GET_LOGS.data[i].REMARKS == "WRONG NUM"){
				count = count + 1;
			}
		}
		return count;
	},
	
	DR_TOTALC :()=>{
		let count =0;
		count = DR_COUNT.DR_CALLBACK() + DR_COUNT.DR_CUSTD() + DR_COUNT.DR_DEMO() + DR_COUNT.DR_INTERESTED() + DR_COUNT.DR_NOTINTERESTED() + DR_COUNT.DR_RNR() + DR_COUNT.DR_SRN() + DR_COUNT.DR_WRONG();
		return count;
	},
	myFun2: async () => {
		//use async-await or promises
	}
}