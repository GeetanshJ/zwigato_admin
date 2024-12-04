import React, { useEffect, useState } from 'react'
import './Orders.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';
const Orders = ({url}) => {

  const[orders,setOrders] = useState([]);

  const fetchOrders = async () =>{
    const response = axios.get(url+"/api/order/list");
    if(response.data.success){
      setOrders(response.data.data);
    }

    else{
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchOrders();
  },[])

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {
          orders.map((order,index) => {
            <div className="order-item" key={index}>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <div className="order-item-food">
                  {
                    order.items.map((item,index)=>{
                      if(index == order.items.length - 1){
                        return item.name + " x " + item.quantity;
                      }

                      else{
                        return item.name + " x " + item.quantity + ", "
                      }
                    })
                  }
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Orders