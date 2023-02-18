export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		let data = [];
		for(let i=0;i<Api1.data.length;i++){
			if(Api1.data[i].REMARK == "LIVE DATA"){
				data.unshift(Api1.data[i]);
			}else if(Api1.data[i].REMARK == "INTERESTED" || Api1.data[i].REMARK=="SWITCH OFF/NOT REACHBLE"){
				data.push(Api1.data[i])
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
	myFun2: async () => {
		//use async-await or promises
	}
}