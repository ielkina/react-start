import Painting from './Painting';
import PropTypes from 'prop-types';

function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {/* // уникальный ключ для каждого элемента для лучшего понимания react. он ни где не рендерится. для реакта это важно */}

          <Painting
            //пропсы переданы с деструктурированного обьекта и на прямую
            //a='5' b={10} - props
            a="5"
            b={10}
            imageUrl={item.url}
            title={item.title}
            authorTag={item.author.tag}
            authorUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

Painting.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default PaintingList;
