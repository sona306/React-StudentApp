import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changeData]=useState(
        [
            {"name":"sona","admno":101,"rollno":10},
            {"name":"shilpa","admno":1078,"rollno":18},
            {"name":"kavya","admno":1111,"rollno":12}
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
                                                <p className="card-text">{value.rollno}</p>
                                                <p className="card-text">{value.admno}</p>
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