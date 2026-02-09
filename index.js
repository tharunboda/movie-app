import * as axios from "axios";
const URL="https://movies-app.tharunjadhav.repl.co/api/movies";

const getMovies = async (url) => {
    try{
        const data = await axios.get(url);
        
    }catch(err){

}
};
const res=getMovies(URL)
console.log(res)