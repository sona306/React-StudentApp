import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changeData]=useState(
        [
               {
                "name":'shilpa',
                "rollNo":'1',
                "admNo":'11425',
                "college":'fisat',
                "parentname":'BinduRaj',
                "dob":'12',
                "email":'silpa@gmail.com',
                "password":'abc',
                "confirm":'abc'
                },
                {
                "name":'sona',
                "rollNo":'2',
                "admNo":'1976',
                "college":'fisat',
                "parentname":'Sabu',
                "dob":'30',
                "email":'sona@gmail.com',
                "password":'efg',
                "confirm":'efg'
                    }
        ]
    )
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <div className="row">
                            {data.map(
                                (value,index)=>
                                    {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div className="card">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_UoXwaGYHlqsTfmvIrH2bSyE2NpcA62_hw&s" height="250" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.name}</h5>
                                                <p className="card-text">{value.rollNo}</p>
                                                <p className="card-text">{value.admNo}</p>
                                                <p className="card-text">{value.college}</p>
                                                <p className="card-text">{value.parentname}</p>
                                                <p className="card-text">{value.dob}</p>
                                                <p className="card-text">{value.email}</p>
                                                <p className="card-text">{value.password}</p>
                                                <p className="card-text">{value.confirm}</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    }
                            )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll