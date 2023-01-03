import { Outlet } from "react-router-dom";

const Main = ({ changeName }) => {

  return (
    <main>
      <Outlet />
    </main>
  )
}

export default Main;
