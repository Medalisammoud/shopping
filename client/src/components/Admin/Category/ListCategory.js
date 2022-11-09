import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Category from "./Category";

const ListCategory = () => {
  const Categorys = useSelector((state) => state.categoryReducer.categorys);
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    setCategorys(Categorys);
  }, [Categorys]);
  return (
    <div
      className="tab-pane fade"
      id="Categorys"
      role="tabpanel"
      aria-labelledby="Categorys-tab"
    >
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="table-responsive">
              <table className="table no-wrap user-table mb-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium pl-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      Category
                    </th>
                    <th className="border-0 text-uppercase font-medium"></th>
                    <th className="border-0 text-uppercase font-medium">
                    </th>

                  </tr>
                </thead>
                {!categorys.length ? <p style={{ marginTop:'10%', fontSize:"30px" }}>Loading...</p> :
                categorys.map((category, i) => (
                  <Category key={category._id} category={category} i={i} />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCategory;
