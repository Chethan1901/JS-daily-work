import axios from "axios"

function fetchApi() {
    let keys = {
   
        auth: {
            username: "Chethan1901",
            password:"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",
        }
    }


axios.get("https://api.github.com/users" , keys)

.then((res) => {
    
    // let data = res.data
    // console.log(data)
    // console.log(res.data)
    // let avatar = data.map((img)=>{

    // })
   let arr = res.data.forEach(element => 
      Object.values(element)
    )

    console.log(arr)
    // arr.forEach(ele =>{
    //  console.log(ele)
    // })
})

.catch((err) => {
    console.error(err.response.status)
    console.error(err.response.data)
})
}

fetchApi()