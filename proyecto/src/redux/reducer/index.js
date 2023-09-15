const initialState={
    empresas : [],
    detail:[]
}
function rootreducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_EMPRESAS':
            return{
                ...state,
                empresas:action.payload
            }
        case 'GET_DETAIL':
            console.log('detalle',action.payload)
            return{
                ...state,
                detail:action.payload
            }
        case 'POST_EMPRESA':
            return {
                ...state
            }
        case 'DELETE_EMPRESA':
            const filteredEmpresa = state.empresas.filter(
                (empresa)=>empresa._id !==action.payload
            );
            return{
                ...state,
                empresas:filteredEmpresa
            }
        default:
            return state;
    }
}
export default rootreducer;