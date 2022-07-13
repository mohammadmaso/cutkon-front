import client from "./client";


type materialType = { 
  name : string,
  type : string, 
  thickness : number 
}

const getProfiles = () => client.get("/auth/profile");


const sendOTP = (phoneNumber : string) => client.post("/auth/otp/generate", {
    "phone_number": phoneNumber
});

const postProfile = (firstName : string, lastName: string, address: string  ) => client.post("/auth/profile", {
    "first_name": firstName,
    "last_name" : lastName,
    "address" : address
});

const getAllMaterials = () => client.get("/materials")


const verifyOTP = (phoneNumber: string, otp : string) => client.post("/auth/otp/verify", {
    "phone_number": phoneNumber,
    "otp": otp
});

const initiateOrder = () => client.get("/order/initiate")


const getOrder = (orderId : number) => client.get(`/order/${orderId}`)

// const orderFileUpload = (orderId : number, mediaType : any, content : any) => client.post(`order/${orderId}/item/new`,{
//   content : content
// }, {
//   onUploadProgress: data => {
//         //Set the progress value to show the progress bar
//         return Math.round((100 * data.loaded) / data.total)
//         },
// })

const getOrderItem = (orderId : number , itemId : number) => client.get(`order/${orderId}/item/${itemId}`);

const postOrderItem = (orderId : number , itemId : number, description: string,  number: number,
  material: materialType) => client.post(`order/${orderId}/item/${itemId}` , {
  description : description,
  number : number,
  material : material
})

const submitOrder = (orderId : number) => client.get(`order/${orderId}/submit`);


export default { 
  sendOTP,
  verifyOTP,
  getProfiles,
  postProfile,
  submitOrder,
  postOrderItem,
  getOrderItem,
  // orderFileUpload,
  getOrder,
  initiateOrder,
  getAllMaterials,
};