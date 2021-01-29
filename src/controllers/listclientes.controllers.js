import Clients from "../models/Clients";

export const findAllClients = async(req,res)=>{
    const clients = await Clients.find()
    res.json(clients);
}

export const deleteClient = async (req, res) => {
    const id = req.params.id;
  
    try {
      const data = await Clients.findByIdAndDelete(id);
      if (!data) {
        res.status(404).json({
          message: `Cannot delete Client with id=${id}. Maybe the task does not exists`,
        });
      } else {
        res.json({ message: "Client was deleted successfully" });
      }
    } catch (error) {
      res.status(500).json({
        message: `Could not delete Client with id = ${id}`,
      });
    }
  };
