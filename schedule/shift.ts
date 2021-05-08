const schedule = require('node-schedule');

//Schedule job
export const plan=(timer:number,rest: () => void)=>{
    schedule.scheduleJob(`*/${timer} * * * * *`, async function() {
      rest()
    });

}
