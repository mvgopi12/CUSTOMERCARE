export default {
	myVar1: [],
	myVar2: {},
	Live_Leads: () => {
		let data=[];
		for (let i=LEADS.data.length-1; i>=0; i--)
		{                                        
			if(LEADS.data[i].REMARK=="LIVE DATA" && LEADS.data[i].ACTIVE==true)
			{
				data.push(LEADS.data[i]);
			}
		}
		return data;
	},
	SCHD :()=>{
		let data=[];
	for (let i=0; i<SCHD_CALLS.data.length; i++)
	{	
		if(	(SCHD_CALLS.data[i].SCHEDULE_DATE)<=DATE_FORMAT.get_today_with_minutes())
		{
			data.push(SCHD_CALLS.data[i]);
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
		if(appsmith.store.button_Number == 0){
			if(appsmith.user.username == "sheela@lustralwater.com" || appsmith.user.username == "mvgopi@lustralwater.com"){
				L_UPDATE.run()
				Sheela_Logs.run()
			}else if(appsmith.user.username == "sindhuvaspar@gmail.com"){
				L_UPDATE.run()
				Sindhu_Logs.run()
			}else if(appsmith.user.username == "a.shet@lustralwater.com"){
				L_UPDATE.run()
				Aishwarya_Logs.run()
			}

		}else if(appsmith.store.button_Number == 1){
			R_UPDATE.run()
			L_LOGS.run()
		}
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
		if(Sindhu_DR.data[0].DATE == DATE_FORMAT.get_today()){
			showModal("Failure")
		}else{
			DR_INSERT_Sindhu.run()
			showModal("Success")
		}
	},
	DR_Sheela_Insert :()=>{
		if(Sheela_DR.data.length == 1){
			showModal("Failure")
		}
		else{
			DR_Insert_Sheela.run()
			showModal("Success")
		}
	},
	DR_Aishwarya_Insert: ()=>{
		if(Aishwarya_DR.data.length == 1){
			showModal("Failure")
		}
		else{
			DR_Insert_Aishwarya.run()
			showModal("Success")
		}
	},
	SELECT_TAB :()=>{
		if(Tabs1.selectedTab == "DAILY REPORT"){
			L_GET_LOGS.run()
			SindhuLogs.run()
			SheelaLogs.run()
			AishwaryaLogs.run()
			Sindhu_DR.run()
			Sheela_DR.run()
			Aishwarya_DR.run()
		} else if (Tabs1.selectedTab == "DAILY LEADS"){
			LEADS.run();
		}
	},
	IndexNum:()=>{
		const rowIndex = LEADS_NUMBER.return_Current_Lead().rowIndex;
		const updatedRowIndex = rowIndex+2
		return updatedRowIndex
	},
	LeadsUpdate :()=>{
		L_UPDATE.run()
		Sheela_Logs.run()
	},
	myFun2: async () => {

	}
}