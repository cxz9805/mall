import { 
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutations-types";
// import { resolve } from "dns";
// import { reject } from "q";
export default {
  addCart(context,payload) {
    return new Promise((resolve,reject) => {
      //1.查找之前数组中是否有该商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    //2.判断oldProduct
    if(oldProduct) {
      // oldProduct.count += 1
      context.commit(ADD_COUNTER,oldProduct)
      resolve('添加到购物车数量加一')
    }else {
      payload.count = 1
      // context.state.cartList.push(payload)
      context.commit(ADD_TO_CART,payload)
      resolve('添加到购物车')
    }

    // let oldProduct = null
    // for(let item of state.cartList) {
    //   if(item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }
    // if(oldProduct) {
    //   oldProduct.count += 1
    // }  else {
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }
    })

    
  }
}