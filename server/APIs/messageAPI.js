const exp = require('express');
const expressAsyncHandler = require('express-async-handler');
const messageApp = exp.Router();
const Message = require('../models/MessageModel');
const { uploadMessageImage } = require('../middleware/uploadMiddleware');
const path = require('path');
const fs = require('fs');

// Create uploads directory for message images if it doesn't exist
const messageUploadsDir = path.join(__dirname, '../uploads/messages');
if (!fs.existsSync(messageUploadsDir)) {
    fs.mkdirSync(messageUploadsDir, { recursive: true });
}

// Get all messages
messageApp.get('/all', expressAsyncHandler(async (req, res) => {
    try {
        const messages = await Message.find({ room: 'community' })
            .sort({ createdAt: 1 })
            .limit(100);
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}));

// Upload image for message
messageApp.post('/upload-image', uploadMessageImage, expressAsyncHandler(async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No image uploaded" });
        }

        // Create the URL for the uploaded file
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/messages/${req.file.filename}`;

        res.status(200).json({
            message: "Image uploaded successfully",
            imageUrl: imageUrl
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}));

// Create a new message
messageApp.post('/create', expressAsyncHandler(async (req, res) => {
    try {
        const { content, sender, senderModel, senderName, senderRollNumber, senderProfilePhoto, isAdmin, image } = req.body;

        const newMessage = new Message({
            content,
            sender,
            senderModel,
            senderName,
            senderRollNumber,
            senderProfilePhoto,
            isAdmin,
            image,
            room: 'community'
        });

        await newMessage.save();

        res.status(201).json({
            message: "Message created successfully",
            newMessage
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}));

module.exports = messageApp;
