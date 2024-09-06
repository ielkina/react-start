//хорошая практика всегда с начала импортировать абсолютные импорты (библиотеки) а затем относительные(локальные, собственные) компоненты
import PropTypes from 'prop-types';
import defaultImg from '../images/default.jpg'; //импортируем дефолтную картинку

export default function Painting({
  imageUrl = defaultImg, //устанавливаем дефолтную картинку на случай если не придет ответ с картинкой с сервера
  title = 'Не известен', //title - значение, 'Не  известен' - дефолтное значение на случай если не придет ответ с бэкэнда
  authorTag = 'не известно', //дефолтное значение, на случай если значение не придет
  authorUrl,
  // authorTag,
  price,
  quantity,
  id,
}) {
  //Имя функции пишут с большой буквы так как при рендеринге react воспринимает как строку а с большой как переменную
  // console.log(props);
  //деструктуризация пропсов так же можно деструктурировать в круглых скобках фн (сигнатуре)
  // const { url, title, author.url, tag, price, quantity } = props;
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>
        Доступность:{' '}
        {quantity < 10 ? 'Заканчивается. Осталось: ' : 'Есть в наличии: '}
        {quantity}
      </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.protoType = {
  //описываем типы наших props
  //propTypes  должны быть прописаны для каждого пропа
  //isRequired - обязательный пропс
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorTag: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  ig: PropTypes.number.isRequired,
};
