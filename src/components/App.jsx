// import Painting from './Painting';
import Section from './Section';
import PaintingList from './PaintingList';
import paintings from '../data/painting.json';

// const paint = paintings[1];

// const {
//   id,
//   url,
//   title,
//   price,
//   author: { tag, url: authorUrl },
//   quantity,
// } = paint;

export default function App() {
  // const isOnline = true;

  return (
    <div>
      {/* <Painting
        //пропсы переданы с деструктурированного обьекта и на прямую
        //a='5' b={10} - props
        a="5"
        b={10}
        imageUrl={paintings[0].url}
        title={paintings[0].title}
        authorTag={paintings[0].author.tag}
        authorUrl={paintings[0].author.url}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
      />

      <Painting
        //пропсы переданы с деструктурированного обьекта и на прямую
        //a='5' b={10} - props
        a="5"
        b={10}
        imageUrl={paintings[1].url}
        title={paintings[1].title}
        authorTag={paintings[1].author.tag}
        authorUrl={paintings[1].author.url}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
      />

      <Painting
        //пропсы переданы с деструктурированного обьекта и на прямую
        //a='5' b={10} - props
        a="5"
        b={10}
        imageUrl={paintings[2].url}
        title={paintings[2].title}
        authorTag={paintings[2].author.tag}
        authorUrl={paintings[2].author.url}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
      /> */}

      {/* рендер по условию */}

      {/* обычное условие*/}
      {/* {isOnline && 'Онлайн'} */}

      {/* данные со значение false не рендерится  */}
      {/* {false} */}
      {/* {null} */}
      {/* {undefined} */}

      {/* тернарный оператор */}
      {/* {isOnline ? 'Онлайн' : 'Офлайн'} */}

      {/* Коллекции */}
      {/* {[1, 2, 3].map(e => (
        <div>{e}</div>
      ))}
      {paintings.map(painting => (
        <Painting
          // уникальный ключ для каждого элемента для лучшего понимания react. он ни где не рендерится. для реакта это важно
          key={painting.id}
          //пропсы переданы с деструктурированного обьекта и на прямую
          //a='5' b={10} - props
          a="5"
          b={10}
          imageUrl={painting.url}
          title={painting.title}
          authorTag={painting.author.tag}
          authorUrl={painting.author.url}
          price={painting.price}
          quantity={painting.quantity}
        />
      ))} */}
      {/* <PaintingList items={paintings} /> */}

      {/* Секция с вложеними детьми */}
      <Section title="Hero">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Favorite">
        <PaintingList items={paintings} />
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
