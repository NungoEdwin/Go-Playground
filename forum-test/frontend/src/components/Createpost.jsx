import{useState} from 'react'
export default (prop)=>{
     const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Generate a preview
    }
  };
    return (
        <>
        
<div className="flex flex-col items-center shadow-lg p-20  bg-black bg-opacity-50">

<textarea  className="bg-gray-100 rounded w-100 focus:outline-none" rows="10" />
<label htmlFor="upload-image" className='bg-gray-700 text-blue-500 p-1.5 rounded m-1'>Upload Image:</label>
<input type="file" accept="image/*" id="upload-image" onChange={handleImageChange}/>
  {preview && (
        <div style={{ marginTop: '10px' }}>
          <p>Preview:</p>
          <img
            src={preview}
            alt="Selected"
            style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
          />
        </div>
      )}
<button className="bg-gray-700 rounded p-1.5 text-blue-400 mt-1.5" onClick={prop.closeModal} >Create Post</button>



 </div>
        
        </>
    )
}