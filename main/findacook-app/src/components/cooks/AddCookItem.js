import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../CSS/Style.css"

function AddMenuItem() {
  const [form, setForm] = useState({
    item_name: '',
    product_description: '',
    price: '',
    category: '',
    imageurls: [],
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:5001/cook/menucategories');
            if (response.data.status === 'SUCCESS') {
                setCategories(response.data.menuCategories);
            } else {
                alert('Error fetching menu categories');
            }
        } catch (error) {
            console.error('Error Fetching categories', error);
        }
      };
      fetchCategories();
  }, []);

  

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const selectedCategories = Array.from(e.target.selectedOptions, (option) => option.value);
    setForm({ ...form, category: selectedCategories });
  };
  

  
  const handleImageChange = (e) => {
    const fileList = Array.from(e.target.files);
    setForm({ ...form, imageurls: fileList });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // You will need to adjust this code to handle file uploads properly
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === 'imageurls') {
        value.forEach((file, index) => formData.append(`imageurls[${index}]`, file));
      } else {
        formData.append(key, value);
      }
    });
  
    try {
      await axios.post('http://localhost:5001/cook/addmenuitem', formData);
      alert('Menu item added successfully');
      setForm({
        item_name: '',
        product_description: '',
        price: '',
        category: '',
        imageurls: [],
      });
    } catch (error) {
      console.error('Error adding menu item:', error);
      alert('Error adding menu item');
    }
  };
  return (
    <div className='cookaddfood'>
      <h2>Add Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            name="item_name"
            value={form.item_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product Description:</label>
          <input
            type="text"
            name="product_description"
            value={form.product_description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            step="0.01"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            name="category"
            value={form.category}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.category_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Images:</label>
          <input
            type="file"
            name="imageurls"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Add Menu Item</button>
      </form>
    </div>
  );
  

}

export default AddMenuItem;

