var axios = require("axios").default;

var options = {
  method: "POST",
  url: "https://api.mtn.com/v2/messages/sms/outbound",
  headers: { "Content-Type": "application/json", Authorization: "" },
  data: {
    senderAddress: "+2330546249862",
    receiverAddress: ["+233020784008"],
    message: "some awesome message",
    clientCorrelator: "string",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
