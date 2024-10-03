import { Component } from 'react';
// import {  Field } from 'formik';

const EditMaterialModal = ({ onClose, onEdit }) => {
  // const { item } = this.props;
  return (
    <div>
      <h2>Модалка редактирования материала</h2>
      {/* <p>
        Описание
        <b>Название:</b> {item.title}
        <label>
          Описание
          <Field name="title" type="text" />
        </label>
        <br />
      </p> */}
      <p>
        Ссылка
        {/* <b>Ссылка:</b> {item.link} */}
        {/* <label>
            Ссылка
            <Field name="link" type="text" />
          </label> */}
      </p>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Вот теперь точно редактировать
      </button>
      <button type="button" onClick={onClose}>
        Закрыть
      </button>
    </div>
  );
};

export class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item, onUpdate, onDelete } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <p>
          <b>Название:</b> {item.title}
        </p>
        <p>
          <b>Ссылка:</b> {item.link}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Удалить
        </button>
        <button type="button" onClick={this.openModal}>
          Редактировать
        </button>
        {isModalOpen && (
          <EditMaterialModal
            onClose={this.closeModal}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
          />
        )}
      </div>
    );
  }
}
