import axios from "axios"
import { toast } from "react-toastify"
const upload =async (file) =>{
  const data = new FormData()
  data.append("file", file)
  data.append("upload_preset", "fiverr")
  try {
   const res = await axios.post("http://api.cloudinary.com/v1_1/dasb1tcrb/image/upload", data)
   const {url} = res.data
  //  console.log({li: url})
   return url
  } catch (error) {
    toast("error uploading file")
    console.log(error)
  }
}

export default upload