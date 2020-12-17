import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
        porductoAction: 'home',
        codigoBuscado:'',
        productoTable:{
            codigo:'',
            nombre:'',
            precio:0,
            cantidad:0,
            seccion:''
        }
    },
    mutations:{
        changeProductoActionEditar(state, $event){
            state.porductoAction = "editar";
            state.productoTable.codigo = $event.target.parentElement.parentElement.children[0].textContent
            state.productoTable.nombre = $event.target.parentElement.parentElement.children[1].textContent
            state.productoTable.precio = $event.target.parentElement.parentElement.children[2].textContent
            state.productoTable.cantidad = $event.target.parentElement.parentElement.children[3].textContent
            state.productoTable.seccion = $event.target.parentElement.parentElement.children[4].textContent
            
        },
        changeProductoActionHome(state){
            state.porductoAction = 'home';
        },
        changeProductoActionNuevo(state){
            state.porductoAction = 'nuevo';
        },
        changeProductoActionAgregar(state){
            state.porductoAction = 'agregar';
        },
        changeProductoActionEliminar(state){
            state.porductoAction = 'eliminar';
        },
        buscarProductos(state, codigo){
            state.codigoBuscado = codigo
            console.log(codigo)
        }
    }

})