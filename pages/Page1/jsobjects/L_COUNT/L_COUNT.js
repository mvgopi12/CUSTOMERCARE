export default {
	myVar1: [],
	myVar2: {},
	C_LIVE: () => {
		let data = S_LEADS.Live_Leads();
		let count = 0;
		for(let i = (data.length-1); i>=0;i--){
			if(data[i].REMARK == "LIVE DATA" && data[i].ACTIVE == true){
				count = count + 1;
			}
		}
		return count;
	},
	C_SCHD :()=>{
		let data = S_LEADS.SCHD();
		let count = 0;
		for(let i = (data.length-1); i>=0;i--){
			if(data[i].REMARK == "RNR" || data[i].REMARK == "CALL BACK"  && data[i].ACTIVE == true){
				count = count + 1;
			}
		}
		return count;
	},
	C_FOLLOWUPS :()=>{
		let data = S_LEADS.Followups_Leads();
		let count = 0;
		for(let i = (data.length-1); i>=0;i--){
			if(data[i].REMARK == "INTERESTED" || data[i].REMARK == "SWITCH OFF/NOT REACHBLE" ||data[i].REMARK == "CUSTOMER WILL CALLBACK" || data[i].REMARK == "CUSTOMER DISCONNECTING"&& data[i].ACTIVE == true){
				count = count + 1;
			}
		}
		return count;
	},
	
	C_TOTALCALLS :()=>{
		let count =0;
		count = L_COUNT.C_LIVE() + L_COUNT.C_SCHD() + L_COUNT.C_FOLLOWUPS();
		return count;
	},
	C_REFERRAL :()=>{
		let count =0;
		let data = S_LEADS.Referral_Data()
		for(let i = (data.length-1); i>=0;i--){
			if(data[i].REMARK != null){
				count = count + 1;
			}
		}
		return count
	},
	BM_INSTALL :()=>{
		if(appsmith.user.username == "sheela@lustralwater.com" || appsmith.user.username =="sindhuvaspar@gmail.com" || appsmith.user.username =="mvgopi@lustralwater.com" || appsmith.user.username == "support@lustralwater.com"){
			return Banguluru_Installations.data[0].count;
		}else if(appsmith.user.username == "a.shet@lustralwater.com"){
			return Mumbai_Installations.data[0].count;
		}
	},
	myFun2: async () => {
		//use async-await or promises
	}
}