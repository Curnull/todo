/*
 Теперь описываем компонент для добавления нового элемента
*/
import React from 'react'
import { wrap } from 'wrap-wrap'
import { wrappers, addItem } from './domain'

/*
Описываем "глупый" компонент с инпутом и кнопкой добавить.
onChangeText - фунция которую надо вызвать при изменении текста в инпуте
text - текущее значение инпута
add - функция которую надо вызвать при нажатии на кнопку "Добавить"
disabled - флаг для указания активности кнопки "Добавить"
*/
export const AddItem = ( { onChangeText, text, add, disabled }) => (
  <div>
    <input type='text' onChange={(e) => onChangeText(e.target.value)} value={text} />
    <button type='button' onClick={add} disabled={disabled}>Добавить</button>
  </div>
)

export default wrap // компонент у нас есть, теперь начинаем его оборачивать и предоставлять необходимые проперти
  .withProps(() => ({
    text: wrappers.newItemText.state.value, // значение берем из стейта враппера newItemText
    onChangeText: wrappers.newItemText.methods.set, // метод для изменения текста берем из методов враппера newItemText
    add: addItem, // функицию берем из домена. Мы могли бы описать ее прямо тут, но это не очень верно, так как обертки должны быть максимально простыми, и по возможности не содержать логики
    disabled: !wrappers.newItemText.state.value, // определяем условия когда мы дизаблим кнопку, в нашем случае если не введен текст
  }))
  .component(AddItem); // замыкаем цепочку нашим глупым компонентом и получаем на выходе обернутый умный компонент
  