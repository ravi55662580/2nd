import React, { useState, useContext } from 'react';
import { ProductContext } from './ProductContext';

const ProductForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantities: {
      large: '',
      medium: '',
      small: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleQuantityChange = (e) => {
    const { name, value } = e.target;
    const [property, size] = name.split('.'); 
    setFormData((prevFormData) => ({
      ...prevFormData,
      quantities: {
        ...prevFormData.quantities,
        [size]: value, 
      },
    }));
    
    
    console.log(property); 
};


  

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
    setFormData({
      name: '',
      description: '',
      price: '',
      quantities: {
        large: 0,
        medium: 0,
        small: 0,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Tshirt Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="large">Large Size:</label>
        <input
          type="number"
          id="large"
          name="quantities.large"
          value={formData.quantities.large}
          onChange={handleQuantityChange}
          required
        />
      </div>
      <div>
        <label htmlFor="medium">Medium Size:</label>
        <input
          type="number"
          id="medium"
          name="quantities.medium"
          value={formData.quantities.medium}
          onChange={handleQuantityChange}
          required
        />
      </div>
      <div>
        <label htmlFor="small">Small Size:</label>
        <input
          type="number"
          id="small"
          name="quantities.small"
          value={formData.quantities.small}
          onChange={handleQuantityChange}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
