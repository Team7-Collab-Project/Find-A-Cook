import React from "react";
import "./AdminCookDisplay.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { DataGrid } from "@material-ui/data-grid";

const AdminCookDisplay = () => {
    
    return(
    <>

<div className="container">
<main>
			{/* <h1>Users</h1> */}
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Registered</th>
						<th>Verified</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>John Doe</td>
						<td>Jan 1, 2023</td>
						<td>Yes</td>
					</tr>
					<tr>
						<td>Jane Smith</td>
						<td>Jan 2, 2023</td>
						<td>No</td>
					</tr>
					<tr>
						<td>Bob Johnson</td>
						<td>Jan 3, 2023</td>
						<td>Yes</td>
					</tr>
				</tbody>
			</table>
		</main>
        </div>
    </>
    )
   
}

export default AdminCookDisplay