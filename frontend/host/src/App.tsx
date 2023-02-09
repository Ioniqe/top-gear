import * as React from 'react';
import * as ReactDOM from 'react-dom';
// @ts-ignore
import {TopGear} from "topgear/TopGear";
// @ts-ignore
import {Cars} from "cars/Cars";
import "./index.css";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import AuthProvider from "./containers/AuthProvider";
import {Box} from "@mui/material";

const App = () => (
    <Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'}>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path={'/'} element={<Navigate to={"/login"} replace/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/signup'} element={<Signup/>}/>

                    <Route
                        path={'/top-gear'}
                        element={
                            <ProtectedRoute>
                                <TopGear/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={'/cars'}
                        element={
                            <ProtectedRoute>
                                <Cars/>
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </Box>
);
ReactDOM.render(<App/>, document.getElementById("app"));
