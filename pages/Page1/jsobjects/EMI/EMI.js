export default {
	myVar1: [],
	myVar2: {},
	Insert_Details : ()=>{
		if(E_Type.selectedOptionValue == "2 Months"){
			A_EMI_CUST.run()
		}
		else if(E_Type.selectedOptionValue == "3 Months"){
			A_EMI_CUST.run()
		}
		else if(E_Type.selectedOptionValue == "8 Months"){
			A_EMI_CUST.run()
		}
	},
	TWO_EMI :()=>{
		let data = [];
		for(let i=0;i<EMI_TM.data.length;i++){
			if(EMI_TM.data[i].SEC_EMI_DATE == DATE_FORMAT.get_today()){
				data.push(EMI_TM.data[i])
			}
		}
		return data;
	},
	THREE_EMI :()=>{
		let data=[];
		for(let i=0;i<EMI_THREEM.data.length;i++){
			if(EMI_THREEM.data[i].SEC_EMI_DATE == DATE_FORMAT.get_today() || EMI_THREEM.data[i].THIRD_EMI_DATE == DATE_FORMAT.get_today()){
				data.push(EMI_THREEM.data[i])
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