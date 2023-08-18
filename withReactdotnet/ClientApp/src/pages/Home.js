import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, Redirect, useHistory, useNavigate } from "react-router-dom";


const Home = () => {
    const {user} = useAuth();
    const navigate = useNavigate();

    const [audit, setAudit] = useState([]);
    useEffect(() => {
        /* if(!user) {
            navigate("/auth");
        }else {
        fetchAudit();
        } */
        fetchAudit();
    }, [])

    const fetchAudit = async () => {
        await axios.get("api/audit/all")
        .then((res) => {
            console.log('res', res.data)
            setAudit([...res.data]);
        }).catch(err => {
            console.err('err', err);
        });
    }

    return (
        <div>
        <div>welcome</div>
        <div onClick={() => {
            //logging out
        }}>log out</div>
        <div id="data" className="data-container">
                <div className="table-container">
                    <div className="table-wrapper">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="table-header">Id</th>
                                    <th className="table-header">Date</th>
                                    <th className="table-header">UserName</th>
                                    <th className="table-header">AccountType</th>
                                    <th className="table-header">Group</th>
                                    <th className="table-header">SiteMapping</th>
                                    <th className="table-header">ActionType</th>
                                    <th className="table-header">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            {audit && audit?.map((item, index) => {
                                return <tr key={index+item.id}>
                                    <td className="border border-gray-300 px-4 py-2">{item?.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.date}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.userName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.accountType}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.group}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.siteMapping}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.actionType}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.description}</td>
                                </tr>
                            })} 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
    </div>
    );
}

export default Home;