export default {
	myVar1: [],
	myVar2: {},
	Insert_Details : ()=>{
		if(E_Type.selectedOptionValue == "2 Months"){
			A_EMI_CUST.run()
		}
		else if(E_Type.selectedOptionValue == "3 Months"){
			A_TH_CUST.run()
		}
		else if(E_Type.selectedOptionValue == "8 Months"){
			A_EIGHT_CUST.run()
		}
	},
	TWO_EMI :()=>{
		let data = [];
		for(let i=0;i<EMI_TM.data.length;i++){
			if(EMI_TM.data[i].SEC_EMI_DATE == DATE_FORMAT.get_today() && EMI_TM.data[i].CALLER == appsmith.user.username){
				data.push(EMI_TM.data[i])
			}
		}
		return data;
	},
	THREE_EMI :()=>{
		let data=[];
		for(let i=0;i<EMI_THREEM.data.length;i++){
			if(EMI_THREEM.data[i].SEC_EMI_DATE == DATE_FORMAT.get_today() && EMI_THREEM.data[i].SEC_EMI_STATUS == "UNPAID" && EMI_EIGHT.data[i].CALLER == appsmith.user.username || EMI_THREEM.data[i].THIRD_EMI_DATE == DATE_FORMAT.get_today() && EMI_THREEM.data[i].THIRD_EMI_STATUS == "UNPAID" && EMI_THREEM.data[i].CALLER == appsmith.user.username){
				data.push(EMI_THREEM.data[i])
			}
		}
		return data
	},
	EIGHT_EMI :()=>{
		let data = [];
		for(let i=0;i<EMI_EIGHT.data.length;i++){
			if(EMI_EIGHT.data[i].SEC_EMI_DATE == DATE_FORMAT.get_today() && EMI_EIGHT.data[i].SEC_EMI_STATUS == "UNPAID" && EMI_EIGHT.data[i].CALLER == appsmith.user.username || EMI_EIGHT.data[i].THIRD_EMI_DATE == DATE_FORMAT.get_today() && EMI_EIGHT.data[i].THIRD_EMI_STATUS == "UNPAID" &&  EMI_EIGHT.data[i].CALLER == appsmith.user.username || EMI_EIGHT.data[i].FOUR_EMI_DATE == DATE_FORMAT.get_today() && EMI_EIGHT.data[i].FOUR_EMI_STATUS == "UNPAID" &&EMI_EIGHT.data[i].CALLER == appsmith.user.username || EMI_EIGHT.data[i].FIFTH_EMI_DATE == DATE_FORMAT.get_today() && EMI_EIGHT.data[i].FIFTH_EMI_STATUS == "UNPAID" && EMI_EIGHT.data[i].CALLER == appsmith.user.username ||EMI_EIGHT.data[i].SIXTH_EMI_DATE == DATE_FORMAT.get_today() && EMI_EIGHT.data[i].SIXTH_EMI_STATUS == "UNPAID" && EMI_EIGHT.data[i].CALLER == appsmith.user.username || EMI_EIGHT.data[i].SEVENTH_EMI_DATE == DATE_FORMAT.get_today() && EMI_EIGHT.data[i].SEVENTH_EMI_STATUS == "UNPAID" && EMI_EIGHT.data[i].CALLER == appsmith.user.username ||EMI_EIGHT.data[i].EIGHTH_EMI_DATE == DATE_FORMAT.get_today() && EMI_EIGHT.data[i].EIGHTH_EMI_STATUS == "UNPAID" && EMI_EIGHT.data[i].CALLER == appsmith.user.username || EMI_EIGHT.data[i].NINEGTH_EMI_DATE == DATE_FORMAT.get_today() && EMI_EIGHT.data[i].NINETH_EMI_STATUS == "UNPAID" && EMI_EIGHT.data[i].CALLER == appsmith.user.username){
				data.push(EMI_EIGHT.data[i])
			}
		}
		return data
		},
			TWO_EMI_LATE :()=>{
				let data=[];
				for(let i=0;i<EMI_TM.data.length;i++){
					if(EMI_TM.data[i].SEC_EMI_DATE < DATE_FORMAT.ONE_DAY_BEFORE()){
						data.push(EMI_TM.data[i])
					}
				}
				return data;
			},
				THREE_EMI_LATE :()=>{
					let data=[];
					for(let i=0;i<EMI_THREEM.data.length;i++){
						if(EMI_THREEM.data[i].SEC_EMI_DATE >= DATE_FORMAT.get_today() || EMI_THREEM.data[i].THIRD_EMI_DATE >= DATE_FORMAT.get_today()){
							data.push(EMI_THREEM.data[i])
						}
					}
					return data
				},
					myFun2: async () => {
						//use async-await or promises
					}
	}