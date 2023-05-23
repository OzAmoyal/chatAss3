import { useState } from 'react';

function RegisterFormPicture({ formData, setter }) {
  const [profilePic, setProfilePic] = useState(null);
  const [imgURL, setProfilePicURL] = useState('');

  const handleImageChange = (e) => {
    const selectedProfilePic = e.target.files[0];
    const allowedExtensions = ['.png', '.jpg', '.jpeg'];

    // Check if the image ends with png, jpg, or jpeg
    if (selectedProfilePic && allowedExtensions.some(ext => selectedProfilePic.name.toLowerCase().endsWith(ext))) {
      setProfilePic(selectedProfilePic);

      const reader = new FileReader();
      reader.readAsDataURL(selectedProfilePic);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          setProfilePicURL(reader.result);
        };

        setter({
          ...formData,
          picture: reader.result,
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
    }
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
      {imgURL && (
        <div className="mt-2">
          <img src={imgURL} alt="Preview" width="200" />
        </div>
      )}
    </div>
  );
}

export default RegisterFormPicture;
