export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here	
	},
	SCHD :()=>{
		let data =[]
	for (let i=0; i<SCHD_CALLS.data.length; i++)
	{	
		let date = DATE_FORMAT.to_date(SCHD_CALLS.data[i].SCHEDULE_DATE)
		
		if(date == DATE_FORMAT.get_today() && SCHD_CALLS.data[i].REMARK =="CALL BACK")
		{
			showModal("Modal2")
			data.push(SCHD_CALLS.data[i])
		}
	 }
		return data
	},
	returnName :()=>{
		if(Tabs1.selectedTab == "DAILY LEADS"){
			return Text9.text
		}else if(Tabs1.selectedTab == "ADD CUSTOMER"){
			return A_Name.text
		}else if(Modal2.isVisible == true){
			return Text70.text
		}
	},
	returnPH :()=>{
		if(Tabs1.selectedTab == "DAILY LEADS"){
			return L_NUM.text
		}else if(Tabs1.selectedTab == "ADD CUSTOMER"){
			return A_NUM.text
		}else if(Modal2.isVisible){
			return Text72.text
		}
	},
	returnRemarks :()=>{
		if(Tabs1.selectedTab == "DAILY LEADS"){
			return L_REMARK.selectedOptionLabel
		}else if(Tabs1.selectedTab == "ADD CUSTOMER"){
			return A_REMARK.selectedOptionLabel
		}
	},
	myFun2: async () => {
		//use async-await or promises
	}
}