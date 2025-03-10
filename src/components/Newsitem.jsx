import './Newsitem.css';

const Newsitem = ({title, description, src, url}) => {
    return(
<div className="card-container container width-2 display-flex flex-column align-center flex-center gap-1 border-1"> 
    <img className='news-img' src={src} alt="" />
    <h5 className='card-title'>{title}</h5>
    <p className='card-description'>{description}</p>
    <a href={url} className='btn-secondary'>ver más</a>
</div>
    )
}

export default Newsitem;