const express = require("express");
const path = require("path");
const { rootRouter } = require("./src/routers/root.router");
const app = express();
const pubicPathDirectory = path.join(__dirname, "./public");

//setup graphql
const { graphqlHTTP } = require("express-graphql");
const { graphplSchema } = require("./src/graphql/schema");
const { graphqlResolvers } = require("./src/graphql/resolve");
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphplSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

app.use("", express.static(pubicPathDirectory));
//khi gõ bất cứ gì trên thanh url đều là phương thức get
//http://localhost:9000
//req là qúa trình gửi dữ liệu lên sv
//res là phản ứng từ sv cho client
app.use(express.json());

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log("Connect successed on port " + port);
});

app.use("/api/v1/", rootRouter);
