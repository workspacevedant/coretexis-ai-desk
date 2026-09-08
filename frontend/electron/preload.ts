import { contextBridge } from "electron";
contextBridge.exposeInMainWorld("coretexis",{version:"0.1.0",platform:process.platform});