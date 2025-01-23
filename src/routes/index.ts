import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`; 
const router = Router();

/**
 * 
 * index.ts items 
 * @returns 
 */
const cleanFileName = (fileName:string) => {
   const file = fileName.split('.').shift();
   return file; 
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = 
    if (){

    }
    
    return file; 
}); 

export { router }; 