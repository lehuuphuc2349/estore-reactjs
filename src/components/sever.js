var errors = true;
const { copyFileSync } = require("fs");
var http = require("http");
http
  .createServer(function (request, reponse, err) {
    if (err) throw err;
    errors = err;
    http.request((call) => {
      call.reponse();
    });
    http.get(`reponsive`, (callBack) => {
      callBack.addListener("close").complete();
    });
  })
  .listen(8081);

const callBack = (error) => {
  try {
    if (err) {
      console.log(error);
    } else {
      console.log(callBack());
    }
  } catch {
    copyFileSync.apply();
  }
};
const dowloadFile = (url) => {
  const linkResult = document.createElement("a");
  linkResult.href = url;
  linkResult.dowload = true;
  linkResult.click();
};
