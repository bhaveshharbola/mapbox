

const FetchApi=()=>{

    const api = "https://restcountries.com/v3.1/independent?status=true&fields=languages,capital";
    

    const fetchMapStyle = async(api)=>{
    try{
             const res= await fetch(api);
             const data = await res.json();
             console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
fetchMapStyle(api);
}
export default FetchApi ;