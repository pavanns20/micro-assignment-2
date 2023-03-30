
import './App.css';
import Form from './components/Form';
import LeftComponent from './components/LeftComponent';

function App() { 
  return (
    <div className="App">
      <div className='left'> <LeftComponent /></div>
      <div className="right">
      <div className="text-1">Try it free 7 days then ₹180/mo. thereafter</div>
      <Form />
        <div className="text-2">By clicking the button you are agreeing to our <b>Terms and Services</b> </div>
        </div>
    </div>
  );
}

 

export default App;

