import { Route, Routes } from "react-router";
import { Layout } from "./../../App";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/catg:id" element={<Layout />} />
      <Route path="*" element={<Layout />} />
    </Routes>
  );

};

export default AppRouter;