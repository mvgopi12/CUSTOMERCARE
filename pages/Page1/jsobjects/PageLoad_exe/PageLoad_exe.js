export default {
	onPageLoad: async () => {
		//use async-await or promises
		setTimeout(function(){
        setInterval(() => {JSObject2.SCHD() }, 10000, "noPageLoadRepeatTimer");
    }, 15000);
		return "success";
	}
}