<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{upperCaseTitle}}</h1>
      <!-- <h2>Счетчик {{$store.state.counter}}</h2> -->
      <!-- с помощью $store.state.counter получаем доступ к свойству counter, и доступно оно из всех компонентов -->
      <!-- <h2>Счетчик {{$store.getters.counter}} ({{ $store.getters.doubleCounter }})</h2> -->
      <!-- использование getter вместо state гарантирует нам что мы не сможем случайно изменить значение -->
      <h2>Счетчик {{counter}} ({{ doubleCounter }})</h2>
      <!-- здесь мы использовали mapGetters для вывода информации из геттеров -->
      <button class="btn primary" @click="add()">Добавить</button>
      <button class="btn danger" @click="incrAsync()">Добавить 10</button>
      <!-- $store.commit('increment') вызывает мутацию, записанную в виде строки в параметрах функции commit -->
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex"//для каждого модуля потом мэпы объявляются отдельно
import TheNavbar from './TheNavbar'
export default {
  // data(){
  //   return {
  //     counter: 0,
  //   }
  // },
  methods: {
    ...mapMutations('counter',['increment']),//для модулльного первый параметр – название модуля
    // ...mapActions(['counter/incrementAsync']),//так же вызывается в блоке methods
    ...mapActions('counter', ['incrementAsync']),//для модулльного первый параметр – название модуля
    add(){
      // this.counter++
      //this.$store.state.counter ++;
      //это если бы делали как обычно по дефолту 
      //this.$store.commit('increment') – заменим на mapMutations
      this.increment();
    },
    incrAsync(){
      //this.$store.dispatch('incrementAsync', 10)//диспатч это тот же commit, только для actions, а не mutations. Сюда так же можно передать параметр
      this.incrementAsync(10);//так же заменили на mapActions
    }
  },
  computed: {
    //...mapGetters(['counter', 'doubleCounter', 'upperCaseTitle'])
    ...mapGetters(['upperCaseTitle']),//для глобального все как обычно
    ...mapGetters('counter', ['counter', 'doubleCounter']),//для модулльного первый параметр – название модуля
  },
  components: {
    'the-navbar': TheNavbar,
  }
}
</script>