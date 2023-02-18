export default {
	myVar1: [],
	myVar2: {},
	Live_Leads: () => {
		let data=[];
	for (let i=0; i<LEADS.data.length; i++)
	{                                        
			if(LEADS.data[i].REMARK=="LIVE DATA" && LEADS.data[i].ACTIVE==true)
			{
				data.push(LEADS.data[i]);
			}
	}
	return data;
	},
	Scheduled_Leads: ()=>{
		let data=[];
	for (let i=0; i<L_CALLBACKS.data.length; i++)
	{	
		if(	(L_CALLBACKS.data[i].SCHEDULE_DATE)<=DATE_FORMAT.get_today_with_minutes())
		{
			data.push(L_CALLBACKS.data[i]);
		}
	}
		data.sort((a,b)=>{
			return new Date(b.SCHEDULE_DATE).getTime()  - new Date(a.SCHEDULE_DATE).getTime();
		});
		return data;
	},
	Followups_Leads:()=>{
		let data=[];
	for (let i=0; i<LEADS.data.length; i++)
	{
		if(LEADS.data[i].REMARK=="INTERESTED" || LEADS.data[i].REMARK=="SWITCH OFF/NOT REACHBLE" && LEADS.data[i].ACTIVE==true)
		{
			data.push(LEADS.data[i]);
		}
	}
	return data;
	},
	Old_Leads:()=>{
		let returnData=[];
		for (let i= (LEADS.data.length-1); i>=0;i--)
		{
				if(LEADS.data[i].REMARK== "OLD LEADS" && LEADS.data[i].ACTIVE==true)
				{
					returnData.push(LEADS.data[i])
				}
		}
		return returnData
	},
	L_ACTIVE: ()=>{
		if(L_REMARK.selectedOptionValue == "CALL BACK" || A_REMARK.selectedOptionValue == "CALL BACK"){
			return true;
		}else if(L_REMARK.selectedOptionValue == "RNR" || A_REMARK.selectedOptionValue == "RNR"){
			return true;
		}else {
			return false;
		}
	},
	L_RNR_SCHD :()=>{
		if(L_REMARK.selectedOptionValue == "RNR" || L_REMARK.selectedOptionValue == "RNR"){
			return DATE_FORMAT.time();
		}
	},
	L_UPDATE :()=>{
		L_UPDATE.run()
		L_LOGS.run()
	},
	A_CUSTOMER :()=>{
		if(A_Name.text !="" && A_NUM.text != ""){
				C_INSERT.run()
				L_LOGS.run()
				showModal("LEAD_ADDED_Success")
		}else{
			showModal("emptyValues")
		}
	},
	DR_DATA_INSERT :()=>{
		if(GET_DR.data[0].DATE == DATE_FORMAT.get_today()){
			showModal("Failure")
		}else{
			DR_INSERT.run()
			showModal("Success")
		}
	},
	SELECT_TAB :()=>{
		if(Tabs1.selectedTab == "DAILY REPORT"){
			L_GET_LOGS.run()
			GET_DR.run()
		} else if (Tabs1.selectedTab == "DAILY LEADS"){
			LEADS.run();
			L_CALLBACKS.run();
		}
	},
	myFun2: async () => {
		
	}
}