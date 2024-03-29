const BirthdayGift = require('../models/birthdayGiftModel');

exports.insert = async (req, res) => {
    try {
        // Créer une nouvelle instance de BirthdayGift avec les données reçues dans le corps de la requête
        const newBirthdayGift = new BirthdayGift(req.body);

        // Enregistrer le nouvel anniversaire dans la base de données
        const savedBirthdayGift = await newBirthdayGift.save();

        // Répondre avec le document inséré en excluant les champs _id et __v
        res.status(201).json({
            id: savedBirthdayGift.id,
            name: savedBirthdayGift.name,
            description: savedBirthdayGift.description,
            link: savedBirthdayGift.link
        });
    } catch (error) {
        // En cas d'erreur, répondre avec un code d'erreur et un message d'erreur
        res.status(500).json({ error: error.message });
    }
};

// Définition de la méthode index dans birthdayGiftControllers
exports.index = async (req, res) => {
    try {
        // Récupérer tous les documents BirthdayGift depuis la base de données
        const birthdayGifts = await BirthdayGift.find({}, { _id: 0, __v: 0 });

        // Répondre avec les données récupérées en excluant les champs _id et __v
        res.json(birthdayGifts);
    } catch (error) {
        // En cas d'erreur, répondre avec un code d'erreur et un message d'erreur
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        // Récupérer l'ID de l'anniversaire à mettre à jour depuis les paramètres de la requête
        const { id } = req.params;

        // Mettre à jour l'anniversaire dans la base de données en fonction de son ID
        const updatedBirthdayGift = await BirthdayGift.findOneAndUpdate({ id }, req.body, { new: true });

        // Répondre avec les données mises à jour en excluant les champs _id et __v
        res.json({
            id: updatedBirthdayGift.id,
            name: updatedBirthdayGift.name,
            description: updatedBirthdayGift.description,
            link: updatedBirthdayGift.link
        });
    } catch (error) {
        // En cas d'erreur, répondre avec un code d'erreur et un message d'erreur
        res.status(500).json({ error: error.message });
    }
};


exports.delete = async (req, res) => {
    try {
        // Récupérer l'ID de l'anniversaire à supprimer depuis les paramètres de la requête
        const { id } = req.params;

        // Supprimer l'anniversaire de la base de données en fonction de son ID
        await BirthdayGift.deleteOne({ id });

        // Répondre avec un message de succès
        res.json({ message: 'Birthday gift deleted successfully' });
    } catch (error) {
        // En cas d'erreur, répondre avec un code d'erreur et un message d'erreur
        res.status(500).json({ error: error.message });
    }
};