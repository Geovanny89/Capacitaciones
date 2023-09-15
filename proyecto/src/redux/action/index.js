import axios from 'axios'


export function getEmpresas(){
    return async function(dispatch){
        const response = await axios.get('/empresa')
        return dispatch({
            type:'GET_EMPRESAS',
            payload: response.data
        })
    }
}
export function getDetailEmpresa(id) {
    return async function (dispatch) {
      try {
        const empresa = await axios.get(`/detail/empresa/${id}`);
        const detalle = empresa.data;
        dispatch({
          type: 'GET_DETAIL',
          payload: detalle,
        });
      } catch (error) {
        console.error(error);
      }
    };
  }

  export function crearEmpresa(empresaData){
    return async function (dispatch){
        try {
            const create = await axios.post('/empresa/crear',empresaData)
            dispatch({
                type:'POST_EMPRESA',
                payload:create
            })
        } catch (error) {
            console.log(error)
        }
    }
  }

  export function deleteEmpresa(id){
    return async function(dispatch){
      try {
        await axios.delete(`/empresa/${id}`);
        dispatch({
          type: 'DELETE_EMPRESA',
          payload:id
        })
      } catch (error) {
        console.log(error)
      }
    }
  }