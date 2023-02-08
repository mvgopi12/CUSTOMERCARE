export default {
	table_variables: [],
	/*
	authentication: () => {
		if(appsmith.URL.queryParams.access!="CUSTOMER_CARE")
			{
				navigateTo('ERROR_PAGE',{})
			}
	},
	*/
	get_today: () => {
		return moment().format("DD/MM/YYYY")
	},
	get_today_with_minutes: () =>{ //2022-08-30 11:15
		return moment().format("YYYY/MM/DDTHH:mm:ss");
	},
	get_time:() => {
		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		return time;
	},
	to_date:(dateString)=>{
		let date=moment(dateString).format("YYYY-MM-DD")
		return date;
	},
	until_end_of_month:()=>
	{
		let dateToday = new Date();
		let lastDayOfMonth = new Date(dateToday.getFullYear(), dateToday.getMonth()+1, 0).getDate();
		return (lastDayOfMonth - dateToday.getDate());
	},
	time:()=>{	
		let currentTime = new Date().getTime();
		let updatedTIme = new Date(currentTime + 2 * 60 * 60 * 1000).toLocaleTimeString();
		return new Date().toJSON().slice(0, 10) +" "+updatedTIme;
	},
	L_MONTH_FIRSTDAY :()=>{
		var date = new Date();
		var firstDateOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1).toDateString();
		let first = moment(firstDateOfCurrentMonth).format("DD/MM/YYYY")
		return first;
	},
	L_MONTH_LASTDAY :()=>{
		var date = new Date();
		var endDateOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).toDateString();
		let last = moment(endDateOfCurrentMonth).format("DD/MM/YYYY")
		return last;
	},

	SECOND_MONTH :()=>{
		var date = new Date();
		date.setDate(date.getDate() + 30);
		let second = moment(date).format("DD/MM/YYYY");
		return second;
	},
	THIRD_MONTH :()=>{
		var date = new Date();
		date.setDate(date.getDate() + 60);
		let second = moment(date).format("DD/MM/YYYY");
		return second;
	},
	FOURTH_MONTH :()=>{
		var date = new Date();
		date.setDate(date.getDate() + 90);
		let second = moment(date).format("DD/MM/YYYY");
		return second;
	},
	FIFTH_MONTH :()=>{
		var date = new Date();
		date.setDate(date.getDate() + 120);
		let second = moment(date).format("DD/MM/YYYY");
		return second;
	},
	SIXTH_MONTH :()=>{
		var date = new Date();
		date.setDate(date.getDate() + 150);
		let second = moment(date).format("DD/MM/YYYY");
		return second;
	},
	SEVENTH_MONTH :()=>{
		var date = new Date();
		date.setDate(date.getDate() + 180);
		let second = moment(date).format("DD/MM/YYYY");
		return second;
	},
	EIGHT_MONTH :()=>{
		var date = new Date();
		date.setDate(date.getDate() + 210);
		let second = moment(date).format("DD/MM/YYYY");
		return second;
	},
	NINETH_MONTH :()=>{
		var date = new Date();
		date.setDate(date.getDate() + 242);
		let second = moment(date).format("DD/MM/YYYY");
		return second;
	},

	ONE_DAY_BEFORE :()=>{
		let date = new Date();
		var yesterday = new Date(date.getTime());
		let getdate = moment(yesterday.setDate(date.getDate() + 1)).format("DD/MM/YYYY");
		return getdate;
	},
	Previous_Month :()=>{
		var date=new Date(); // current date
		const lastDayPrevMonth = new Date(date.getFullYear(), date.getMonth()+1, 1);
		return moment(lastDayPrevMonth).format("DD/MM/YYYY");
		
	},
	ti:()=>{
		let t = "27/12/2022 16:57:22"
		let date = new Date(t).getTime();
		return date;
	},
	myFun2: async () => {
		//use async-await or promises
	}
}