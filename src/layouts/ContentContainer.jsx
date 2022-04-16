import React from 'react'

const ContentContainer = (props) => {
  return (
 <div className={`main-content ${props.className ? props.className : ""}`}>
         <div
            className={`main-content__container ${
               props.wide ? "main-content__container--wide" : ""
            }`}>
            {props.children}
         </div>
      </div>  )
}

export default ContentContainer