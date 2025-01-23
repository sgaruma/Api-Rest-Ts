//routes manage with arrow function
import { Request, Router, Response } from "express"; 

const router = Router(); 
/*
*
 * http://localhost:3002/items [GET]
*/
router.get("/items", (req: Request, res:Response) => {
    res.send({ data: "MODELS_ARE_HERE" });
}); 

export { router };

