export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here	
	},
	SCHD :()=>{
	for (let i=0; i<SCHD_CALLS.data.length; i++)
	{	
		let date = DATE_FORMAT.to_date(SCHD_CALLS.data[i].SCHEDULE_DATE)
		
		if(date == DATE_FORMAT.get_today() && SCHD_CALLS.data[i].REMARK =="RNR" ||	SCHD_CALLS.data[i].REMARK =="CALL BACK")
		{
			showModal("Modal2")
		}
	 }
	},
	myFun2: async () => {
		//use async-await or promises
	}
}