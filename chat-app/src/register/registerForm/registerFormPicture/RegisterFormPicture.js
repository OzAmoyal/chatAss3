import { useState } from 'react';

function RegisterFormPicture({ formData, setter }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      localStorage.setItem('picture', imageData);
    };
    reader.readAsDataURL(file);
    const path = URL.createObjectURL(file); 
    setter({
      ...formData,
      picture: path,
    });
    
    setter((prev) => {
      return {
        ...prev,
        allowedSubmit: {
          ...prev.allowedSubmit,
          picture: true,
        },
      };
    });
  };
  

  return (
    <div className="mb-3">
      <label htmlFor="formFileSm" className="form-label">
        Picture
      </label>
      <input
        className="form-control"
        id="formFileSm"
        type="file"
        onChange={handleImageChange}
      />
      {image && (
        <div className="mt-2">
          <img src={image} alt="Preview" width="200" />
        </div>
      )}
    </div>
  );
}

export default RegisterFormPicture;
