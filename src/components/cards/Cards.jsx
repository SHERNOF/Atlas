import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import './cards.scss'

export default function Cards({list:  {rego, items}}) {
    return (
        <div className="cards">
            <div className="content">
                <h2 className="mySpan">{rego}</h2>
                    <div className="kits-content">Kit Sets</div>
                    <div className="myName">
                    {
                    items.map(item => (
                        <div key={item.id} >
                            <h4>{item.name}</h4>
                        </div>
                    ))
                    }
                    </div>
                    
                    <div className="myNameT">
                    {
                    items.map(item => (
                        <div key={item.id} >
                            <h4>{item.nameT}</h4>
                        </div>      
                    ))
                    }       
                    </div>

                
                    <div className="myNameE">
                    {
                    items.map(item => (
                        <div key={item.id} >
                            <h4>{item.nameE}</h4>
                        </div>
                    ))
                    }
                    </div>
            </div>
            <CustomButton></CustomButton>
        </div>
    )
}
