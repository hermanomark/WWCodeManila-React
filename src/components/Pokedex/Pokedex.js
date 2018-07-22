import React, { Component } from "react";
import axios from "axios";
import PageContent from "../Elements/PageContent";

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0,
      pokemonList: []
    };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(response => {
        this.setState({
          totalCount: response.data.count,
          pokemonList: response.data.results
        });

        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getPokemonDetails = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  render() {
    return (
      <PageContent title="Pokedex" description="Get details of a pokemon">
        There are <strong>{this.state.totalCount}</strong> pokemons.
        {this.state.pokemonList.map((pokemon, index) => (
          <div key={index}>
            <a href={pokemon.url}>{pokemon.name}</a>
          </div>
        ))}
        {/* {this.state.pokemon.results} */}
      </PageContent>
    );
  }
}

export default Pokedex;
