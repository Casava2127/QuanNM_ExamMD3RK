
const express = require("express");
const app = express();
const libraryRoutes = require("./routes/li1.route");
const cors = require('cors');

const corsOptions = {
  origin: '*', // Đặt nguồn cho CORS (cổng mà máy chủ React chạy)
  methods: 'GET,POST,PUT,DELETE', // Phương thức được phép
  optionsSuccessStatus: 200 // Trạng thái thành công cho yêu cầu OPTIONS
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/v1", libraryRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port  http://localhost:${PORT}`);
});
