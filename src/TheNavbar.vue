<template>
    <header class="navbar">
        <strong>Cчетчик {{counter}}</strong>
        <!-- здесь у нас нет никаких пропсов, но инфа выводится и она реактивная -->
        <button class="btn" @click="addTwo">Добавить 2</button>
        <!-- при нажатии на кнопке так же изменится значение и в этом компоненте и в компоненте app -->
        <!-- но нам теперь приходится каждый раз писать длинную строку $store.state.counter++, и чтобы этого не делать store.js -->
    </header>
</template>
  
<script>
    import {mapGetters, mapMutations} from "vuex";//импорт мапперов(геттеры определяются в computed, мутации в methods)
    export default {
        computed: {
            counter(){//пример работы с модулями по старому синтаксису без мапов
                return this.$store.getters['counter/counter']
            }
            // ...mapGetters('counter',['counter'])/*так как метод возвращает объект и сам находится как бы внутри объекта то используем оператор
            // spread, в качестве параметра передаем массив с названиями геттеров, которые нам нужны*/ 
        },
        methods: {
            ...mapMutations('counter',['add']),
            addTwo(){
                //this.$store.commit("addFive"); – вызов метода addFive, добавляющего только 5
                //this.$store.commit('add', 2); //вызов метода с указанным количеством добавления, так же можно передать объект чтобы больше значений было 
                this.add(2);//так вызывается мутация переданная с помощью mapMutations, в параметрах передается payload
            }
        }
    }
</script>