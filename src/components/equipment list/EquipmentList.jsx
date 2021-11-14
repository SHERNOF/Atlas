import React from 'react'
import Cards from '../cards/Cards'
import './equipmentList.scss'

export default function EquipmentList(props) {
    return (
        <div className="equipment">
            <div className="equipment-list">
            {
                props.lists.map( list => (
                    <Cards list={list}/>
                ))
            }
            </div>
            
          
        </div>
    )
}
