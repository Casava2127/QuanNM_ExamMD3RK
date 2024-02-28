// const express = require("express");
// const {
//   getAllArchitect,
//   getArchitectById,
//   createArchitect
// } = require("../controller/architect-controller");
// const architectRoute = express.Router();

// // get all architect
// architectRoute.get("/", (req, res) => {
//   const architects = getAllArchitect();
//   architects.then((data) => {
//     res.status(200).json(data);
//   });
// });

// // get by id
// architectRoute.get("/:id", (req, res) => {
//   const architect = getArchitectById(req.params.id);
//   architect.then((data) => {
//     console.log(data);
//     res.status(200).json(data);
//   });
// });

// architectRoute.post("/", (req, res) => {
//   const dataRequest = req.body;

//   const architect = createArchitect(dataRequest);

//   architect.then((response) => {
//     console.log(response);
//     res.status(200).json({ id: response.insertId, ...dataRequest });
//   });
// });

// module.exports = architectRoute;












// const express = require("express");
// const {
//   getAllArchitect,
//   getArchitectById,
//   createArchitect,
//   updateArchitectById,
//   deleteArchitectById
// } = require("../controller/architect-controller");
// const architectRoute = express.Router();

// // GET all architects
// architectRoute.get("/", async (req, res) => {
//   try {
//     const architects = await getAllArchitect();
//     res.status(200).json(architects);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // GET architect by ID
// architectRoute.get("/:id", async (req, res) => {
//   try {
//     const architect = await getArchitectById(req.params.id);
//     res.status(200).json(architect);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

// // POST 
// architectRoute.post("/", async (req, res) => {
//   const dataRequest = req.body;
//   try {
//     const architect = await createArchitect(dataRequest);
//     res.status(201).json({ id: architect.insertId, ...dataRequest });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // PUT (update) architect by ID
// architectRoute.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const dataRequest = req.body;
//   try {
//     await updateArchitectById(id, dataRequest);
//     res.status(200).json({ message: "Architect updated successfully" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // DELETE architect by ID
// architectRoute.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     await deleteArchitectById(id);
//     res.status(200).json({ message: "Architect deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// module.exports = architectRoute;
/////////////////////////////////////////////////
 // user.route.js
const express = require("express")
const { getAllUsers, createUser, deleteUserById, editUserById } = require("../controller/user.controller")
const userRouter = express.Router()

userRouter.get("/", async (req, res) => {
    const data = await getAllUsers()
    res.status(200).json(data)
    // if(data) {
    // }else{
    //     console.error(E);
    // }
})

userRouter.post("/", async (req, res) => {
    const data = createUser(req.body)
    console.log("ok");
    data.then((response) => {
        res.status(200).json("Thanh Cong")
    })
})
userRouter.put("/:id", async (req, res) => {
    console.log(req.body, "1");
    console.log(req.params.id);
    editUserById(req.params.id, req.body)
    res.status(200).json("success")
})
userRouter.delete("/:id", async (req, res) => {
    deleteUserById(req.params.id)
    res.status(200).json("success")
})

module.exports = userRouter 