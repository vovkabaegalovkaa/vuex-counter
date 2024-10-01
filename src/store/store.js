/* в кажлом vue-компоненте у нас еать функция data(), котороая возвращает объект, то есть по сути является локальныйм стэйтом. Vuex
позволяет создавать и работать с глобальным стэйтом всего приложения, и управлять его состоянием.*/
import {createStore} from "vuex"
import CounterModule from "./modules/counter"//импортируем наш модуль

export default createStore({
    modules: {//новый блок отвечающий за подлкючение модулей
        counter: CounterModule//подключение модуля, counter – namespace для всего, что связано с модулем counter
    },
    // но так же можно и отдельно от модуля создать суперглобальный стэйт
    state(){
        return {
            appTitle: "Vuex is working!"
        }
    },
    getters: {//суперглобальный геттер
        upperCaseTitle(state){
            return state.appTitle.toUpperCase();
        }
    }
})