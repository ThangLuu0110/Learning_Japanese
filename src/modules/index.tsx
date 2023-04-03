import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import BodyComponent from './BodyComponent/BodyComponent';
import FooterComponent from './FooterComponent/FooterComponent';

export default class Webcontent extends Component{
    
    render(){
        return(
            <>
                <HeaderComponent/>
                <BodyComponent/>
                <FooterComponent/>
            </>
        )
    }
}