import { Router } from "express";
import Clients from "../models/Clients"

const router = Router();

router.post("/creacliente", async (req, res) => {

    try {
        // validate fields
        if (!req.body.name) {
            return res.status(400).send({ message: "Name cannot be empty" });
        }  
        if (!req.body.last_name) {
            return res.status(400).send({ message: "Last_name cannot be empty" });
        }      
        if (!req.body.age) {
            return res.status(400).send({ message: "Age cannot be empty" });
        }   
        if (!req.body.birthday) {
            return res.status(400).send({ message: "Birthday cannot be empty" });
        }                        

        const newClient = new Clients({ name: req.body.name, last_name: req.body.last_name, age: req.body.age, birthday: req.body.birthday });
        await newClient.save();
        console.log(newClient);
        res.json("New Client created");

    } catch (error) {
        res.status(500).json({
          message: error.message || "Something went wrong",
        });
      }        
});

export default router;