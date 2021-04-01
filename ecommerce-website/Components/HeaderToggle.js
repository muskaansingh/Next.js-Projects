import React from 'react';
import $ from "jquery";
import Head from 'next/head';
import HeaderStyles from '../styles/Header.module.css';

const HeaderToggle = () => {
    return (
        <div>
            <Head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"> </script>       
                <script>
                    $(document).ready(function(){
                        $(".menuBtn").click(function(){
                            $(".navRight").toggleClass("main");
                        })
                    });
                </script>
            </Head>
        </div>
    )
}

export default HeaderToggle;


