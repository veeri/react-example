import React, { Component }  from 'react';
import './containment.css'
function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children} {/*  Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”. */}
      </div>
    );
  }
  
 export function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }