import React, { Component } from 'react';
import { createPortal } from 'react-dom'; //портал для модалки
import './Modal.scss';

// - Модальное окно (componentDidMount и componentWillUnmount)
//   - Проблема z-index, как решать без костылей (порталы)
//   - Слушатель на keydown для Escape
//   - Слушатель на клик по Backdrop

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    //вешаем(регистрируем) слушатель события по esc отслеживания
    // window.addEventListener('keydown', e => {
    //   if (e.code === 'Escape') {
    //     console.log('Escape');
    //     this.props.onClose();
    //   }
    // });
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    //очистка(снимаем) слушателя события
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    //закрытие модалки кликом вне модалки
    // console.log('Кликнули в бекдроп');
    // console.log('currentTarget: ', event.currentTarget);
    // console.log('target: ', event.target);
    // const background = event.currentTarget === event.target;
    // console.log(background);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    //createPortal - порт для модалки что не использовать z-index
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
