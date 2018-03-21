/**
 * 定义Action方法，返回Action对象
 * {
 *   type:'action 类型' //必须
 *   //自定义数据
 * }
 */
let nextTodoId = 0

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}