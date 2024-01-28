import { Link } from "react-router-dom"

//import gif from "../assets/welcome.gif"
const MainPage = () => {
  return (
    <div className='container d-flex flex-column align-items-center gap-5 my-5'>
      <h1>Hoşgeldiniz!</h1>
      <img className='img-fluid rounded'
      src={"/tenor.gif"} alt="" />

      <p>
        <Link to= {'/ürünler'}>Ürünler Sayfasında</Link> Yeni çıkan tüm kitaplara ulasabilirsiniz
      </p>
      </div>
  )
}

export default MainPage