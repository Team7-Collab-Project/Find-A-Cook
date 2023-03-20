import React from 'react';
import CategoryDisplay from '../Menu_Test/CategoryDisplay'
import { deleteCategory } from "../../redux/actions/categoryActions";
import '../CSS/Test.css'

import { useSelector } from 'react-redux';

const OpenCategory = () => {

    const {categories} = useSelector(state => state.categories)
    console.log('cool', categories)

    return(
        <>

<table className='adminCategoryTable'>
      <thead>
        <tr>
          <th>Category</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {categories &&
          categories.map(category => (
            <CategoryDisplay key={category._id} category={category} />
          ))}
      </tbody>
    </table>


        </>
    );
}

export default OpenCategory