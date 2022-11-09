import React from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../../js/Action/actionCategory";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";

const Category = ({category,i}) => {
    const dispatch = useDispatch()
  return (
    <tbody>
    <tr>
      <td className="pl-4">{i+1}</td>
      <td>
        <h5 className="font-medium mb-0">{category.categoryName}</h5>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          onClick={()=>dispatch(deleteCategory(category._id))}
        >
          <i className="fa fa-trash"></i>{" "}
        </button>
       <EditCategory category={category} />
       <AddCategory />
      </td>
    </tr>
    </tbody>
  );
};

export default Category;
