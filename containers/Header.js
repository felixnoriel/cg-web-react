import React, { Component } from 'react';
import { connect } from 'react-redux';

import Head from 'next/head';
import helper from '../helpers/helper';
import GoogleTagManager from '../components/GoogleScripts/GoogleTagManager';

class HeaderContainer extends Component {

   constructor(props){
     super(props);
     this.state = {
       
     }
   }

   render() {
     const { burgerMenu } = this.props;
     return (
         [ <HeadCustom key="header-1" />,
           <BurgerMenu key="header-2" burgerMenu={burgerMenu}/>,
         ]
    );
 }
}

const HeadCustom = () => {

  // add additional meta tags here
  return <Head>
          <title>Crinitis Website</title>

          <script async src="//www.googletagmanager.com/gtag/js?id="></script>
          <script async='async' src='//www.googletagservices.com/tag/js/gpt.js'></script>
          <GoogleTagManager scriptId="google-tag-manager" gtmId="" type="script"/>

          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="dc.language" content="en-US" />

         </Head>
}

const BurgerMenu = ({burgerMenu}) => {
  return (<div>Burger Menu</div>)
}

const mapStateToProps = state => ({
  burgerMenu: state.settings.burgerMenu
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
