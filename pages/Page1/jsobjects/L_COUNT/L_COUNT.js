export default {
	myVar1: [],
	myVar2: {},
	C_LIVE: () => {
		let count = 0;
		for(let i = (LEADS.data.length-1); i>=0;i--){
			if(LEADS.data[i].REMARK == "LIVE DATA" && LEADS.data[i].ACTIVE == true){
				count = count + 1;
			}
		}
		return count;
	},
	C_SCHD :()=>{
		let count = 0;
		for(let i = (L_CALLBACKS.data.length-1); i>=0;i--){
			if(L_CALLBACKS.data[i].REMARK == "RNR" || L_CALLBACKS.data[i].REMARK == "CALL BACK"  && L_CALLBACKS.data[i].ACTIVE == true){
				count = count + 1;
			}
		}
		return count;
	},
	C_FOLLOWUPS :()=>{
		let count = 0;
		for(let i = (LEADS.data.length-1); i>=0;i--){
			if(LEADS.data[i].REMARK == "INTERESTED" || LEADS.data[i].REMARK == "SWITCH OFF/NOT REACHBLE" && LEADS.data[i].ACTIVE == true){
				count = count + 1;
			}
		}
		return count;
	},
	C_OLDLEADS :()=>{
		let count = 0;
		for(let i = (LEADS.data.length-1); i>=0;i--){
			if(LEADS.data[i].REMARK == "OLD LEADS" && LEADS.data[i].ACTIVE == true){
				count = count + 1;
			}
		}
		return count;
	},
	C_TOTALCALLS :()=>{
		let count =0;
		count = L_COUNT.C_LIVE() + L_COUNT.C_SCHD() + L_COUNT.C_FOLLOWUPS() + L_COUNT.C_OLDLEADS();
		return count;
	},
	BM_INSTALL :()=>{
		if(appsmith.user.username == "sheela@lustralwater.com" || appsmith.user.username =="sindhuvaspar@gmail.com" || appsmith.user.username =="mvgopi@lustralwater.com"){
			return Banguluru_Installations.data[0].count;
		}else if(appsmith.user.username == "a.shet@lustralwater.com"){
			return Mumbai_Installations.data[0].count;
		}
	},
	myFun2: async () => {
		//use async-await or promises
	}
}