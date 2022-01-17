import './App.css'
import belt from './Black-belt-large.png'
import logo from './bbc-logo.png'

function App() {
  return (
    <div className="App">
      <div className='header-img-container'>
        <img src={belt} className='header-img' alt='black belt' />
      </div>
      <div className='left-container'>
        <a className='outer-a'>PooCoin Chart</a>
        <a className='inner-a'>Liquidity Lock</a>
      </div>
      <div className='right-container'>
        <a className='inner-a'>Twitter</a>
        <a className='outer-a'>Instagram</a>
      </div>
      <div className='contract-info-container'>
        <h3>contract address</h3>
        <img src={logo} className='coin-logo' alt='black belt cheems logo' />
        <h5>Master in the arts of Shitcoins.</h5>
        <p>BBC is a grower not a shower. So let's grow this chart and take it to the moon. Diamond dicks only.</p>
      </div>
    </div>
  );
}

export default App