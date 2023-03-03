"use client";
import {Component} from "react";
import Link from "next/link";
import styles from './NavigationBar.module.css';
interface NavigationBarProperties {
    title: String
    startGameText: String
    aboutText: String
    isLoggedIn: () => boolean
    setLoggedIn: (value: (((prevState: boolean) => boolean) | boolean)) => void

}
interface NavigationBarState{
    isLoggedIn: boolean
}


export class NavigationBar extends Component<NavigationBarProperties> {
    public props: NavigationBarProperties
    public state: NavigationBarState
    private timerID: any;

    constructor(props: NavigationBarProperties) {
        super(props);
        this.props = props;
        this.state = {isLoggedIn: props.isLoggedIn()};
    }

    login(){
        this.props.setLoggedIn(true);
    }
    logout(){
        this.props.setLoggedIn(false);
    }

    getButtonOnclickFunction(){
        return this.props.isLoggedIn() ? () => this.logout() : () => this.login();
    }
    tick(){
        this.render();
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const buttonText = this.props.isLoggedIn() ? "Logout" : "Login";
        return (
            <nav className="navbar navbar-expand-sm bg-secondary">
                <div className={"container"}>
                <h1 className={"navbar-brand"}>{this.props.title}</h1>
                <ul className={"navbar-nav px-2"}>
                    <li className={"nav-item px-2 pt-2"}>
                        <Link href={"StartGame"} passHref legacyBehavior>
                            <a className={this.props.isLoggedIn() ? "btn" : "btn disabled"}>{this.props.startGameText}</a>
                        </Link>
                    </li>
                    <li className={"nav-item px-2 pt-2"}>
                        <Link href={"About"} passHref legacyBehavior>
                            <a className={this.props.isLoggedIn() ? "btn" : "btn disabled"}>{this.props.aboutText}</a>
                        </Link>
                    </li>
                </ul>
                    <button className={"btn btn-primary " +styles.loginButton} onClick={this.getButtonOnclickFunction()}>{buttonText}</button>
                </div>
            </nav>
        );
    };
}