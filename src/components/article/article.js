import { Link } from 'react-router-dom'
import './article.scss'

function Article(props) {
    return (
        <li className="col-12 col-sm-6 col-md-6	col-lg-4 col-xl-3 article-out">
            <Link to={`/detail/${props.item.id}`}> 
                <div className="article">
                    <figure className="article__cover">
                        <img src={props.item.imageUrl} />
                    </figure>
                    <h1 className="article__title">
                        {props.item.title}
                    </h1>
                    <div className="d-flex">
                        <div className="article__category">
                            category
                        </div>
                    </div>
                    <div className="article__desc">
                        {props.item.title}
                    </div>
                    <div className="article__view">
                        {props.item.hits}
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Article