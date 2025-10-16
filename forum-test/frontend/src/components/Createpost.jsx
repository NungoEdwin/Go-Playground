import{useState} from 'react'
import Modal from 'react-modal'
export default (prop)=>{
     const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
   const [textarea, setTextArea] = useState("");
   const [title, setTitle] = useState("");

const post={
  id:Date.now(),
  content:textarea,
  title
}

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Generate a preview
    }
  };
    return (
        <>
<Modal 
overlayClassName="fixed inset-0 bg-transparent backdrop-blur-2xl flex items-center justify-center z-50"   
 className="flex flex-col items-center shadow-lg p-20  bg-white"
 contentLabel="CreatePost" isOpen={prop.showModal} onRequestClose={prop.closeModal}>
<input  type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
<textarea  className="bg-gray-100 rounded w-100 focus:outline-none" rows="10" id  value={textarea} onChange={e=>setTextArea(e.target.value)}/>
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
<button className="bg-gray-700 rounded p-1.5 text-blue-400 mt-1.5" onClick={()=>{prop.CreatePost([...prop.Posts,post]); prop.closeModal()}} >Create Post</button>



 </Modal>
 
        
        </>
    )
}
 