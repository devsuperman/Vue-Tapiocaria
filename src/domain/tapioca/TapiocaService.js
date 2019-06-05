export default class TapiocaService{

    constructor(resource)
    {
        this.Resource = resource('tapiocas{/id}');   
    }

    listar()
    {
        return this.Resource.query()
            .then(res => res.json());
    }

    salvar(model)
    {
        if (model.id) {
            return this.Resource.update({id: model.id}, model);
        }
        else{            
            return this.Resource.save(model);
        }
    }

    apagar(id)
    {
        return this.Resource.delete({id});        
    }

    buscar(id)
    {
        return this.Resource.get({id})
        .then(res => res.json());
    }

}