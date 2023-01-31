export default {
	myVar1: [],
	myVar2: {},
	DR_RNR :()=>{
		let count = 0;
		for(let i = (SindhuLogs.data.length-1); i>=0;i--){
			if(SindhuLogs.data[i].REMARKS == "RNR"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_CALLBACK :()=>{
		let count = 0;
		for(let i = (SindhuLogs.data.length-1); i>=0;i--){
			if(SindhuLogs.data[i].REMARKS == "CALL BACK"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_INTERESTED :()=>{
		let count = 0;
		for(let i = (SindhuLogs.data.length-1); i>=0;i--){
			if(SindhuLogs.data[i].REMARKS == "INTERESTED"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_DEMO :()=>{
		let count = 0;
		for(let i = (SindhuLogs.data.length-1); i>=0;i--){
			if(SindhuLogs.data[i].REMARKS == "DEMO REQUESTE"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_NOTINTERESTED :()=>{
		let count = 0;
		for(let i = (SindhuLogs.data.length-1); i>=0;i--){
			if(SindhuLogs.data[i].REMARKS == "NOT INTERESTED"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_SRN :()=>{
		let count = 0;
		for(let i = (SindhuLogs.data.length-1); i>=0;i--){
			if(SindhuLogs.data[i].REMARKS == "SWITCH OFF/NOT REACHBLE"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_CUSTD :()=>{
		let count = 0;
		for(let i = (SindhuLogs.data.length-1); i>=0;i--){
			if(SindhuLogs.data[i].REMARKS == "CUSTOMER DISCONNECTING"){
				count = count + 1;
			}
		}
		return count;
	},
	DR_WRONG:()=>{
		let count = 0;
		for(let i = (SindhuLogs.data.length-1); i>=0;i--){
			if(SindhuLogs.data[i].REMARKS == "WRONG NUM"){
				count = count + 1;
			}
		}
		return count;
	},
	
	DR_TOTALC :()=>{
		let count =0;
		count = Sindhu_DailyReport.DR_CALLBACK() + Sindhu_DailyReport.DR_CUSTD() + Sindhu_DailyReport.DR_DEMO() + Sindhu_DailyReport.DR_INTERESTED() + Sindhu_DailyReport.DR_NOTINTERESTED() + Sindhu_DailyReport.DR_RNR() + Sindhu_DailyReport.DR_SRN() + Sindhu_DailyReport.DR_WRONG();
		return count;
	},
	myFun2: async () => {
		//use async-await or promises
	}
}