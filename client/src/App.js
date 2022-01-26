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
        <a href='https://poocoin.app/tokens/0x5d7568966c98d5904781fb029a947301c15ab9ad' className='outer-a'>PooCoin Chart</a>
        <a className='inner-a'>Liquidity Lock</a>
      </div>
      <div className='right-container'>
<<<<<<< HEAD
        <a href='https://twitter.com/BlackBeltCheems?s=09' target='__blank' rel='norefferer noopener' className='inner-a'>Twitter</a>
=======
        <a href='https://twitter.com/BlackBeltCheems?s=09' className='inner-a'>Twitter</a>
>>>>>>> 4d17678dc8fbbc4b84f46a042457ebc9ddcc2701
        <a className='outer-a'>Instagram</a>
      </div>
      <div className='contract-info-container'>
        <h3>contract address</h3>
        <img src={logo} className='coin-logo' alt='black belt cheems logo' />
        <h5>Master in the art of Shitcoins.</h5>
        <p>BBC is a grower not a shower. So let's grow this chart and take it to the moon. Diamond dicks only.</p>
      </div>
    </div>
  );
}

export default App