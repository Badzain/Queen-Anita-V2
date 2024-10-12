//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "badzain254@gmail.com";
global.location = "Isiolo, Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "oldie";
global.owner = process.env.OWNER_NUMBER || "Jehu";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "{"noiseKey":{"private":{"type":"Buffer","data":"gI6jNezWxAsVQ2UH7Tvi3Xn5DUR436vDuFgoIhWnx30="},"public":{"type":"Buffer","data":"39EEchGB2T63xgJmLODhUJg4zX/QyBViTdYZ2Cl8NRQ="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"+E7MMelW5VUQNyAHgosGUbroEGMiDopy2N0hCovmFGE="},"public":{"type":"Buffer","data":"+IOX1T4s/r6LaXLVggmamN60mcvRX2KrFD2PL1VvUWw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"OAzaVoPKlYEnBUrOd/BsZORWRD6+yWRh+PM3xVT8O2k="},"public":{"type":"Buffer","data":"pAMbBzf+gXtFT8ki7U9tLCjPVVQfFKm/FFmuO81p6VE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"IPMlEErrjYCFI6NvcRr+TOsoycaA0jJVOY8F50pIBWg="},"public":{"type":"Buffer","data":"n3LX3ZsWaAi4p10ZzGs3ONX232IdErU2fha4B3ekagI="}},"signature":{"type":"Buffer","data":"sVhHL2Qvz6PkoFsc/O1ZQPm2bo/X8x4ISqNlQmEfTAJRCnGb1/ufL+11kmXkrY9vzOTHRCCsuBzqMFycAUUSBw=="},"keyId":1},"registrationId":61,"advSecretKey":"7hMaVlVcx6EWrPN/Xqkre9tdNeK20A12l8v7DZOahAg=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"5nKpYwCpSCOUL4PrrCETAw","phoneId":"f1411a23-0f26-425f-a38c-915f202c3451","identityId":{"type":"Buffer","data":"/wSv+1ny+nvAz78SMjsJ5XkI/js="},"registered":true,"backupToken":{"type":"Buffer","data":"457bsSYaACUGoUWvtUVYEH5jrak="},"registration":{},"pairingCode":"LSP8NXKE","me":{"id":"254746255620:35@s.whatsapp.net"},"account":{"details":"CKXbnbkCEODaqLgGGAMgACgA","accountSignatureKey":"RvOd38xGzIiOSwdjEEKZyPL3Nes8z6sMIivtU5EauQs=","accountSignature":"jZRnFJzfB5KK+luf3ZTupSEX3Zi/9dnsx7Z2MD2znk22lG3n8dFL0EGLypLQlolI+xdZjUqsLzv2AYxQcQCcCQ==","deviceSignature":"xq1yT57ISW42GJMi5v/K4QcdxsDameW83z08YYKXm835+eaWemwDa3rFSfHmJnHf5FLwkdJofjhfDhGEDoXUAQ=="},"signalIdentities":[{"identifier":{"name":"254746255620:35@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUbznd/MRsyIjksHYxBCmcjy9zXrPM+rDCIr7VORGrkL"}}],"platform":"android","lastAccountSyncTimestamp":1728720237}
"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`jehu™`",
  author: process.env.PACK_AUTHER || "jehu",
  packname: process.env.PACK_NAME || "J e H U",
  botname: process.env.BOT_NAME || "J-e-h-u V2",
  ownername: process.env.OWNER_NAME || "jehu",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
