const getters={
    //傳送登入的狀態
    check_login:state=>state.user.check,
    check_loading:state=>state.app.isLoading,
}
export default getters;

// ,getters:{
//     //傳送登入的狀態
//     check_login(state){
//       return state.user.check;
//     }
//   }