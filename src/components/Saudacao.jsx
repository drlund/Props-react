import React, { Component } from "react";


class Saudacao extends Component {

    state = {
        // Valores iniciais em index.js através de props:
        tipo: this.props.tipo, // "Bom dia"
        nome: this.props.nome  // "Patrícia"
    }

    constructor(props){
        super(props)
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e){
        // let i = 1;
        // setInterval(()=> {
        //     this.setState({tipo:++i});
        // }, 1000)
        this.setState({tipo: e.target.value});
        // this.props.tipo = (e.target.value);
    }

    setNome(e){
        this.setState({nome: e.target.value});
    }

    render() {
        const {tipo, nome} = this.state
        return(
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" 
                       placeholder="Tipo..." 
                       value={tipo}
                       onChange={this.setTipo} // usando bind no construtor para referenciar a variável
                        />
                <input type="text" 
                        placeholder="Nome..." 
                        value={nome}
                        onChange={(e) => this.setNome(e)} // sem usar o construtor é necessário uma função arrow 
                                                          // passando o evento
                         />
            </div>
        )
    }
};

export default Saudacao;