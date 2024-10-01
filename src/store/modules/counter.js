export default {
    namespaced: true,/*этот аттрибут говорит о том что для этого модуля вводится своя приписка как бы к методам, потому что в vue файлах 
    при использовании map-ов названия пишутся просто как есть, и если в двух модулях есть одинаковые названия, то будет поломка*/
    state() {
        return {
            counter: 1
        }
    },
    mutations:{//аналог methods, в котором описываются мутации(изменения) нашего стейта
        increment(state){//всегда передаем сюда объект state
            state.counter++;
        },
        //просто дли примера сделаем для наввбара добавление сразу 5
        // addFive(state){
        //     state.counter += 5;
        // }
        // улучшенная версия метода addFive, позволяющая прибавить столько, сколько захотим
        add(state, payload){
            state.counter += payload;
        },
        // incrementAsync(state){ – это говно, так как суть мутации в том, чтобы мнгновенно изменить состояние, а для асинх исп actions
        //     setTimeout(() => {
        //         state.counter += 10;
        //     }, 2000)
        // }
    },
    actions: {
        incrementAsync(context, payload){
            setTimeout(() => {
                context.commit('add', payload);//context содержить в себе метод commit, работающий так же
            }, 1500)
        }
    },
    getters: {//аналог computed свойств
        counter(state){
            if(state.counter > 30){
                return state.counter + "!";/*здесь мы как бы управляем видимостью, так как если бы мы добавили ! в сам стэйт, 
                то методы перестали бы работать из-за того, что counter стал бы строкой
                (мы может трансформировать данные, не трансформируя сам стэйт)*/
            }
            return state.counter;
        },
        doubleCounter(state, getters){//можно еще вот так сделать
            return getters.counter * 2/*здесь когда мы дойдем до 30 будет конец, так как здесь мы уже работаем не со стэйтом,
            а значением которое нам вернет первый геттер, а он может вернуть и строку*/
        },
        /*в геттеры мы чаще всего передаем параметры state и getters, однако они представляют собой state и getters только текущего модуля,
        если мы хотим получить доступ к суперглобальному state и getters, то используем 3 и 4 параметры: rootState и rootGetters*/
        appTitle(state, getters, rootState, rootGetters){
            return rootState.appTitle;
        }
    }
}