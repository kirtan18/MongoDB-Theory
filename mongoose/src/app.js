const mongoose = require("mongoose");
const validator = require("validator");
// connection creation and a creayteion new db
mongoose.connect("mongodb://localhost:27017/mnpractice", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

// ? schema
// ? A Mongoose schema defines the structure of the document, default values , validators , etc./..
//? schema is use for set the structure of db

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim:true 
    },
    ctype:{
        type: String,
        required: true,
        lowercase: true,
        enum:["frontend" , "backend" ,"database"]
    },
    videos: {
        type: Number,
        validate(value){
            if(value < 0){
                throw new Error("Videos count should not be negetive");
            }
        }
    },
    author: String,
    email:{
        type : String,
        required:true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                 throw new Error("Email is invalid");
             }
        }
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

//? A mongose model is a wrapper on the mongoose schema.
//? A mongoose schema defines the structure of the document,default values , validators , etc ., whereas a mongoose model provides an interface to the database for creating,querying ,updating ,deleting records, etc..

//collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

// create document or insert
const creatDocument = async () => {

    try {
        // const jsplayList = new Playlist({
        //     name: " JavaScript",
        //     ctype: "Back End",
        //     videos: 150,
        //     author: "Kirtan Prajapati",
        //     active: true
        // })

        // const mongoplayList = new Playlist({
        //     name: "mongodb",
        //     ctype: "Database",
        //     videos: 60,
        //     author: "Kirtan Prajapati",
        //     active: true
        // })

        const mongooseplayList = new Playlist({
            name: " Email-set1",
            ctype: "database",
            videos: 5,
            author: "Kirtan Prajapati",
            email: "kirtan@gmail.com", 
            active: true
        })

        // const expressplayList = new Playlist({
        //     name: "express",
        //     ctype: "Datebase",
        //     videos: 80,
        //     author: "Kirtan Prajapati",
        //     active: true
        // })

        const result = await Playlist.insertMany([ mongooseplayList]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

creatDocument();

// for read the data
//! Comparision 
// const getDocument = async () => {
//     try {
//         const result = await Playlist
//             .find({ctype: {$in : ["Back End" , "Datebase"]}})
//             .select({name: 1})
//             // .limit(1);
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getDocument();

//! Logical
// const getDocument = async () => {
//     try {
//         const result = await Playlist
//             .find({$or :[ {ctype:"Back End"} , {author: "Kirtan Prajapati"}]})
//             .select({name: 1})
//             // .limit(1);
//         console.log(result);
//     } catch(err) {
//         console.log(err);
//     }
// }
// getDocument();

//! Count And Sorting
// const getDocument = async () => {
//     try {
//         const result = await Playlist
//             .find({$or :[{author: "Kirtan Prajapati"}]})
//             .select({name: 1})
//             //? sort use for asceding and des order
//             .sort({name : -1});
//             //?count the total collections
//             // .countDocuments()
//             // .limit(1);
//         console.log(result);
//     } catch(err) {
//         console.log(err);
//     }
// }
// getDocument();

//! Update the Document
// const updateDocument = async (_id) =>{
//       try{
           
//       const result = await Playlist.findByIdAndUpdate({_id},{$set : {
//           name:"MONGOOSE"
//       }},{
//         useFindAndModify : false
//       });
//       console.log(result);
//       }catch(err){
//           console.log(err);
//       }
// }

// updateDocument("60ad2937937f3405a002d2cc");

//! Delete Document 

// const deleteDocument = async (_id) =>{
//    try{
//         const result = await Playlist.findByIdAndDelete({_id});
        
//         console.log(result);
//    }catch(err){
//        console.log(err);
//    }
// }

// deleteDocument("60ad3775f47aaf9b7fb4a0e9");

