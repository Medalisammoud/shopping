import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Order from './Order'

const ListOrder = () => {
    const orders = useSelector(state => state.orderReducer.orders)
    const [ordersData, setOrdersData] = useState([])

    useEffect(() => {
      setOrdersData(orders)
    }, [orders])
    return (
        <div
        className="tab-pane fade"
        id="Order"
        role="tabpanel"
        aria-labelledby="Order-tab"
      >
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{marginRight:"-100px"}}>
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0" >
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
                        <div style={{width:"100px"}}>User Name</div>
                      </th>
                      <th className="border-0 text-uppercase font-medium">Product Name</th>
                      <th className="border-0 text-uppercase font-medium">Price Total</th>
                      <th className="border-0 text-uppercase font-medium">Date</th>
                      <th className="border-0 text-uppercase font-medium">Livrer</th>
                      <th className="border-0 text-uppercase font-medium">Cancel</th>
                      <th className="border-0 text-uppercase font-medium"></th>
                    </tr>
                  </thead>
                   {!ordersData.length ? <p style={{ marginTop:'10%', fontSize:"30px" }}>Loading...</p> :
                   ordersData.map((order, i) => (
                    <Order key={order._id} order={order} i={i} />
                  ))} 
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ListOrder
