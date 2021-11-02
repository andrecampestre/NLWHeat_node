import { serverHttp } from "./app";

const PORT = process.env.PORT || 4000;

serverHttp.listen(PORT, () =>
  console.log(`:rocket Server is running on port: ` + PORT)
);