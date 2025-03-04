import './Newsitem.css';

const Newsitem = ({title, description, src, urlToImage}) => {
    return(
<div className="card-container"> 
    <img src={src} alt="" />
    <h5 className='card-title'>{title}</h5>
    <p className='card-description'>{description}</p>
    <a href={url} className='btn-secondary'>ver más</a>
</div>
    )
}

export default Newsitem;