//agarda telegram bot ishlamay qolsa telegram_bot_id yokida chat_id da xatolik bo'layotgan bo'ladi yokida telegram botni yaratgan account o'chib ketgan bo'ladi account o'chsa telegram bot ham o'chadi uni to'gilash uchun boshqa bot yasash kerak  buni qanday qilishni bilmasangiz youtube platformasidan ushbu link orqali ko'rsangiz ham bo'ladi 👉 https://www.youtube.com/watch?v=zn5TF8kGXlw 

var telegram_bot_id = "5716560224:AAHMsXXwz_LRSMAd5tHUtNyLpUnjtRbQGUs"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing

var chat_id = -1001834505468;
var u_name, phone, email, message;
var ready = function () {
  u_name = document.getElementById("name").value;
  phone = document.getElementById("phone").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
  message =
    "Name: " +
    u_name +
    "\nPhone: " +
    phone +
    "\nEmail: " +
    email +
    "\nComment: " +
    message;
};
var sendtelegram = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  return false;
};
