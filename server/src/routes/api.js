const express=require('express');
const ProfileController=require("../controllers/ProfileController")
const AppUserController=require("../controllers/AppUserController")
const ToDoListController=require("../controllers/ToDoListController")
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const router=express.Router();
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads");
    },
    filename: (req, file, callback) => {
       callback(null, file.originalname)
    }
});
const upload= multer({storage: storage});

router.post("/CreateProfile", ProfileController.CreateProfile)

router.post("/UserLogin",ProfileController.UserLogin)
router.post("/AppUserLogin",AppUserController.AppUserLogin)
router.get("/AppUserList",AppUserController.AppUserList)
router.post("/CreateAppUser", AuthVerifyMiddleware, upload.single("photo"), AppUserController.CreateAppUser);
router.get("/SelectProfile",AuthVerifyMiddleware,ProfileController.SelectProfile);
router.get("/SelectAppUser",AppUserController.SelectAppUser);

router.post("/UpdateProfile",AuthVerifyMiddleware,ProfileController.UpdateProfile);
router.post("/CreateToDo",AuthVerifyMiddleware,ToDoListController.CreateToDo);
router.get("/SelectToDo",AuthVerifyMiddleware,ToDoListController.SelectToDo);
router.post("/UpdateToDo",AuthVerifyMiddleware,ToDoListController.UpdateToDo);
router.post("/UpdateStatusToDo",AuthVerifyMiddleware,ToDoListController.UpdateStatusToDo);
router.post("/RemoveToDo",AuthVerifyMiddleware,ToDoListController.RemoveToDo);
router.post("/SelectToDoByStatus",AuthVerifyMiddleware,ToDoListController.SelectToDoByStatus);
router.post("/SelectToDoByDate",AuthVerifyMiddleware,ToDoListController.SelectToDoByDate);



module.exports=router;