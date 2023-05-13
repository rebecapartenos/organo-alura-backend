import Colaborator from "../models/Colaborator";

class ColaboratorController{

    insertColaborator = async (req, res) => {
        const {name, office, team } = req.body;
        if(!name || !office || !team){
            return res.status(400).json({message: "Please fill all fields"})
        }
        try {
            const newColaborator = new Colaborator({
                name,
                office,
                team
            });
            await newColaborator.save();
            res.status(201).json({message: "Colaborator created successfully"});
        }
        catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    getColaboratorsByTeam = async (req, res) => {
        const {team} = req.body;
        if(!team){
            return res.status(400).json({message: "Please fill team field"})
        }
        const teams = await Colaborator.find().distinct('team');
        if(!teams.includes(team)){
            return res.status(400).json({message: "Team not found"})
        }

        try {
            const colaborators = await Colaborator.find({team: team});
            res.status(200).json(colaborators);
        }
        catch (error) {
            res.status(500).json({message: error.message});
        }

    }

    getTeams = async (req, res) => {
        try {
            const teams = await Colaborator.find().distinct('team');
            res.status(200).json(teams);
        }
        catch (error) {
            res.status(500).json({message: error.message});
        }
    }


}

export default new ColaboratorController;