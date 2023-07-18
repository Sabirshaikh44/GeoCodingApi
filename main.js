
const inputField = document.getElementById("location");
let address = "";
 inputField.addEventListener('keyup',(e)=>{
        address = e.target.value;   
 })
const getCord = async () =>{
    if(address){
        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=API_KEY`)
        const data = await res.json()
        console.log(data?.results[0]?.geometry?.location)
        Swal.fire({
            icon : 'success',
            title : 'Cordinates fetched SuccessFully!',
            text : `${address} is Located at Cordinates lat : ${data?.results[0]?.geometry?.location.lat} and long : ${data?.results[0]?.geometry?.location.lng}`,
        })
    }else{
        Swal.fire({ icon: 'info',
        title: 'Oops...',
        text: 'Pls enter something or check if its valid address!'})
    }
}
  
