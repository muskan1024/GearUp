import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const AddProd = () => {

  function showAlert1() {
    var myText1 = "Product added succesfully";
                        alert (myText1);
  }

  const history = useNavigate();
  const handleProduct = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const prodData = {
      prodName: data.get("prodName"),
      category: data.get("category"),
      price: data.get("price"),
      description: data.get("description"),
      manufacturer: data.get("manufacturer"),
      availableItems: data.get("availableItems"),
      imageURL: data.get("imageURL"),
    };

    try {
      const response = await axios.post(
        "http://localhost:3002/api/v1/seller/manageproducts/addproducts",
        prodData,
      );

      if (response.status === 200) {
        history("#");
        showAlert1();
        window.location.reload();
        console.log("Product added successfully");
      } else {
        console.log("Failed to add product");
        console.log(response)
      }
    } catch (error) {
      console.error("An error occurred while adding products:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleProduct}
        noValidate
        className="w-full h-screen flex item-start justify-center mb-8"
      >
        <div className="w-[75%] font-russo p-5 grid gap-5 bg-gray-100 text-[#F50500] m-5">
            <h1 className="text-3xl text-center">Enter Details of Your Product!</h1>
          <div className="grid">
            <label>Product Name</label>
            <input type="text" name="prodName" id="" className="shadow-md p-2 rounded-xl" placeholder="Enter Product Name"/>
          </div>
          <div className="grid">
            <label>Category</label>
            <input type="text" name="category" id="" className="shadow-md p-2 rounded-xl" placeholder="Enter Product Category"/>
          </div>
          <div className="grid">
            <label>Price</label>
            <input type="text" name="price" id="" className="shadow-md p-2 rounded-xl" placeholder="Enter Product Price"/>
          </div>
          <div className="grid">
            <label>Description</label>
            <input type="text" name="description" id="" className="shadow-md p-2 rounded-xl" placeholder="Enter Product Description"/>
          </div>
          <div className="grid">
            <label>Manufacturer</label>
            <input type="text" name="manufacturer" id="" className="shadow-md p-2 rounded-xl" placeholder="Enter Product Manufacturer"/>
          </div>
          <div className="grid">
            <label>Available Items</label>
            <input type="text" name="availableItems" id="" className="shadow-md p-2 rounded-xl" placeholder="Enter Number of Available Items"/>
          </div>
          <div className="grid">
            <label>Image URL</label>
            <input type="text" name="imageURL" id="" className="shadow-md p-2 rounded-xl" placeholder="Enter Product Image URL"/>
          </div>
          <div className="text-center ">
            <button className="bg-green-400 p-3 rounded-2xl mb-8">Add Products</button>
          </div>
        </div>
      </form>
    </>
  );
};
