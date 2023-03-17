import { useDispatch } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa"
import { deleteCategory } from "../../redux/actions/categoryActions";

const CategoryDisplay = ({ category }) => {

    const dispatch = useDispatch();
  
  
    return (
      <>

<tr>
      <td>{category.category_name}</td>
      <td><FaEdit /></td>
      <td><a className="adminCatDelete" onClick={() => dispatch(deleteCategory(category._id))}><FaTrash /></a></td>
      {/* <td>Jan 1, 2023</td>
      <td>Yes</td> */}
    </tr>

      </>
    );
  };
  
  export default CategoryDisplay;