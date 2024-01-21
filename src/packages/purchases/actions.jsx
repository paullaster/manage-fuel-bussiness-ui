export const postVendor = async({request}) => {
    const data = Object.entries(await request.formData());
    console.log("submitted form ", data)
}