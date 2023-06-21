import { useNavigate, Link } from "react-router-dom";

const Halu  = () => {
  const navigate = useNavigate()
  return (
    <div className="App">
      <h1>Warung Pojokan Kali</h1>
    <nav>
      <Link to="home" className="mr">Home</Link>
      <Link to="about" className="mr">About</Link>
      
      <h3>Makanan Ringan & Berat</h3>
      <button onClick={() => navigate('/food')}>Pilih Menu</button>
      <h3>Minuman Dingin</h3>
      <button onClick={() => navigate('/drink')}>Pilih Menu</button>
      </nav>
        
    </div>
  )
}

export default Halu;