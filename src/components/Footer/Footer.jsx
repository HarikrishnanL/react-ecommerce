import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h2>Categories</h2>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h2>Links</h2>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h2>About</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam, minima doloremque illo natus expedita illum quo ipsum sequi vel explicabo,
                        laborum rerum eum ab provident voluptas, cumque quis impedit maiores!
                    </span>
                </div>
                <div className="item">
                    <h2>Contact</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam, minima doloremque illo natus expedita illum quo ipsum sequi vel explicabo,
                        laborum rerum eum ab provident voluptas, cumque quis impedit maiores!
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">HARISTORE</span>
                    <span className="copyright">
                        © Copyright 2023. All Rights Reserved
                    </span>

                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Footer;