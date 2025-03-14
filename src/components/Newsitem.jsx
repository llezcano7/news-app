import './Newsitem.css';

const Newsitem = ({title, src, url, darkMode}) => {
    const handleClick = () => {
        window.open(url, "_blank");
        console.log("DARKMODE EN NEWSITEM:", darkMode); // 👀 Debug
      };
    return(
<div className={`card-container ${darkMode ? "dark" : ""}`} onClick={handleClick}>
  <div className='img-container'>
     <img className='news-img' src={src} alt="" />
  </div>
    <h5 className='card-title'>{title}</h5>
       <button className='btn'onClick = {handleClick}> more </button>
</div>
    )
}

export default Newsitem;