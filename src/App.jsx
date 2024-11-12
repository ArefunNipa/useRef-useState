import './App.jsx'
import { useRef} from 'react';
import Button from './components/Button';
import Menu from './components/Menu';

function App() {
  let dropRef = useRef(null)
  let handleDrop =()=>{
    // console.log(dropRef.current);
    if (dropRef.current.style.display =='block') {
      dropRef.current.style.display ='none'
    } else {
      dropRef.current.style.display ='block'
    }

  }
 
  return (
    <>
      <div className='mx-60 mt-20 ' onClick={handleDrop}>
        <Button btnName='Click' className={'text-white px-10 py-5 bg-teal-800'} />
        <div className="bg-teal-300 text-white hidden w-60" ref={dropRef}>
          <Menu menuTxt='Home' />
          <Menu menuTxt='about' />
          <Menu menuTxt='service' />
          <Menu menuTxt='contact' />
        </div>
      </div>
    </>
  )
}

export default App
