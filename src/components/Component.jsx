
import PropTypes from 'prop-types';

Component.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string
}


 export default function Component(props) {
  const { url, title, name } = props;
  return ( <div>
  <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>Автор:<a href={url}>{name}</a>
  </p>
  <p>Цена: кредитов</p>
  <p>Доступность: заканчивается или есть в наличии</p>
  <button type="button">Добавить в корзину</button>
</div>)
}


