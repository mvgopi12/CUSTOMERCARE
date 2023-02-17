export default {
	myVar1: [],
	myVar2: {},
	return_Current_Lead:()=>
	{
		if(appsmith.store.button_Number==0)
			{
				return appsmith.store.card[appsmith.store.current_Live_card]
			}
		else if(appsmith.store.button_Number==1)
			{
				return appsmith.store.card[appsmith.store.current_Schd_card]
			}
		else if(appsmith.store.button_Number==2)
			{
				return appsmith.store.card[appsmith.store.current_Followups_card]
			}
		else if(appsmith.store.button_Number==3)
			{
				return appsmith.store.card[appsmith.store.current_Oldleads_card]
			}
		return appsmith.store.card[0]
	},
	next_Lead:()=>{
/*
		storeValue("current_lead_card",0) 
		storeValue("current_demo_card",0) 
		storeValue("current_call_back_card",0) 
		return
*/
		switch(appsmith.store.button_Number)
			{
				case 0:
					if(appsmith.store.current_Live_card>=appsmith.store.card.length-1)
						{
							LEADS.run();
							showAlert("Click LIVE DATA button to Confirm","success")
							return appsmith.store.current_Live_card
						}
					storeValue("current_Live_card",appsmith.store.current_Live_card+1)
					return appsmith.store.current_Live_card
					break;
				case 1:
						if(appsmith.store.current_Schd_card>=appsmith.store.card.length-1)
						{
							LEADS.run();
							showAlert("Click SCHEDULED CALLS button to Confirm","success")
							return appsmith.store.current_Schd_card
						}
					storeValue("current_Schd_card",appsmith.store.current_Schd_card+1)
					return appsmith.store.current_Schd_card
					break;
				case 2:
					if(appsmith.store.current_Followups_card>=appsmith.store.card.length-1)
						{
							LEADS.run();
							showAlert("Click FOLLOWUPS button to Confirm","success")
							return appsmith.store.current_Followups_card
						}
					storeValue("current_Followups_card",appsmith.store.current_Followups_card+1)
					return appsmith.store.current_Followups_card
					break;
				case 3:
					if(appsmith.store.current_Oldleads_card>=appsmith.store.card.length-1)
						{
							LEADS.run();
							showAlert("Click OLD LEADS button to confirm","success")
							return appsmith.store.current_Oldleads_card
						}
					storeValue("current_Oldleads_card",appsmith.store.current_Oldleads_card+1)
					return appsmith.store.current_Oldleads_card
					break;
				case 4:
					showAlert("Data updated","success")
					break
				default: 
					return Error()
			}
	
	},
	L_PAGE :()=>{
		storeValue("current_Live_card",0)
		storeValue("card",S_LEADS.Live_Leads())
		storeValue("current_Schd_card",0)
		storeValue("card",S_LEADS.Scheduled_Leads())
		storeValue("current_Followups_card",0)
		storeValue("card",S_LEADS.Followups_Leads())
		storeValue("current_Oldleads_card",0)
		storeValue("card",S_LEADS.Old_Leads())
	},
	C_SEARCH :()=>{
		let search = [];
		const sea= CALLER_LEADS.data.find(NUMBER => NUMBER.PHONE_NUMBER == C_Search.text);
		search.push(sea)
		if (search[0] != null){
			showModal("L_Details");
		}
		else{
			showAlert("Number Not Exist")
		}
		 return search;
	},
	myFun2: async () => {
		//use async-await or promises
	}
}