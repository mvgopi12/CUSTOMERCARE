export default {
	onPageLoad: async () => {
		//use async-await or promises
		setTimeout(function(){
        setInterval(() => {JSObject2.SCHD() }, 10000, "noPageLoadRepeatTimer");
    }, 22000);
		return "success";
	},
	Schedduled: async () => {
		//use async-await or promises
		setTimeout(function(){
        setInterval(() => {SCHD_CALLS.run() }, 10000, "noPageLoadRepeatTimer");
    }, 22000);
		return "success";
	}
}