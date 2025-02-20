const mongoose = require('mongoose');

const coachInfoSchema = new mongoose.Schema({
    coachName: {
        type: String,
        required: true
    },
    specialization: {
        type: String, // ref with specialization schema -> two id and name -> id 
        enum: ["health-fitness", "chronic-diseases", "sleep-wellness", "holistic-wellness", "stem-skills", "parenting", "worklife-balance", "immunity-coach"],
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        maxlength: 15,
        required: true,
    },
    profilePhoto: {
        type: String,
        required: true
    },
    experienceYear: {
        type: Number,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    sessionTime:{
        type:Number,
        required:true,
        default:60
    },
    pricePerSession: {
        type: Number,
        required: true
    },
    languages: {
        type: [String],
        required: true
    },
    country: {
        type: String,
        required: true,
    },
    countryCode: {
        type: String,
        maxlength: 4,
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false,
    },
    currency: {
	    type: String,
	    default: 'Inr'
    },
}, { timestamps: true });

const CoachInfoModel = mongoose.model('coachinfo', coachInfoSchema);

module.exports = CoachInfoModel;
