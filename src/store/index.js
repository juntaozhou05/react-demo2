import {observable,action} from 'mobx'

class Store {
    @observable state = {
        number:1,
        age:11
    }
    @action add = () => {
        this.state.number++
    }
    @action des = () => {
        this.state.number--
    }
}

export default Store
