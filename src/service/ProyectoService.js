import axios from 'axios'

export class ProyectoService{
baseUrl = "http://localhost:8080/"
    getAll(){
        return axios.get(this.baseUrl + "proyectos").then(res=>res.data);
    }

    save(proyecto){
        return axios.post(this.baseUrl + "proyectos", proyecto).then(res => res.data);
    }

    delete(id){
        return axios.delete(this.baseUrl + "proyectos/"+id).then(res => res.data);
    }

}