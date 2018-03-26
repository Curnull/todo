import { list } from 'wrap-wrap'

// модифицируем стандартный враппер list что бы добавить в него новую логику
// в нашем случае в нем есть все кроме метода toggleDone который можно добавить с помощью метода .withMethods
export const todo = (initialValue) => list(initialValue).withMethods(({ getState }, methods) => ({
  ...methods,
  toggleDone: (item) => { // данный метод получает элемент списка в котом надо изменить значение поля done
    const index = getState().items.indexOf(item); // находи индекс переденнаго элемента
    if (index > -1) { // если нашли элемент то...
      methods.setProp(index, 'done', !getState().items[index].done) // меняем свойство 'done' на противоположное
    }
  },
}))