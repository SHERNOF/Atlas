import React from 'react'
import EquipmentList from '../../components/equipment list/EquipmentList'
import MapComponent from '../../components/map/MapComponent'
import './admin.scss'

export default function Admin(props) {
    return (
        <div className="admin">
            <MapComponent />  
            <EquipmentList lists={props.lists} />
        </div>
    )
}
