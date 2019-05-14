function timefunction() {

  let giventime = new Date("2019-05-3");
  let todays = new Date();
  
  if (parseInt(todays.getTime() - giventime.getTime()) > 0) {
  
      if (todays.getDate() - giventime.getDate() > 7) {
          console.log("01 05 2018");
      }
  
  
      else if (parseInt(todays.getDate() - giventime.getDate()) > 3 && parseInt(todays.getDate() - giventime.getDate()) < 7) {
          console.log("Bu hefte");
      }
  
      else if (24 < parse.int(todays.getHours() - giventime.getHours()) && parse.int(todays.getHours() - giventime.getHours())) {
          console.log( parse.int(todays.getHours() - giventime.getHours()) + "- saat öncə");
      }
  
      else if (0 < parseInt(todays.getMinutes() - giventime.getMinutes()) && parseInt(todays.getMinutes() - giventime.getMinutes()) < 60) {
          console.log(parseInt(todays.getMinutes() - giventime.getMinutes()) + "- deqiqe once ");
      }
  }
  else {
      console.log("Zehmet olmasa Tarixi duzgun secin")
  }
  
  }
  
  
  timefunction();