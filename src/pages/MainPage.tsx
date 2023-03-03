"use client";
import {NavigationBar} from "@/pages/NavigationBar";
import {useState} from "react";

export function MainPage() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const test = 10 > 6 ? 10: 3;
    return (
        <>
            <NavigationBar isLoggedIn={() => isLoggedIn} setLoggedIn={setLoggedIn} title={"Lemonade Game"} startGameText={"Start Game"} aboutText={"About"}></NavigationBar>
            {isLoggedIn ? "Welcome!": "You have to Login"}
        </>
    );
}