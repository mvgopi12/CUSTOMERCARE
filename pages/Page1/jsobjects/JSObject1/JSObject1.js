export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		let data = [];
		for(let i=0;i<Api1.data.length;i++){
			if(Api1.data[i].REMARK == "LIVE DATA"){
				data.unshift(Api1.data[i]);
			}else if(Api1.data[i].REMARK == "INTERESTED" || Api1.data[i].REMARK=="SWITCH OFF/NOT REACHBLE" || Api1.data[i].REMARK == "CUSTOMER DISCONNECTING"){
				data.push(Api1.data[i])
			}else if(Api1.data[i].REMARK == "OLD LEADS"){
			data.push(Api1.data[i]);
		}else if(	(Api1.data[i].SCHEDULE_DATE)<=DATE_FORMAT.get_today_with_minutes())
					{
						data.push(Api1.data[i]);
					}
				data.sort((a,b)=>{
					return new Date(b.SCHEDULE_DATE).getTime()  - new Date(a.SCHEDULE_DATE).getTime();
				});
		}
		return data
	},
	Referral_Data :()=>{
		let data =[];
		for(let i=0;i<Referral.data.length;i++){
			if(Referral.data[i].REMARK != null){
				data.push(Referral.data[i])
			}
		}
		return data;
	},
	
	RowIndex :()=>{
		let data = Api1.data;
		let freshData = [];
		for(let i=0;i<data.length;i++){
			freshData.push(Api1.data[i].rowIndex+2);
		}
		return freshData
	},
	myFun2: async () => {
		//use async-await or promises
	}
}