import { useContext, useRef,} from "react"
import { dataContext } from "../../context/AppContext"


const HomeScreen = () => {

  const { setFiles } = useContext(dataContext);
  const inputRef = useRef(null);



  function handleFileChange(e) {
    setFiles(prev => [...prev, ...Array.from(e.target.files)])

  }
  function handleDrop(e){
    e.preventDefault();
    setFiles(prev => [...prev, ...e.dataTransfer.files])
  }

  



  return (
    <div className="homescreen-master-screen">
      <div className="form-container">
        <form className="input-container">
          <div
            onClick={() => { inputRef.current.click() }}
            onDragOver={e => { e.preventDefault();}}
            onDragLeave={e => {e.preventDefault();}}
            onDrop={(e) =>{handleDrop(e)}}
            className="wrapper" >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.0865 8.83268 22.1045 9.98979 21.8592 12" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7" stroke="#1C274C" strokeWidth="1.5" />
              <path d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5" stroke="#1C274C" strokeWidth="1.5" />
              <circle cx="16.5" cy="11.5" r="1.5" stroke="#1C274C" strokeWidth="1.5" />
              <path d="M19.9999 20L17.1157 17.8514C16.1856 17.1586 14.8004 17.0896 13.7766 17.6851L13.5098 17.8403C12.7984 18.2542 11.8304 18.1848 11.2156 17.6758L7.37738 14.4989C6.6113 13.8648 5.38245 13.8309 4.5671 14.4214L3.24316 15.3803" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p>DROP YOUR FILES</p>
            <input ref={inputRef} type="file" name="fileInput" multiple accept=".pdf" onChange={handleFileChange}></input>
          </div>
        </form>
      </div>
      <div className="database-container">

      </div>
    </div>
  )
}

export default HomeScreen
