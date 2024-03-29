import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Messages from "./Pages/Messages";
import Notfound from "./Pages/Notfound";
import Register from "./Pages/Register";
import Navigation from "./components/Navigation/Navigation";

const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    path="/"
                    element={
                        <>
                            <Navigation />
                            <Home />
                        </>
                    }
                ></Route>
                <Route
                    index
                    path="/chat"
                    element={
                        <>
                            <Navigation />
                            <Messages />
                        </>
                    }
                ></Route>

                <Route
                    path="*"
                    element={
                        <div className="flex flex-col items-center justify-center h-screen gap-4">
                            <Navigation />
                            <Notfound />
                        </div>
                    }
                ></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Pages;
