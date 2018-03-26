import React from 'react'
import { wrap } from 'wrap-wrap'
import domain from './domain'
import AddItem from './AddItem'
import Items from './Items'

// Данный компоннт является "рутовым" для нашего комопнента todo так как содержит все остальные компоненты из текущей папки
// в нем мы просто отрисовываем все наши обернутые компоненты в нужном порядке и в нужных местах
export const TodoList = () => (
  <div>
    <Items />
    <AddItem />
  </div>
)

export default wrap
  .extend(domain) // добавлеяем наш экстендер домена к рутовому компоненту, что бы как только этот компонент был помещен на форму
    // все врапперы домена стали mounted и поместили свои state в глобальный store, и удалили их когда компоент будет убран с формы
  .component(TodoList);
  