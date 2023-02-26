"use client";
import {Component} from "react";
import Link from "next/link";

export class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <h1>Lemonade Game</h1>
                <Link href={"StartGame"}>Start Game</Link>
                <Link href={"About"}>About</Link>
            </nav>
        );
    };
}