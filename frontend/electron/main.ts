import { app, BrowserWindow } from "electron";
import path from "path";
function createWindow(){
 const win=new BrowserWindow({width:1280,height:800,minWidth:960,minHeight:640,backgroundColor:"#0B0F19",title:"Coretexis AI Desk",webPreferences:{preload:path.join(__dirname,"preload.js"),contextIsolation:true,nodeIntegration:false}});
 win.loadFile(path.join(__dirname,"../renderer/index.html"));
}
app.whenReady().then(createWindow);
app.on("window-all-closed",()=>{if(process.platform!=="darwin") app.quit();});